"use client";
import { useState } from "react";
import LandingButton from "./LandingButton";

const Price1 = ({ scrollToRef }) => {

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
    <div className="border-b-2 border-black bg-red-100">
      <div className="container pb-5 lg:pb-10 pt-20">
        <h1 className="text-2xl md:text-3xl font-bold text-center px-2 md:px-10 py-4  bg-[#f1593a] text-white rounded-md shadow-lg shadow-slate-600">
          eBitans-এ স্বল্প খরচে ই-কমার্সের সকল সুবিধাসহ ওয়েবসাইট এর দাম
        </h1>
        <div>
          <h2 className="font-bold text-2xl md:text-4xl text-center my-10 line-through">
            রেগুলার প্রাইস <span className="text-red-500 ">৪০০০</span> টাকা
          </h2>
          <h2 className="font-bold text-2xl md:text-4xl text-center my-10">
            অফার প্রাইস <span className="text-green-500 ">৩০০০</span> টাকা
          </h2>
          <h2 className="font-bold text-2xl md:text-4xl text-center mt-10 px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iusto
            blanditiis labore. Obcaecati atque doloribus quas corrupti
            exercitationem sapiente nisi aliquid quod quae voluptate iusto nam
            iure facilis voluptas tempora reprehenderit ex, quisquam ab neque.
            Debitis beatae deserunt unde facere, eos corporis recusandae sequi,
            fugit eveniet expedita, veniam minus fugiat?
          </h2>
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

export default Price1;
