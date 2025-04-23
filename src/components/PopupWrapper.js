"use client";
import { useEffect, useState } from "react";
import Popup from "./Popup";
import { usePathname } from "next/navigation";

const PopupWrapper = () => {
  const [showPopup, setShowPopup] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Don't show popup on /ecommerce (with or without locale)
    const shouldHidePopup = pathname?.endsWith("/ecommerce");

    if(shouldHidePopup) return;

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
