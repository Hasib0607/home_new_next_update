"use client";

import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const LandingContacts = () => {
  return (
    <>
      {/* Call Button - Bottom Left with Pulse Animation */}
      <a
        href="tel:+8801886515579"
        className="fixed bottom-8 left-4 md:left-8 z-50 text-white rounded-full shadow-lg transition duration-300 flex items-center justify-center bg-blue-500 w-16 h-16 text-2xl btn-call-pulse"
      >
        <FiPhoneCall />
      </a>

      {/* WhatsApp Button - Bottom Right with Pulse Animation */}
      <a
        href="https://wa.me/8801886515579"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-4 md:right-8 z-50 text-white rounded-full shadow-lg transition duration-300 flex items-center justify-center bg-[#25D366] w-16 h-16 text-2xl btn-whatsapp-pulse"
      >
        <FaWhatsapp />
      </a>

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
