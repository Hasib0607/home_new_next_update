"use client";
import { useEffect, useState } from "react";
import Popup from "./Popup";

const PopupWrapper = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      document.body.classList.add("overflow-hidden");
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    document.body.classList.remove("overflow-hidden");
  };

  // Also remove overflow-hidden if component unmounts
  useEffect(() => {
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return showPopup ? <Popup onClose={handleClose} /> : null;
};

export default PopupWrapper;
