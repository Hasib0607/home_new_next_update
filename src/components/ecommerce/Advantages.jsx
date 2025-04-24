"use client";
import LandingButton from "./LandingButton";

const Advantages = ({ scrollToRef }) => {
  const handleScroll = () => {
    if (scrollToRef?.current) {
      const topOffset = scrollToRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offset = -200; // adjust this value to scroll a bit higher (try -80 to -150 as needed)
  
      window.scrollTo({
        top: topOffset + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#F9F7F6] relative border-y-2 border-black">
      <div className="container ">
        <h1 className="text-2xl md:text-3xl font-bold text-center py-4 my-10 bg-[#f1593a] text-white px-2 rounded-md shadow-lg shadow-slate-600">
          eBitans থেকে ই-কমার্স ওয়েবসাইট নেওয়ার সুবিধাসমূহ
        </h1>
        <div className="flex gap-5 justify-center flex-col md:flex-row">
          <div className="border-2 border-black px-10 py-4 shadow-xl shadow-slate-600 w-full md:w-[450px]">
            <div className="flex items-center justify-center">
              <img
                src="/image/checkbox.webp"
                alt="checkbox"
                className="w-10 py-3"
              />
            </div>
            <h2 className="text-center font-bold text-2xl">
              আনলিমিটেড ক্লাউড হোস্টিং
            </h2>
            <p className="text-center text-lg py-3">
              আমরা Cloud হোস্টিং দিচ্ছি, আপনাকে আলাদা করে হোস্টিং কিনতে হবে না। 
            </p>
          </div>
          <div className="border-2 border-black px-10 py-4 shadow-xl shadow-slate-600 w-full md:w-[450px]">
            <div className="flex items-center justify-center">
              <img
                src="/image/checkbox.webp"
                alt="checkbox"
                className="w-10 py-3"
              />
            </div>
            <h2 className="text-center font-bold text-2xl">
              সুপার-ফাস্ট ওয়েবসাইট
            </h2>
            <p className="text-center text-lg py-3">
              ওয়েবসাইট হবে সুপার ফাস্ট, সর্বোচ্চ ১ সেকেন্ডের মধ্যে ওয়েবসাইট লোড হবে।
            </p>
          </div>
          <div className="border-2 border-black px-10 py-4 shadow-xl shadow-slate-600 w-full md:w-[450px]">
            <div className="flex items-center justify-center">
              <img
                src="/image/checkbox.webp"
                alt="checkbox"
                className="w-10 py-3"
              />
            </div>
            <h2 className="text-center font-bold text-2xl">লেটেস্ট টেকনোলজি</h2>
            <p className="text-center text-lg py-3">
              Next.js, React.js, Laravel, Vue.js দিয়ে ওয়েবসাইটে তৈরি করা
            </p>
          </div>
        </div>
        <div className="flex gap-5 justify-center mt-8 flex-col md:flex-row">
          <div className="border-2 border-black px-10 py-4 shadow-xl shadow-slate-600 w-full md:w-[550px]">
            <div className="flex items-center justify-center">
              <img
                src="/image/checkbox.webp"
                alt="checkbox"
                className="w-10 py-3"
              />
            </div>
            <h2 className="text-center font-bold text-2xl">
              সেরা কাস্টমার সাপোর্ট
            </h2>
            <p className="text-center text-lg py-3">
              শুক্রবারসহ সার্বক্ষণিক কাস্টমার সাপোর্ট
            </p>
          </div>
          <div className="border-2 border-black px-10 py-4 shadow-xl shadow-slate-600 w-full md:w-[550px]">
            <div className="flex items-center justify-center">
              <img
                src="/image/checkbox.webp"
                alt="checkbox"
                className="w-10 py-3"
              />
            </div>
            <h2 className="text-center font-bold text-2xl">
              দ্রুততম সময়ে ওয়েবসাইট ডেলিভারি
            </h2>
            <p className="text-center text-lg py-3">
              রেজিস্ট্রেশনের সাথেই কাস্টমারকে ওয়েবসাইট বুঝিয়ে দেওয়া হয়
            </p>
          </div>
          <div className="border-2 border-black px-10 py-4 shadow-xl shadow-slate-600 w-full md:w-[550px]">
            <div className="flex items-center justify-center">
              <img
                src="/image/checkbox.webp"
                alt="checkbox"
                className="w-10 py-3"
              />
            </div>
            <h2 className="text-center font-bold text-2xl">
              পছন্দমতো ওয়েবসাইট
            </h2>
            <p className="text-center text-lg py-3">
              নিজের পছন্দ অনুযায়ী ডিজাইনে ই-কমার্স ওয়েবসাইট তৈরি করতে পারবেন
            </p>
          </div>
        </div>
        <div className="flex justify-center pt-24 mb-16">
          <LandingButton
            onClick={handleScroll}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
