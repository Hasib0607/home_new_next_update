import Image from "next/image";

const POS = ({ data, locale }) => {
  const bangla = locale !== "en";
  return (
    <div className={`py-2 px-5 lg:px-0 ${data ? "mt-20" : "mt-5"}`}>
      <div
        className={`container px-5 lg:px-10 relative flex flex-col lg:flex-row gap-4 lg:gap-0  ${
          data ? "max-w-7xl" : "max-w-5xl"
        }`}
      >
        <div className="lg:pr-6 ">
          <div className="flex flex-col pr-4 space-y-2 pb-4 max-w-lg">
            <div className="bg-[#f1593a] rounded">
              <h3 className="sm:text-[28px] text-[22px] pl-2 py-1.5 font-extrabold text-white lg:text-left">
                {!bangla
                  ? "Best Point Of Sale (POS) System"
                  : "সেরা পয়েন্ট অফ সেল (POS) সিস্টেম"}
              </h3>
            </div>
            <p className="text-[14px]  text-[#8d8d8d] text-justify pt-2 pb-5">
              {!bangla
                ? `Affordable POS System in Bangladesh: Simplify Your Business with Ebitans
                  Ebitans offers the most affordable and efficient POS system in Bangladesh, designed to make managing your business easier than ever. With our platform, you don’t need to upload products separately for your POS and website—everything is seamlessly managed from one dashboard.
                  Ebitans lets you review past transactions effortlessly and maintain accurate records of your daily sales and expenses. Generating customer bills is quick and easy with a single click, and you can manage your inventory without any hassle.
                  If you’re looking for the best POS system in Bangladesh to simplify your operations and grow your business, Ebitans is the perfect solution. Start today and experience the ease of streamlined business management!
                  `
                : `বাংলাদেশের সাশ্রয়ী POS সিস্টেম: eBitans এর মাধ্যমে আপনার ব্যবসাকে সহজ করুন
                  eBitans আপনাকে বাংলাদেশে সবচেয়ে সাশ্রয়ী এবং কার্যকরী POS সিস্টেম অফার করছে, যা আপনার ব্যবসা পরিচালনাকে আরও সহজ করে তুলতে ডিজাইন করা হয়েছে। আমাদের প্ল্যাটফর্মের মাধ্যমে আপনার POS এবং ওয়েবসাইটের জন্য আলাদাভাবে পণ্য আপলোড করার প্রয়োজন নেই—সবকিছুই একটি ড্যাশবোর্ড থেকে সহজেই পরিচালিত হয়।
                  eBitans আপনাকে পূর্ববর্তী লেনদেন সহজেই পর্যালোচনা করতে এবং দৈনিক বিক্রয় ও খরচের সঠিক হিসাব রাখতে সাহায্য করে। এক ক্লিকেই গ্রাহকের বিল তৈরি করা যায়, এবং আপনার ইনভেন্টরি ব্যবস্থাপনা কোনো ঝামেলা ছাড়াই সম্পন্ন করা যায়।
                  যদি আপনি আপনার ব্যবসার পরিচালনা সহজ করতে এবং বৃদ্ধি ঘটাতে বাংলাদেশের সেরা POS সিস্টেম খুঁজে থাকেন, তবে eBitasn ই সঠিক সমাধান। আজই শুরু করুন এবং ঝামেলামুক্ত ব্যবসা পরিচালনার সুবিধা উপভোগ করুন!
              `}
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
            className={`hidden lg:flex absolute z-10 bottom-12 left-0 border-4 border-[#f1593a] rounded`}
          >
            <Image
              width={500}
              height={500}
              className={`h-full shadow-xl rounded ${
                data ? "w-[600px]" : "w-[600px]"
              }`}
              src={"https://ebitans.com/Image/service/Pos-system.jpg"}
              alt="ebitans image"
            />
          </div>
        </div>
        <div
          //   data-aos="fade-up"
          //   data-aos-duration="3000"
          className={`border-2 border-black rounded`}
        >
          <Image
            width={500}
            height={500}
            className="shadow-xl rounded-xl border-4 h-full w-full"
            src={"https://ebitans.com/Image/Ebitans-POS-L.jpg"}
            alt="ebitans image"
          />
        </div>
      </div>
    </div>
  );
};

export default POS;
