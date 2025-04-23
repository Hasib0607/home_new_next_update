"use client";

import LandingButton from "./LandingButton";

const Price = ({ scrollToRef }) => {
  const handleScroll = () => {
    if (scrollToRef?.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="container px-5 lg:px-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center px-2 md:px-10 py-4 my-10 bg-[#f1593a] text-white rounded-md shadow-lg shadow-slate-600">
          eBitans এর প্যাকেজের দাম সমূহ
        </h1>
        <div className="flex gap-8 justify-center flex-col md:flex-row">
          <div className="">
            <div className="rounded-lg overflow-hidden shadow-md mb-10 border-4 border-[#f1593a]">
              <img
                src="/image/besic.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center my-12">
              <LandingButton
                label="ওয়েবসাইট নিন"
                onClick={handleScroll}
                className="mx-auto"
              />
            </div>
          </div>
          <div>
            <div className="rounded-lg overflow-hidden shadow-md mb-10 border-4 border-black">
              <img
                src="/image/standard.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center my-12">
              <LandingButton
                label="ওয়েবসাইট নিন"
                onClick={handleScroll}
                className="mx-auto"
              />
            </div>
          </div>
          <div>
            <div className="rounded-lg overflow-hidden shadow-md mb-10 border-4 border-[#f1593a]">
              <img
                src="/image/standard-plus-6.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center my-12">
              <LandingButton
                label="ওয়েবসাইট নিন"
                onClick={handleScroll}
                className="mx-auto"
              />
            </div>
          </div>
          <div>
            <div className="rounded-lg overflow-hidden shadow-md mb-10 border-4 border-black">
              <img
                src="/image/premium plan.webp" 
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center my-12">
              <LandingButton
                label="ওয়েবসাইট নিন"
                onClick={handleScroll}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
