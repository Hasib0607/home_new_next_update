'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';

const Popup = ({ onClose }) => {
  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
    const fetchPopupData = async () => {
      try {
        const res = await axios.get('https://admin.ebitans.com/api/v1/popup/image');
        setPopupData(res.data.data);
      } catch (error) {
        console.error('Popup data fetch failed:', error);
      }
    };

    fetchPopupData();
  }, []);

  const handleClick = () => {
    window.open(
      'https://wa.me/8801886515579?text=Hi%20eBitans%2C%20I%20need%20help%20with%20your%20service',
      '_blank'
    );
    onClose();
  };

  if (!popupData) return null; // Wait for data to load

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999] px-4"
      onClick={handleClick}
    >
      <div
        className="relative bg-white p-6 rounded-lg shadow-lg text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close icon in top right */}
        <button
          onClick={handleClick}
          className="absolute top-1 right-1 p-1 text-white bg-gray-900 rounded-full hover:text-red-500 transition"
          aria-label="Close popup"
        >
          <AiOutlineClose size={24} />
        </button>

        {/* Popup Image */}
        {popupData.image && (
          <img
            src={`https://admin.ebitans.com/assets/images/setting/${popupData.image}`}
            alt="Popup"
            className="rounded w-full max-w-xs md:max-w-md lg:max-w-sm h-auto mx-auto"
          />
        )}

        {/* Optional Title/SubTitle */}
        {/* <h2 className="text-2xl font-bold mb-2">{popupData.title}</h2>
        <p className="mb-4">{popupData.subtitle}</p> */}
      </div>
    </div>
  );
};

export default Popup;
