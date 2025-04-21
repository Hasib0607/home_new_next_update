"use client";
import { useEffect, useState } from "react";
import Popup from "./Popup";

const PopupWrapper = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return showPopup ? <Popup onClose={handleClose} /> : null;
};

export default PopupWrapper;
