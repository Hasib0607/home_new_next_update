"use client";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const VideoModal = ({ videoUrl, onClose }) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.id === "modal-backdrop") {
        onClose();
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [onClose]);

  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
    >
      <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-2xl w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          <AiOutlineClose size={24} />
        </button>
        <div className="w-full aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={videoUrl}
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
