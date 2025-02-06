// import React from "react";
// import { FaWhatsapp } from "react-icons/fa";

// const WhatsAppPopup = () => {
//   const phoneNumber = "8801886515579"; // e.g., +8801234567890
//   const message = "হাই! আমি eBitans এবং এর সার্ভিস সম্পর্কে বিস্তারিত জানতে চাই?";

//   return (
//     <a

//       className="fixed-button"
//       href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
//       target="_blank"
//       rel="noopener noreferrer"
//     //   style={{
//     //     position: "fixed",
//     //     bottom: "20px",
//     //     right: "20px",
//     //     backgroundColor: "#25D366",
//     //     color: "white",
//     //     borderRadius: "50%",
//     //     width: "50px", // updated width
//     //     height: "50px", // updated height
//     //     display: "flex",
//     //     alignItems: "center",
//     //     justifyContent: "center",
//     //     boxShadow: "3px 3px 5px #999796", // updated box shadow
//     //     zIndex: 100, // updated z-index
//     //     cursor: "pointer",
//     //   }}

//     >

//         <div className="fixed-button whatsapp">
//         {/* Add your WhatsApp icon or content here */}
//         <FaWhatsapp size={30} />
//         </div>

//     </a>
//   );
// };

// export default WhatsAppPopup;



// import { useState } from "react";

// const WhatsAppChat = () => {
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [chatInfo, setChatInfo] = useState({ number: "", name: "", label: "" });
//   const [ setMessage] = useState("");
//   const message = "হাই! আমি eBitans এবং এর সার্ভিস সম্পর্কে বিস্তারিত জানতে চাই?";

//   const openChat = (number, name, label) => {
//     setChatInfo({ number, name, label });
//     setIsChatOpen(true);
//   };

//   const sendMessage = () => {
//     if (!message) return;
//     const baseUrl = /Android|iPhone/i.test(navigator.userAgent) ? "whatsapp://send" : "https://web.whatsapp.com/send";
//     const url = `${baseUrl}?phone=${chatInfo.number}&text=${encodeURIComponent(message)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       {/* Chat Toggle Button */}
//       <button
//         onClick={() => setIsChatOpen(!isChatOpen)}
//         className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2"
//       >
//         <i className="fab fa-whatsapp"></i>
//         <span>How can I help you?</span>
//       </button>

//       {/* Chat Box */}
//       {isChatOpen && (
//         <div className="bg-white w-80 p-4 rounded-lg shadow-xl fixed bottom-20 right-6 border border-gray-300">
//           <div className="bg-blue-600 text-white p-4 rounded-t-lg">
//             <h3>Hello!</h3>
//             <p>Click one of our representatives below to chat on WhatsApp.</p>
//           </div>

//           <div className="p-4 space-y-4">
//             {/* Support Contact */}
//             <div
//               className="flex items-center space-x-4 p-3 border rounded cursor-pointer hover:bg-gray-100"
//               onClick={() => openChat("8801886515578", "Shoykat", "Support")}
//             >
//               <img src="https://2.bp.blogspot.com/-y6xNA_8TpFo/XXWzkdYk0MI/AAAAAAAAA5s/RCzTBJ_FbMwVt5AEZKekwQqiDNqdNQJjgCLcBGAs/s70/supportmale.png" className="w-10 h-10 rounded-full" alt="Support" />
//               <div>
//                 <span className="text-sm text-gray-500">Support</span>
//                 <p className="text-lg font-semibold">Shoykat</p>
//               </div>
//             </div>

//             {/* Sales Contact */}
//             <div
//               className="flex items-center space-x-4 p-3 border rounded cursor-pointer hover:bg-gray-100"
//               onClick={() => openChat("8801886515579", "Adi", "Sales")}
//             >
//               <img src="https://4.bp.blogspot.com/-X1Xs2iRKabY/XXWzkqQ-iDI/AAAAAAAAA5w/HSyhR0gIXvUzlAx5XgaZzmlrCJkTgrOFQCLcBGAs/s70/supportfemale.png" className="w-10 h-10 rounded-full" alt="Sales" />
//               <div>
//                 <span className="text-sm text-gray-500">Sales</span>
//                 <p className="text-lg font-semibold">Adi</p>
//               </div>
//             </div>
//           </div>

//           {/* Message Box */}
//           {chatInfo.number && (
//             <div className="p-4 border-t">
//               <p className="text-sm mb-2">Chat with {chatInfo.name} ({chatInfo.label})</p>
//               <textarea
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder="Write a response..."
//                 className="w-full p-2 border rounded"
//               />
//               <button onClick={sendMessage} className="mt-2 w-full bg-blue-600 text-white py-2 rounded">Send</button>
//             </div>
//           )}

//           {/* Close Button */}
//           <button onClick={() => setIsChatOpen(false)} className="absolute top-2 right-2 text-gray-500 text-2xl">×</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WhatsAppChat;


import { useState } from "react";
import styles from "@/components/home/contact.module.css";
import 'font-awesome/css/font-awesome.min.css';
import { FaComments, FaTimes } from "react-icons/fa";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "8801886515578"; // e.g., +8801234567890
  const message = "আমি eBitans এবং এর সার্ভিস সম্পর্কে বিস্তারিত জানতে চাই?";

  const toggleServices = () => {
    setIsOpen(!isOpen); // Toggle icons visibility
  };

  return (
    <div id="sy-whatshelp" className={styles.whatshelp}>
      {/* Tooltip that appears when icons are not shown */}
      {!isOpen && (
        <div className={styles.openServicesTooltip}>
          Contact Us
        </div>
      )}

      {/* Floating service icons */}
      <div className={`${styles.services} ${isOpen ? styles.active : ""}`}>
        <a href="#" className={`${styles.serviceItem} ${styles.messenger}`} title="Livechat">
          <i className="fa fa-comments"></i>
        </a>
        <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} className={`${styles.serviceItem} ${styles.whatsapp}`} title="WhatsApp">
          <i className="fa fa-whatsapp"></i>
        </a>
        <a href="tel:+8801886515579" className={`${styles.serviceItem} ${styles.call}`} title="Call">
          <i className="fa fa-phone"></i>
        </a>
      </div>

      {/* Floating button that toggles icons */}
      <button onClick={toggleServices} className={`${styles.openServices}`} title="Contact Us">
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>
    </div>
  );
};

export default FloatingContact;
