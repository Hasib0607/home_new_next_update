import Image from "next/image";

const MobApp = ({ data, locale }) => {
  const bangla = locale !== "en";
  return (
    <div className={`py-2 px-5 lg:px-0 ${data ? "mt-20" : "mt-5"}`}>
      <div
        className={`container px-5 lg:px-10 relative flex flex-col lg:flex-row gap-4 lg:gap-0 justify-end ${
          data ? "max-w-7xl" : "max-w-5xl"
        }`}
      >
        <div className="lg:pr-6">
          <div className="flex flex-col space-y-2 pr-4 pb-4 max-w-lg">
            <div className="bg-[#f1593a] rounded">
              <h3 className="sm:text-[28px] text-[22px] font-bold text-white pl-2 py-1.5 lg:text-left">
                {!bangla ? "E-commerce Mobile App" : "ই-কমার্স মোবাইল অ্যাপ"}
              </h3>
            </div>
            <p className="text-[14px]  text-[#8d8d8d] text-justify pt-2 pb-5">
              {!bangla
                ? `eBitans offers a mobile app to help you present your eCommerce business to customers in a simple and attractive way. This app builds trust between your business and your customers. Designed with entrepreneurs in mind, the eBitans app ensures a seamless user experience. Customers will enjoy smooth shopping and excellent service through our app, tailored specifically for your eCommerce business. With eBitans, you stay ahead of the competition and offer your customers an easy and enjoyable online shopping experience. Expand your online business with our mobile eCommerce app today!`
                : `eBitans আপনার ইকমার্স ব্যবসাকে সহজ এবং আকর্ষণীয়ভাবে উপস্থাপন করতে একটি মোবাইল অ্যাপ প্রদান করে। এই অ্যাপ আপনার ব্যবসা এবং গ্রাহকদের মধ্যে বিশ্বাস স্থাপন করে। উদ্যোক্তাদের কথা বিবেচনা করে ডিজাইন করা ইবিতান্স অ্যাপ একটি নিরবচ্ছিন্ন ইউজার অভিজ্ঞতা নিশ্চিত করে।
                  গ্রাহকরা এই অ্যাপের মাধ্যমে সহজেই কেনাকাটা করতে পারবেন এবং অসাধারণ সেবা উপভোগ করবেন। ইবিতান্সের মোবাইল অ্যাপ আপনার ইকমার্স ব্যবসার জন্য বিশেষভাবে তৈরি, যা আপনাকে প্রতিযোগিতায় এগিয়ে রাখে এবং গ্রাহকদের জন্য সহজ ও উপভোগ্য অনলাইন কেনাকাটার অভিজ্ঞতা প্রদান করে। আজই ইবিতান্সের মোবাইল ইকমার্স অ্যাপ দিয়ে আপনার অনলাইন ব্যবসা প্রসারিত করুন!`}
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
            className={`hidden lg:flex absolute z-10 bottom-12 left-0 `}
          >
            <Image
              width={500}
              height={500}
              className={`h-full border-4 border-[#f1593a] shadow-xl rounded-xl ${
                data ? "w-[600px]" : " w-[600px]"
              }`}
              src={"https://ebitans.com/Image/Ebitans_Mobile App.jpg"}
              alt="ebitans image"
            />
          </div>
        </div>
        <div
          // data-aos="fade-up" data-aos-duration="3000"
          className={``}
        >
          <Image
            width={500}
            height={500}
            className="h-full w-full shadow-xl border-4 border-[#000] rounded"
            src={"https://ebitans.com/Image/EbitansMobile-Application1-L.jpg"}
            alt="ebitans image"
          />
        </div>
      </div>
    </div>
  );
};

export default MobApp;
