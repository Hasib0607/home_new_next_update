'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import LandingButton from './LandingButton';
import { useContext } from 'react';
import { AnalyticsContext } from '@/context/AnalyticsContext';

const LandingContacts = ({ scrollToRef }) => {
  const { setClickEvents } = useContext(AnalyticsContext);

  const handleScroll = () => {
    if (scrollToRef?.current) {
      const topOffset = scrollToRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offset = -160;

      window.scrollTo({
        top: topOffset + offset,
        behavior: 'smooth',
      });
    }
  };

  const handleCallClick = () => {
    setClickEvents((prev) => ({
      ...prev,
      call_button_click: true,
    }));
  };

  const handleWhatsappClick = () => {
    setClickEvents((prev) => ({
      ...prev,
      whatsapp_button_click: true,
    }));
  };

  return (
    <>
      {/* Call Button - Bottom Left with Pulse Animation */}
      <a
        href="tel:+8801886515579"
        onClick={handleCallClick}
        className="fixed bottom-24 md:bottom-8 left-4 md:left-8 z-50 text-white rounded-full shadow-lg transition duration-300 flex items-center justify-center bg-blue-500 w-16 h-16 text-2xl btn-call-pulse"
      >
        <FiPhoneCall />
      </a>

      {/* WhatsApp Button - Bottom Right with Pulse Animation */}
      <a
        href="https://wa.me/8801886515579"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsappClick}
        className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 text-white rounded-full shadow-lg transition duration-300 flex items-center justify-center bg-[#25D366] w-16 h-16 text-2xl btn-whatsapp-pulse"
      >
        <FaWhatsapp />
      </a>

      {/* Landing Button - Only Mobile */}
      <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 w-[90%] md:hidden z-50">
        <LandingButton
          label="ওয়েবসাইট তৈরি করুন"
          onClick={handleScroll}
          className="w-full"
          heartbeat={true}
        />
      </div>

      {/* Custom styles for pulse animations */}
      <style jsx>{`
        .btn-whatsapp-pulse,
        .btn-call-pulse {
          animation: pulse 1.5s ease-out infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);
          }
          80% {
            box-shadow: 0 0 0 14px rgba(0, 0, 0, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
          }
        }
      `}</style>
    </>
  );
};

export default LandingContacts;
