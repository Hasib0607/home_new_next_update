"use client";
// import { useState } from "react";
import LandingButton from "./LandingButton";

const Price1 = ({ scrollToRef }) => {

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
    <div className="border-b-2 border-black bg-red-100">
      <div className="container pb-5 lg:pb-10 pt-20">
        <h1 className="text-2xl md:text-3xl font-bold text-center px-2 md:px-10 py-4  bg-[#f1593a] text-white rounded-md shadow-lg shadow-slate-600">
          আপনার নিজের ই-কমার্স ওয়েবসাইট শুরু করুন এখনই মাত্র ২৪৯ টাকায়
        </h1>
        <div>
          <h2 className="font-bold text-2xl md:text-4xl text-center my-10 line-through">
            রেগুলার প্রাইস <span className="text-red-500 ">১৪৯০</span> টাকা
          </h2>
          <h2 className="font-bold text-3xl md:text-[50px] text-center my-10" heartbeat={true}>
            অফার প্রাইস <span className="text-green-500 text-3xl md:text-[80px]" heartbeat={true}>২৪৯</span> টাকা
          </h2>
          <h2 className="font-bold text-2xl md:text-4xl text-center mt-10 px-28" >
            এক মাস একদম ফ্রি ই-কমার্স ওয়েবসাইট ব্যবহার করুন —🛒 মাত্র ২৪৯ টাকায় রেজিস্ট্রেশন করে — আজই বিক্রি শুরু করুন আপনার নিজের ওয়েবসাইট থেকে!
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
