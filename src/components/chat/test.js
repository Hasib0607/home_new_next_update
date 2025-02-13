import { useState, useEffect, useRef } from 'react';
import styles from './Chat.module.css';
import axios from 'axios';
import Image from 'next/image';
import moment from 'moment';

const Chat = ({ onClose }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [isSettingsVisible, setIsSettingsVisible] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState('0'); // Default: Sales
    const [selectedLanguage, setSelectedLanguage] = useState('0'); // Default: English
    const [conversationID, setConversationID] = useState(null);
    const [conversation, setConversation] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(true);
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);
    const textareaRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [newMessage]);

    const handleSend = async () => {
        const messageText = newMessage.trim();
        if (!messageText) return;

        setIsSending(true);

        const newMessageObj = {
            text: messageText,
            isSelf: true,
            createdAt: new Date().toISOString(),
        }

        // Optimistically add user's message to UI
        setMessages((prev) => [...prev, newMessageObj]);
        setNewMessage('');

        try {
            // Send message to API
            const response = await axios.post(
                'https://admin.ebitans.com/api/v1/chat-message/send',
                {
                    conversation_id: conversationID,
                    agent_id: conversation?.agent_id,
                    sender_type: 'visitor',
                    message: messageText,
                }
            );

            // Add bot's response to UI
            if (
                response.data?.status &&
                response.data.data?.response?.content
            ) {
                const responseMessage = {
                    text: response.data.data.response.content,
                    isSelf: false,
                    createdAt: response.data.data.response.created_at,
                };

                setMessages((prev) => [...prev, responseMessage]);
            }
        } catch (error) {
            console.error('Error sending message:', error);
            // Optional: Show error message to user
            setMessages((prev) => [
                ...prev,
                {
                    text: 'Sorry, there was an error processing your message.',
                    isSelf: false,
                },
            ]);
        } finally {
            setIsSending(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const toggleSettings = () => {
        setIsSettingsVisible(!isSettingsVisible);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://admin.ebitans.com/api/v1/get-visitor/conversation',
                {
                    visitor_name: formData?.name,
                    visitor_phone: formData?.phone,
                    visitor_email: formData?.email,
                }
            );
            if (response?.data?.status) {
                const { visitor } = response.data;
                // Store session ID and conversation ID in sessionStorage
                sessionStorage.setItem('sessionID', visitor?.session_token);
                sessionStorage.setItem(
                    'conversationID',
                    response?.data?.conversation?.id
                );
                setConversationID(response?.data?.conversation?.id);
                setConversation(response?.data?.conversation);

                // Store selected language and topic in localStorage
                localStorage.setItem(
                    'selectedLanguage',
                    response?.data?.conversation?.lang
                );
                localStorage.setItem(
                    'selectedTopic',
                    response?.data?.conversation?.type
                );
                setSelectedLanguage(String(response?.data?.conversation?.lang));
                setSelectedTopic(String(response?.data?.conversation?.type));

                // Hide the form after successful submission
                setIsFormVisible(false);

                // Display bot's initial message
                setMessages([
                    {
                        text:
                            response?.data?.conversation?.last_message ||
                            'Hello, how can I help you?',
                        isSelf: false,
                    },
                ]);
            }
        } catch (error) {
            console.log('Error submitting form:', error);
            alert('Something went wrong. Please, try again!');
        }
    };

    // Retrieve stored values from session storage when the component loads
    useEffect(() => {
        const sessionId = sessionStorage.getItem('sessionID');
        const storedConversationID = sessionStorage.getItem('conversationID');
        const storedTopic = localStorage.getItem('selectedTopic');
        const storedLanguage = localStorage.getItem('selectedLanguage');

        if (sessionId) {
            setIsFormVisible(false);
        }
        if (storedConversationID) {
            setConversationID(storedConversationID);
        }
        if (storedTopic) {
            setSelectedTopic(storedTopic);
        }
        if (storedLanguage) {
            setSelectedLanguage(storedLanguage);
        }
    }, []);

    // Handle radio button and make API call
    const handleRadioChange = async (type, value) => {
        if (!conversationID) return;

        try {
            const updatedData = {
                type: type === 'topic' ? value : selectedTopic,
                lang: type === 'language' ? value : selectedLanguage,
                conversation_id: conversationID,
            };
            await axios.post(
                'https://admin.ebitans.com/api/v1/conversation/user-data-update',
                updatedData
            );

            if (type == 'topic') {
                setSelectedTopic(value);
                localStorage.setItem('selectedTopic', value);
            } else {
                setSelectedLanguage(value);
                localStorage.setItem('selectedLanguage', value);
            }
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    const getRelativeTime = (timestamp) => {
        return moment(timestamp).fromNow();
    };

    return (
        <div className={styles.chatContainer} ref={chatContainerRef}>
            <div className={`${styles.floatingChat} ${styles.expanded}`}>
                <div className={`${styles.chat} ${styles.chatVisible}`}>
                    <div className={styles.header}>
                        <div className={styles.headerTop}>
                            <span className={styles.title}>
                                what's on your mind?
                            </span>
                            <button
                                className={styles.closeButton}
                                onClick={onClose}
                            >
                                ×
                            </button>
                        </div>
                        <div className={styles.headerBottom}>
                            <button
                                className={`${styles.toggleButton} ${
                                    isSettingsVisible ? styles.active : ''
                                }`}
                                onClick={toggleSettings}
                            >
                                ▼
                            </button>
                        </div>
                    </div>

                    {isFormVisible ? (
                        <form
                            className={styles.chatForm}
                            onSubmit={handleFormSubmit}
                        >
                            <div className={styles.inputGroup}>
                                <label>Name:</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    placeholder="Write your name"
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Phone:</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            phone: e.target.value,
                                        })
                                    }
                                    placeholder="Write your number"
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    placeholder="Write your email address"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className={styles.submitButton}
                            >
                                Start Chat
                            </button>
                        </form>
                    ) : (
                        <>
                            {/* Settings Section */}
                            <div
                                className={`${styles.settingsContainer} ${
                                    isSettingsVisible ? styles.visible : ''
                                }`}
                            >
                                <div className={styles.settingsGroup}>
                                    <label>Topic</label>
                                    <div className={styles.radioGroup}>
                                        <label>
                                            <input
                                                type="radio"
                                                name="topic"
                                                value="1"
                                                checked={selectedTopic === '1'}
                                                onChange={(e) =>
                                                    handleRadioChange(
                                                        'topic',
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            Tech
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="topic"
                                                value="0"
                                                checked={selectedTopic === '0'}
                                                onChange={(e) =>
                                                    handleRadioChange(
                                                        'topic',
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            Sales
                                        </label>
                                    </div>
                                </div>

                                <div className={styles.settingsGroup}>
                                    <label>Language</label>
                                    <div className={styles.radioGroup}>
                                        <label>
                                            <input
                                                type="radio"
                                                name="language"
                                                value="1"
                                                checked={
                                                    selectedLanguage === '1'
                                                }
                                                onChange={(e) =>
                                                    handleRadioChange(
                                                        'language',
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            Bangla
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="language"
                                                value="0"
                                                checked={
                                                    selectedLanguage === '0'
                                                }
                                                onChange={(e) =>
                                                    handleRadioChange(
                                                        'language',
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            English
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <ul className={styles.messages}>
                                {messages.length === 0 ? (
                                    <p className="text-gray-500 text-center mt-4">
                                        No message found.
                                    </p>
                                ) : (
                                    messages.map((msg, index) => (
                                        <li
                                            key={index}
                                            className={`${
                                                styles.messageContainer
                                            } ${
                                                msg.isSelf
                                                    ? styles.selfContainer
                                                    : styles.otherContainer
                                            }`}
                                        >
                                            <div className={styles.icon}>
                                                {msg.isSelf ? (
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <Image
                                                        src="/chat/ebitans-logo.png"
                                                        alt="eBitans"
                                                        width={30}
                                                        height={30}
                                                        className="rounded-full"
                                                    />
                                                )}
                                            </div>
                                            <div
                                                className={`${styles.message} ${
                                                    msg.isSelf
                                                        ? styles.self
                                                        : styles.other
                                                }`}
                                            >
                                                {msg.text}
                                            </div>
                                            <div className={styles.timeStamp}>
                                                {getRelativeTime(msg.createdAt)}{' '}
                                                {/* Add time stamp here */}
                                            </div>
                                        </li>
                                    ))
                                )}
                                <div ref={messagesEndRef} />
                            </ul>
                            <div className={styles.footer}>
                                <textarea
                                    ref={textareaRef}
                                    className={styles.textBox}
                                    value={newMessage}
                                    onChange={(e) =>
                                        setNewMessage(e.target.value)
                                    }
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message..."
                                    rows="1"
                                />
                                <button
                                    className={styles.sendButton}
                                    onClick={handleSend}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Chat;
