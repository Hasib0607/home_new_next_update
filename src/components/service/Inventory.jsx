import Image from "next/image";

const Inventory = ({ data, locale }) => {
  const bangla = locale !== "en";
  return (
    <div className={`py-2 px-5 lg:px-0 ${data ? "mt-20" : "mt-5"}`}>
      <div
        className={`container px-5 lg:px-10 relative flex flex-col lg:flex-row gap-4 lg:gap-0 ${
          data ? "max-w-7xl" : "max-w-5xl"
        }`}
      >
        <div
          //   data-aos="fade-up"
          //   data-aos-duration="3000"
          className={`order-2 lg:order-1`}
        >
          <Image
            width={500}
            height={500}
            className="h-full w-full border-4 border-[#f1593a] shadow-xl rounded-xl"
            src={"https://ebitans.com/Image/Ebitans-inventory-L.jpg"}
            alt="ebitans image"
          />
        </div>
        <div className="order-1 lg:order-2 pb-4 lg:pl-4">
          <div className="flex flex-col space-y-2 max-w-lg">
            <div className="bg-[#f1593a] whitespace-normal rounded">
              <h3 className="sm:text-[28px] text-[22px] font-bold text-white pl-2 pr-2 py-1.5 lg:text-right">
                {!bangla
                  ? "Inventory Management Solution"
                  : "ইনভেন্টরি ম্যানেজমেন্ট সলিউশন"}
              </h3>
            </div>
            <p className="text-[14px] text-[#8d8d8d] whitespace-normal text-justify pt-2 pb-5">
              {!bangla
                ? `eBitans has introduced an easy-to-use inventory management solution designed to simplify accounting for small and medium-sized businesses. With a single dashboard, you can quickly access key data like product stock reports, purchase and sales transactions, stock levels, and stock-out details by branch. This system also sends notifications when stock is running low, so you can restock in time and avoid overstocking. Stay on top of your inventory effortlessly with eBitans.`
                : `eBitans ছোট ও মাঝারি ব্যবসার জন্য সহজেই ব্যবহারযোগ্য ইনভেন্টরি ম্যানেজমেন্ট সলিউশন চালু করেছে, যা হিসাব-নিকাশ সহজ করতে ডিজাইন করা হয়েছে। একটি মাত্র ড্যাশবোর্ড থেকে আপনি সহজেই পণ্য স্টকের রিপোর্ট, ক্রয় ও বিক্রয় লেনদেন, স্টকের পরিমাণ এবং ব্রাঞ্চ অনুযায়ী স্টক আউটের বিস্তারিত তথ্য দেখতে পারবেন।
                  এই সিস্টেমটি স্টক কমে গেলে নোটিফিকেশন পাঠায়, ফলে আপনি সময়মতো পণ্য পুনরায় মজুত করতে পারবেন এবং ওভারস্টকিং এড়াতে পারবেন। eBitans এর মাধ্যমে সহজেই আপনার ইনভেন্টরি ম্যানেজ করুন এবং ব্যবসাকে আরও সুসংগঠিত রাখুন।`}
            </p>

            {data && (
              <div className="relative w-max group">
                <button className=" text-[#f1593a] font-medium text-sm py-0 leading-5 font-details uppercase">
                  {data}
                </button>
                <p className="h-[1px] absolute bottom-0 bg-[#f1593a] w-full group-hover:scale-x-100 scale-x-0 duration-500"></p>
              </div>
            )}
          </div>

          <div
            // data-aos="fade-up"
            // data-aos-duration="3000"
            className={`hidden lg:flex absolute bottom-12 right-0 border-4 border-black rounded-xl`}
          >
            <Image
              width={500}
              height={500}
              className={`h-full shadow-xl rounded ${
                data ? "w-[600px]" : "w-[600px]"
              }`}
              src={"https://ebitans.com/Image/service/Inventory-02.jpg"}
              alt="ebitans image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
