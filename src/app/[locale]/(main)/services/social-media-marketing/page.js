import Image from "next/image";
import SocialPricing from "@/components/pricing/SocialPricing";
import Tenant from "@/components/social-media-marketing/Tenant";
import { fetchPricingData } from "@/helper/api";
import AnimatedLogo from "@/components/social-media-marketing/AnimatedLogo";
import Registration from "@/components/pricing/Registration";

export const metadata = {
  title: "Service of Social Media Marketing",
  description:
    "In today's digital world, social media is an essential tool for reaching customers and building your brand. But managing social media effectively can be time-consuming and require expertise. That's where Ebitans Social Media Marketing comes in. We help Bangladeshi e-commerce businesses like yours leverage the power of social media to connect with customers, drive traffic to your store, and ultimately, boost sales.",
};

const SocialMediaMarketing = async ({ params: { locale } }) => {
  const data = (await fetchPricingData()) ?? [];
  const bangla = locale !== "en";
  return (
    <div className=" bg-[#f7f7f7] lg:pt-[85px] pt-[50px] relative z-[1]">
      <div className="sm:h-[40vh] h-[15vh] bg-center bg-[length:100%_100%] flex flex-col gap-4 items-center justify-center bg-[url('https://ebitans.com/Image/cover/7.png')] bg-no-repeat ">
        <h1 className="text-md sm:text-lg md:text-xl lg:text-4xl font-bold text-[#393b39]">
          {!bangla ? "Social Media Marketing" : "সোশ্যাল মিডিয়া মার্কেটিং"}
        </h1>
        <h1 className=" text-xl sm:text-2xl md:text-4xl lg:text-7xl font-bold text-white">
          {!bangla
            ? "No Worries! Your Business In a Right Track"
            : "আপনি সঠিক পথটি বেছে নিয়েছেন"}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 container px-5 lg:px-10 ">
        <div className="py-28">
          <h1 className="text-4xl text-[#333] font-semibold font-Railway tracking-widest py-10 ">
            {!bangla
              ? "Grow Faster, Better, and Smarter with eBitans – The Best eCommerce Website Builder in Bangladesh"
              : "eBitans-এর সাথে দ্রুত, উন্নত এবং স্মার্টভাবে বৃদ্ধি করুন – বাংলাদেশে সেরা ই-কমার্স ওয়েবসাইট বিল্ডার"}
          </h1>
          <p className="text-[20px] pt-5 text-gray-500 font-light font-Railway leading-[32px]">
            {!bangla
              ? "At eBitans, we understand that growing your business isn’t just about you—it’s about creating a brand that resonates with your audience. To grow your business faster and smarter, there’s no alternative to attractive and impactful content, especially on social media."
              : "eBitans-এ, আমরা বুঝি যে আপনার ব্যবসা বাড়ানো শুধু আপনার ব্যাপার নয়—এটা এমন একটি ব্র্যান্ড তৈরি করার ব্যাপার যা আপনার দর্শকদের সাথে সংযুক্ত হয়। দ্রুত এবং স্মার্টভাবে আপনার ব্যবসা বৃদ্ধি করতে, আকর্ষণীয় এবং প্রভাবশালী কনটেন্টের কোনো বিকল্প নেই, বিশেষত সোশ্যাল মিডিয়ায়।"}
          </p>
          <p className="text-[20px] pt-5 text-gray-500 font-light font-Railway leading-[32px]">
            {!bangla ? (
              <>
                As the best eCommerce website builder in Bangladesh,{" "}
                <a
                  href="https://www.ebitans.com.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f1593a] underline"
                >
                  eBitans
                </a>{" "}
                offers more than just website-building tools. We help you create
                stunning, social media-ready content that enhances your online
                presence and engages your audience effectively.
              </>
            ) : (
              <>
                বাংলাদেশের সেরা ই-কমার্স ওয়েবসাইট বিল্ডার হিসেবে,{" "}
                <a
                  href="https://www.ebitans.com.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f1593a] underline"
                >
                  eBitans
                </a>{" "}
                শুধুমাত্র ওয়েবসাইট বিল্ডিং টুলস প্রদান করে না। আমরা আপনাকে
                সোশ্যাল মিডিয়ার জন্য উপযুক্ত চমৎকার কনটেন্ট তৈরি করতে সাহায্য
                করি যা আপনার অনলাইন উপস্থিতি বৃদ্ধি করে এবং আপনার দর্শকদের
                কার্যকরভাবে আর্কষণ করে।
              </>
            )}
          </p>
          <p className="text-[20px] pt-5 text-gray-500 font-light font-Railway leading-[32px]">
            {!bangla
              ? "Our expert team will handle everything, from designing captivating visuals to crafting compelling messages tailored for your business. With a strong focus on social media marketing, we’ll develop strategies to help you grow your business 10X faster online."
              : "আমাদের দক্ষ টিম আপনার জন্য সব কিছু করবে, আকর্ষণীয় ভিজ্যুয়াল ডিজাইন করা থেকে শুরু করে, আপনার ব্যবসার জন্য উপযুক্ত বার্তা তৈরি করা পর্যন্ত। সোশ্যাল মিডিয়া মার্কেটিং-এ দৃঢ় মনোযোগ সহ, আমরা এমন কৌশল তৈরি করবো যা আপনার ব্যবসা ১০X দ্রুত বৃদ্ধি করতে সাহায্য করবে।"}
          </p>
          <p className="text-[20px] pt-5 text-gray-500 font-light font-Railway leading-[32px]">
            {!bangla
              ? "Whether you're building your first eCommerce website or looking to expand your reach, eBitans ensures your brand looks professional and stands out in the competitive market. Trust us to create an eCommerce website that is optimized for performance and fully integrated with social media marketing tools to boost your sales and brand visibility."
              : "আপনি যদি আপনার প্রথম ই-কমার্স ওয়েবসাইট তৈরি করেন বা আপনার পৌঁছানোর ক্ষেত্র বৃদ্ধি করতে চান, eBitans নিশ্চিত করে যে আপনার ব্র্যান্ড পেশাদার এবং প্রতিযোগিতামূলক বাজারে সবার মধ্যে আলাদা হয়ে দাঁড়িয়ে থাকবে। আমাদের উপর বিশ্বাস রাখুন যাতে আমরা আপনার জন্য একটি পারফরম্যান্স-অপ্টিমাইজড ই-কমার্স ওয়েবসাইট তৈরি করি এবং সোশ্যাল মিডিয়া মার্কেটিং টুলসের সাথে পুরোপুরি একীভূত করি, যা আপনার বিক্রয় এবং ব্র্যান্ড ভিজিবিলিটি বাড়াবে।"}
          </p>
          <p className="text-[20px] pt-3 pb-5 text-gray-500 font-light font-Railway leading-[32px]">
            {!bangla
              ? "Choose eBitans today and grow your business with the perfect blend of technology and social media marketing!"
              : "আজই eBitans নির্বাচন করুন এবং প্রযুক্তি ও সোশ্যাল মিডিয়া মার্কেটিং-এর পারফেক্ট মিশ্রণের মাধ্যমে আপনার ব্যবসা বৃদ্ধি করুন!"}
          </p>
        </div>
        <div className="lg:-mb-20 w-full">
          <Image
            width={500}
            height={500}
            src={"https://ebitans.com/Image/ebitans_website_social.png"}
            className="lg:mt-40 h-auto w-auto"
            alt=""
          />
        </div>
      </div>

      <Tenant locale={locale} />
      <div className="mt-10">
        <SocialPricing social={data?.Digital_Plan} />
      </div>
      <AnimatedLogo />
      <div className="container px-5 lg:px-10">
        <Registration />
      </div>
    </div>
  );
};

export default SocialMediaMarketing;
