import { useState } from "react";
import styles from "@/components/home/contact.module.css";
import "font-awesome/css/font-awesome.min.css";
import { FaComments, FaTimes } from "react-icons/fa";
import Chat from "./chat/Chat";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const phoneNumber = "8801886515579"; // e.g., +8801234567890
  const message = "আমি eBitans এবং এর সার্ভিস সম্পর্কে বিস্তারিত জানতে চাই?";

  const toggleServices = () => {
    setIsOpen(!isOpen); // Toggle icons visibility
  };

  const handleOpenChat = () => {
    setShowChat(true);
    setIsOpen(false); // Close the service icons when opening chat
  };

  const handleCloseChat = () => {
    setShowChat(false);
    setIsOpen(true); // Optionally, you can reopen the service icons when closing the chat
  };

  return (
    <>
      <div id="sy-whatshelp" className={styles.whatshelp}>
        {/* Tooltip that appears when icons are not shown */}
        {!isOpen && !showChat && (
          <div className={styles.openServicesTooltip}>Contact Us</div>
        )}

        {/* Floating service icons */}
        <div className={`${styles.services} ${isOpen ? styles.active : ""}`}>
          <button
            onClick={handleOpenChat}
            className={`${styles.serviceItem} ${styles.messenger}`}
            title="Livechat"
          >
            <i className="fa fa-comments"></i>
          </button>
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
            className={`${styles.serviceItem} ${styles.whatsapp}`}
            title="WhatsApp"
          >
            <i className="fa fa-whatsapp"></i>
          </a>
          <a
            href="tel:+8801886515579"
            className={`${styles.serviceItem} ${styles.call}`}
            title="Call"
          >
            <i className="fa fa-phone"></i>
          </a>
        </div>

        {/* Floating button that toggles icons */}
        {!showChat && (
          <button
            onClick={toggleServices}
            className={`${styles.openServices}`}
            title="Contact Us"
          >
            {isOpen ? <FaTimes /> : <FaComments />}
          </button>
        )}
      </div>
      {showChat && <Chat onClose={handleCloseChat} />}
    </>
  );
};

export default FloatingContact;

