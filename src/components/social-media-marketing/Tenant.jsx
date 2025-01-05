"use client";
import caption from "@/assets/images/caption.png";
import graphics from "@/assets/images/graphics.png";
import video from "@/assets/images/video.png";
import gify from "@/assets/images/gify.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const Tenant = ({ locale }) => {
  const [isBlurActive, setIsBlurActive] = useState(false);

  const bangla = locale !== "en";

  const handleScroll = () => {
    if (window.scrollY > 1200) {
      setIsBlurActive(true);
    } else if (window.scrollY <= 1200) {
      setIsBlurActive(false);
    }
  };

  // Attach scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-[#F97171] py-10 mt-[-120px] ">
      <div className="container px-5 lg:px-10">
        <div
          className={`w-full px-3 lg:sticky top-[-40px] h-max pt-36 bg-[#F97171] ${
            isBlurActive ? "border-b-2 shadow-lg pb-3 " : ""
          } `}
        >
          <h1 className="xl:text-[75px] text-5xl font-medium">
            {!bangla ? (
              <span>
                Social Media <br />
                Marketing Offers
              </span>
            ) : (
              <span>
                সোশ্যাল মিডিয়া <br />
                মার্কেটিং-এর সেবা সমূহ{" "}
              </span>
            )}
          </h1>
        </div>

        {data.map((item) => {
          return (
            <div>
              <div className="grid lg:grid-cols-2">
                <div>
                  <Image
                    src={item?.img}
                    alt=""
                    className="xl:h-48 h-36 xl:mb-0 mb-5 xl:mt-32 mt-20 lg:pl-32 w-auto"
                  />
                </div>
                <div></div>
              </div>

              <div className="grid lg:grid-cols-2">
                <div></div>
                <div className="py-10 xl:pr-20 md:pl-20 lg2:pl-0">
                  <h1 className="xl:text-[65px] text-3xl xl:leading-[65px] leading-[40px] font-bold uppercase">
                    {!bangla ? item?.title : item?.titleBg}
                  </h1>
                  <p className="text-[22px] text-white font-medium pt-10">
                    {!bangla ? item?.description : item?.descriptionBg}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tenant;

const data = [
  {
    id: 1,
    img: graphics,
    title: "graphics content",
    titleBg: "গ্রাফিক্স কনটেন্ট",
    description:
      "Graphic design plays a pivotal role in capturing the attention of your target audience. With only seconds to truly stand out, striking visuals are one of the most powerful tools businesses rely on for success. We understand that your time is valuable. This is where we step in. We provide Graphic Design services including Logo design, Banner Design, social Post Design, Product Image Creation, and other essential design services to grow your business.",
    descriptionBg:
      "গ্রাফিক্স ডিজাইন আপনার টার্গেট গ্রাহকের মনোযোগ আকর্ষণ করার জন্য গুরুত্বপূর্ণ ভূমিকা পালন করে। একটি স্ট্রাইকিং ভিজুয়াল পারে কম্পিটিটর থেকে আপনার ব্যবসাকে এগিয়ে নিতে। এটি হচ্ছে যেকোন ব্যবসায় সফলতা আনার শক্তিশালী টুলগুলির একটি। আমরা জানি আপনার সময়ের মূল্য, আর তাই আমাদের সার্ভিসের মধ্যে পাবেন লোগো, ব্যনার, সোশ্যাল মিডিয়া, প্রোডাক্ট ইমেজ সহ অন্যান্য প্রয়োজনীয় সকল ডিজাইন সেবা।",
  },
  {
    id: 2,
    img: video,
    title: "Digital short video",
    titleBg: "ডিজিটাল শর্ট ভিডিও",
    description:
      "Nothing helps your audience connect with and relate to your company more than a strong brand video. A video puts a face to a name and allows your customers to witness the sincerity of your company and its offerings. Individuals like to buy from other people. If people have faith in you, they are far more likely to buy from you. To elevate your business into a brand, we are providing impactful digital short video service.",
    descriptionBg:
      "স্ট্রং ব্র্যান্ড ভিডিও পারে ক্রেতাদের সাথে আপনার ব্যবসার একটি দৃড় সম্পর্ক তৈরী করতে। একমাত্র ভিডিও পারে আপনার গ্রাহকদের সাথে ব্রান্ডের ইমোশনাল কানেকশন বানাতে যা দর্শকদের পন্য সম্পর্কে আগ্রহী করে। এরফলে ক্রেতার বিশ্বাস অর্জনের সাথে সাথে সেলস বাড়তে শুরু করে। আপনার ব্যবসাকে ব্র্যান্ড হিসেবে প্রতিষ্ঠিত করতে আমরা দিচ্ছি ডিজিটাল শর্ট ভিডিও সেবা।",
  },
  {
    id: 3,
    img: gify,
    title: "gify content",
    titleBg: "গিফি কনটেন্ট",
    description:
      "GIFs are known to keep people engaged. It is easily shareable across social media platforms, making them a great way to increase reach and visibility for your brand or product. Create GIF content to promote your business from E-bitans.",
    descriptionBg:
      "গ্রাহকের মনোযোগ আকর্ষনের জন্য মোশন কন্টেন্ট বেশি কাজ করে থাকে। গিফ কন্টেন্ট খুব সহজেই শেয়ার করা যায় বলে এর রিচ এবং ভিজিবিলিটি বেশি থাকে। যার ফলে খুব দ্রুত ব্র্যান্ড বা পন্যকে ক্রেতার কাছে পৌছানো যায় সহজেই। আপনার ব্যবসার প্রচারের জন্য এমন গিফ কন্টেন্ট তৈরি করুন ই-বিতানস থেকে।",
  },
  {
    id: 4,
    img: caption,
    title: "caption writing",
    titleBg: "ক্যাপশন রাইটিং",
    description:
      "Small but mighty, the caption is often overlooked. But wield it well and it can work wonders for your social content.",
    descriptionBg:
      "ছোট কিন্তু শক্তিশালী, ক্যাপশন প্রায়ই উপেক্ষা করা হয়। তবে এটিকে ভালভাবে ব্যবহার করুন কারণ একটি আকর্ষণীয় ক্যাপশন আপনার ব্যবসার প্রচারের জন্য বিস্ময়কর কাজ করতে পারে।",
  },
  // {
  //     id: 5,
  //     img: adsense,
  //     title: 'Google AdSense',
  //     titleBg: 'গুগল এডসেন্স',
  //     description: "We partner with early-stage startups who are ready to accelerate growth and established brands who are preparing for their next phase of growth.",
  //     descriptionBg: '',
  // },
  // {
  //     id: 6,
  //     img: boost,
  //     title: 'page boosting',
  //     titleBg: 'পেজ বুস্টিং',
  //     description: "With over 26 million active users in Bangladesh, Facebook is the largest social media platform in the country. Facebook Ads are highly targeted and can be tailored to reach your desired audience. Tracking capabilities allow you to measure the success of your campaigns in real-time so you can quickly identify which ads are performing best. E-bitans is at your fingertips with all the conveniences of running an ad campaign on Facebook.",
  //     descriptionBg: '২৬ মিলিয়ন এর বেশি সক্রিয় ব্যবহারকারী সহ দেশের সবচেয়ে বড় সোশ্যাল এবং জনপ্রিয় মার্কেটিং প্ল্যাটফর্ম হচ্ছে ফেসবুক। এখানে এ্যাড রান করার মাধ্যমে আপনি খুব সহজেই আপনার ব্যবসার টার্গেটেড ক্রেতার কাছে পৌছাতে পারবেন। এদের রিয়েল-টাইম ট্র্যাকিং ক্ষমতাগুলো আপনার প্রচারনার সাফল্য পরিমাপ করতে দেয়। ফেসবুকে এ্যাড ক্যাম্পেইন করার যাবতীয় সুবিধা ও সহযগিতা নিয়ে ই-বিতানস আছে আপনার হাতের নাগালেই।',
  // },
];
