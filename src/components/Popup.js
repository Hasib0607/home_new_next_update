"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Popup = ({ onClose }) => {
    const [popupData, setPopupData] = useState(null);

    useEffect(() => {
        const fetchPopupData = async () => {
          try {
            const res = await axios.get("https://admin.ebitans.com/api/v1/popup/image");
            setPopupData(res.data.data);
          } catch (error) {
            console.error("Popup data fetch failed:", error);
          }
        };
    
        fetchPopupData();
      }, []);

  const handleClick = () => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Initiate phone call
      window.location.href = "tel:+8801886515579";
    } else {
      // Open WhatsApp chat (desktop browser version)
      window.open("https://wa.me/8801886515579?text=Hi%20eBitans%2C%20I%20need%20help%20with%20your%20service", "_blank");
    }

    onClose();
  };

  console.log(popupData);

  if (!popupData) return null; // Wait for data to load

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        {popupData.image && (
          <img
            src={`https://admin.ebitans.com/assets/images/setting/${popupData.image}`}
            alt="Popup"
            className="w-full h-auto mb-4 rounded"
          />
        )}
        <h2 className="text-xl font-bold mb-2">{popupData.title}</h2>
        <p className="mb-4">{popupData.subtitle}</p>
        <button
          onClick={handleClick}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
