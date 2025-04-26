"use client";
import { useState } from "react";
import LandingButton from "./LandingButton";

const Youtube = ({ scrollToRef }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleScroll = () => {
    if (scrollToRef?.current) {
      const topOffset =
        scrollToRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offset = -200;

      window.scrollTo({
        top: topOffset + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="">
      <div className="container pb-5 lg:pb-10 pt-20">
        <h1 className="text-2xl md:text-3xl font-bold text-center px-2 md:px-10 py-4  bg-[#f1593a] text-white rounded-md shadow-lg shadow-slate-600">
          eBitans-এর Youtube link
        </h1>
        <div>
          <h2 className="font-bold text-2xl md:text-4xl text-center my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </h2>
          <div className="flex justify-center my-10">
            <div className="w-full md:w-2/3 aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 md:h-96 rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/UV0mhY2Dxr0?si=wkTgCw6TPTd39K0t"
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
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
    </div>
  );
};

export default Youtube;
