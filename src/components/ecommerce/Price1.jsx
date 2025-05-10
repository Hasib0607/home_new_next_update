"use client";
import LandingButton from "./LandingButton";
import "./landingButton.css";

const Price1 = ({ scrollToRef }) => {
  const handleScroll = () => {
    if (scrollToRef?.current) {
      const topOffset =
        scrollToRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offset = -160;

      window.scrollTo({
        top: topOffset + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="border-b-2 border-black bg-red-100">
      <div className="container px-4 pt-24 pb-10 md:pt-32 md:pb-20">
        <h1 className="text-[#000] leading-8 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white text-center text-3xl md:text-5xl font-extrabold py-6 px-4 md:px-12 rounded-2xl shadow-xl animate-pulse tracking-wide leading-snug">
          আপনার নিজের ই-কমার্স ওয়েবসাইট দিয়ে <br className="hidden md:block" /> বিক্রি শুরু করুন এখনই
        </h1>

        <div className="flex justify-center pt-8 md:pt-24 mb-8 md:mb-16">
          <LandingButton
            onClick={handleScroll}
            label="ওয়েবসাইট তৈরি করুন "
            heartbeat={true}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Price1;
