import Image from "next/image";
import Link from "next/link";

const Website = ({ data, locale }) => {
  const bangla = locale !== "en";
  return (
    <div className={`py-2 px-5 lg:px-0 ${data ? "mt-20" : "mt-5"}`}>
      <div
        className={`container px-5 lg:px-10 relative flex flex-col lg:flex-row gap-4 lg:gap-0 justify-end ${
          data ? "max-w-7xl" : "max-w-5xl"
        }`}
      >
        <div
          //   data-aos="fade-up"
          //   data-aos-duration="200"
          className={`order-2 lg:order-1`}
        >
          <Image
            width={500}
            height={500}
            className="rounded border-2 border-black h-full w-full"
            src={"https://ebitans.com/Image/service/ecommerce_01.jpg"}
            alt="ebitans image"
          />
        </div>
        <div className=" sm:mt-0 order-1 lg:order-2 pb-4 lg:pl-4 ">
          <div className="flex flex-col space-y-2 max-w-lg">
            <div className="bg-[#f1593a] rounded">
              <h3 className="sm:text-[28px] text-[22px] font-bold text-white px-2 py-1.5 lg:text-right">
                {!bangla
                  ? "Best eCommerce website with Next.js"
                  : "Next.js দিয়ে তৈরি সেরা ই-কমার্স ওয়েবসাইট"}
              </h3>
            </div>
            <p className="text-[14px]  text-[#8d8d8d] text-justify pt-2 pb-5">
              {!bangla
                ? `Best eCommerce Website Builder in Bangladesh: Build Yours Effortlessly with Ebitans
                  Are you looking for the best eCommerce website in Bangladesh? Ebitans is here to help you create your dream online store without needing any coding or drag-and-drop skills. Our platform is designed to make starting, managing, and growing your business simple and stress-free.
                  With a robust frontend built using React.js and a secure backend powered by Laravel, Ebitans delivers a seamless user experience. Our advanced technology ensures your website is fast, reliable, and optimized for success.`
                : `বাংলাদেশের সেরা ই-কমার্স ওয়েবসাইট নির্মাতা: eBitans এর মাধ্যমে সহজেই তৈরি করুন।
                  আপনি কি বাংলাদেশের সেরা ই-কমার্স ওয়েবসাইট খুঁজছেন? eBitans আপনার স্বপ্নের অনলাইন স্টোর তৈরি করতে সাহায্য করবে, যেখানে কোনো কোডিং বা ড্র্যাগ-এন্ড-ড্রপ দক্ষতার প্রয়োজন নেই। আমাদের প্ল্যাটফর্মটি এমনভাবে ডিজাইন করা হয়েছে যাতে আপনার ব্যবসা শুরু করা, পরিচালনা করা এবং বাড়ানো সহজ ও ঝামেলামুক্ত হয়।
                  আমাদের শক্তিশালী ফ্রন্টএন্ড রিয়্যাক্ট.জেএস ব্যবহার করে তৈরি এবং নিরাপদ ব্যাকএন্ড লারাভেল দ্বারা পরিচালিত। eBitans একটি মসৃণ ব্যবহারকারীর অভিজ্ঞতা প্রদান করে। আমাদের উন্নত প্রযুক্তি নিশ্চিত করে যে আপনার ওয়েবসাইট দ্রুত, নির্ভরযোগ্য এবং সাফল্যের জন্য অপ্টিমাইজড।
              `}
            </p>
            {data && (
              <Link href="/services/ecommerce-website">
                <div className="relative w-max group">
                  <button className=" text-[#f1593a] font-medium text-sm py-0 leading-5 font-details uppercase">
                    {data}
                  </button>
                  <p className="h-[1px] absolute bottom-0 bg-[#f1593a] w-full group-hover:scale-x-100 scale-x-0 duration-500"></p>
                </div>
              </Link>
            )}
          </div>

          <div
            // data-aos="fade-up"
            // data-aos-duration="3000"
            className={`mt-10 hidden lg:flex absolute bottom-12 right-0`}
          >
            <Image
              width={500}
              height={500}
              className={`h-full shadow-xl rounded-xl border-4 border-[#f1593a]  ${
                data ? "w-[600px]" : "w-[600px]"
              }`}
              src={"https://ebitans.com/Image/service/ecommerce_02.jpg"}
              alt="ebitans image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
