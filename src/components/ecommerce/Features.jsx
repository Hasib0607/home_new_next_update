"use client";
import { useState } from "react";
import LandingButton from "./LandingButton";
import VideoModal from "./VideoModal";

const videoData = [
  { src: "/image/payment-getway.webp", videoUrl: "https://www.youtube.com/embed/EFPk-Cyb-bo" },
  { src: "/image/pixel.webp", videoUrl: "https://www.youtube.com/embed/udxpwATYASQ" },
  { src: "/image/order.webp", videoUrl: "https://www.youtube.com/embed/aXtCpdwvmuo" },
  { src: "/image/order-manegement.webp", videoUrl: "https://www.youtube.com/embed/DKh49y0B8BQ" },
  { src: "/image/gtm.webp", videoUrl: "https://www.youtube.com/embed/6adBh9ZfIBQ" },
  { src: "/image/mobile-app.webp", videoUrl: "https://www.youtube.com/embed/0JbCpG85UjA" },
  { src: "/image/after-sales.webp", videoUrl: "" },
  { src: "/image/courier.webp", videoUrl: "" },
  { src: "/image/pos.webp", videoUrl: "https://www.youtube.com/embed/jyxU4qGTntM" },
  { src: "/image/customer.webp", videoUrl: "" },
];

const Features = ({ scrollToRef }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleScroll = () => {
    if (scrollToRef?.current) {
      const topOffset = scrollToRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offset = -160;

      window.scrollTo({
        top: topOffset + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="border-y-2 border-black bg-red-100">
      <div className="container pb-5 lg:pb-10 pt-20">
        <h1 className="text-2xl md:text-3xl font-bold text-center px-2 md:px-10 py-4  bg-[#f1593a] text-white rounded-md shadow-lg shadow-slate-600">
          eBitans-এ স্বল্প খরচে ই-কমার্সের সকল সুবিধাসহ ওয়েবসাইট
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {videoData.map((item, index) => (
            <div key={index} className="text-center ">
              <img src={item.src} alt="" className="mx-auto" />
              <button
                onClick={() => setSelectedVideo(item.videoUrl)}
                className=" bg-[#f1593a] text-white px-4 py-2 rounded-md text-sm shadow hover:bg-[#d8482c] transition"
              >
                ভিডিও দেখুন
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-8 md:pt-24 mb-8 md:mb-16">
          <LandingButton
            onClick={handleScroll}
            label="ওয়েবসাইট তৈরি করুন এখনই"
            heartbeat={true}
            className="mx-auto"
          />
        </div>
      </div>

      {selectedVideo && (
        <VideoModal videoUrl={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </div>
  );
};

export default Features;
