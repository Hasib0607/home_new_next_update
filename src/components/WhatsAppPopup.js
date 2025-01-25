import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppPopup = () => {
  const phoneNumber = "8801886515579"; // e.g., +8801234567890
  const message = "হাই! আমি eBitans এবং এর সার্ভিস সম্পর্কে বিস্তারিত জানতে চাই?";

  return (
    <a
      
      className="fixed-button"
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
    //   style={{
    //     position: "fixed",
    //     bottom: "20px",
    //     right: "20px",
    //     backgroundColor: "#25D366",
    //     color: "white",
    //     borderRadius: "50%",
    //     width: "50px", // updated width
    //     height: "50px", // updated height
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     boxShadow: "3px 3px 5px #999796", // updated box shadow
    //     zIndex: 100, // updated z-index
    //     cursor: "pointer",
    //   }}
      
    >

        <div className="fixed-button whatsapp">
        {/* Add your WhatsApp icon or content here */}
        <FaWhatsapp size={30} />
        </div>
      
    </a>
  );
};

export default WhatsAppPopup;
