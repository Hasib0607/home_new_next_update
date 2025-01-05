import images from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

const SocialMedia = ({ data, locale }) => {
  const bangla = locale !== "en";
  return (
    <div className={`py-2 px-5 lg:px-0 ${data ? "mt-20" : "mt-5"}`}>
      <div
        className={`container px-5 lg:px-10 relative flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between ${
          data ? "max-w-7xl" : "max-w-5xl"
        }`}
      >
        <div className="lg:pl-6 lg:order-last">
          <div className="flex flex-col space-y-2 pr-4 pb-4 max-w-lg">
            <div className="bg-[#f1593a] rounded">
              <Link href="/social-media-marketing">
                <h3 className="sm:text-[28px] text-[22px] font-bold text-white pl-2 pr-2 py-1.5 lg:text-right lg:cursor-pointer">
                  {!bangla
                    ? "Social Media Marketing"
                    : "সোশ্যাল মিডিয়া মার্কেটিং"}
                </h3>
              </Link>
            </div>
            <p className="text-[14px]  text-[#8d8d8d] text-justify pt-2 pb-5">
              {!bangla
                ? `An eye-catching online advertisement is key to promoting your business and reaching millions of potential customers. With eBitans, the best digital marketing agency, you can showcase your brand with professional banners, images, colors, dynamic text, videos, logos, and ad extensions. We specialize in retargeting, ensuring your brand appears to users across the web who interact with your ads. Enhance your brand’s visibility and grow your business with eBitans’ effective online advertising solutions. Boost your reach and brand recognition today!`
                : `আকর্ষণীয় অনলাইন বিজ্ঞাপন আপনার ব্যবসাকে প্রচার করার এবং লক্ষ লক্ষ সম্ভাব্য গ্রাহকের কাছে পৌঁছানোর মূল চাবিকাঠি। ইবিতান্স, বাংলাদেশের সেরা ডিজিটাল মার্কেটিং এজেন্সি, আপনার ব্র্যান্ডকে প্রফেশনাল ব্যানার, ছবি, রঙ, ডাইনামিক টেক্সট, ভিডিও, লোগো এবং অ্যাড এক্সটেনশনের মাধ্যমে তুলে ধরতে সাহায্য করে।
                  আমরা রিটার্গেটিং-এ বিশেষজ্ঞ, যা নিশ্চিত করে যে আপনার ব্র্যান্ড ইন্টারনেটজুড়ে আপনার বিজ্ঞাপনের সাথে যোগাযোগকারী ব্যবহারকারীদের সামনে প্রদর্শিত হবে। ইবিতান্সের কার্যকর অনলাইন বিজ্ঞাপন সমাধানের মাধ্যমে আপনার ব্র্যান্ডের দৃশ্যমানতা বৃদ্ধি করুন এবং ব্যবসাকে আরো বড় পরিসরে নিয়ে যান। আজই আপনার পৌঁছানো এবং ব্র্যান্ডের পরিচিতি বাড়ান ইবিতান্সের সাথে!`}
            </p>

            {data && (
              <Link href="/services/social-media-marketing">
                <div className="relative w-max group">
                  <button className=" text-[#f1593a] font-medium text-sm py-0 leading-5 font-details uppercase">
                    {data}
                  </button>
                  <p className="h-[1px]  absolute bottom-0 bg-[#f1593a] w-full group-hover:scale-x-100 scale-x-0 duration-500"></p>
                </div>
              </Link>
            )}
          </div>
          <div
            // data-aos="fade-up"
            // data-aos-duration="3000"
            className={`hidden lg:flex absolute z-10 bottom-12 right-0`}
          >
            <Image
              width={500}
              height={500}
              className={`h-full shadow-xl border-4 border-black rounded-xl ${
                data ? "w-[600px]" : "w-[600px]"
              }`}
              src={images?.social2}
              alt="ebitans image"
            />
          </div>
        </div>
        <div
          //   data-aos="fade-up"
          //   data-aos-duration="3000"
          className={` lg:order-1`}
        >
          <Image
            width={500}
            height={500}
            className="h-full w-full shadow-xl border-4 border-[#f1593a] rounded-xl"
            src={images?.social1}
            alt="ebitans image"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
