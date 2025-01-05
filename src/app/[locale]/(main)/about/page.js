import banner from "@/assets/images/webBanner/ebitans - eCommerce website builder platform - About.webp";
import styles from "@/components/home/home.module.css";
import { BsInstagram } from "react-icons/bs";
import { RiFacebookBoxLine, RiLinkedinBoxLine } from "react-icons/ri";
import images from "@/lib/images";
import Image from "next/image";
import CircleProgress from "@/components/about/CircleProgress";
import Registration from "@/components/pricing/Registration";
import TradeImg from "@/assets/trade/eBitans-trade-licence.jpg";
import DBIDImg from "@/assets/trade/DBID_eBitans.jpg";

export const metadata = {
  title: "About Us",
  description:
    "eBitans provides Entrepreneurs an excellent solution to build sustainable stores online to sell their products online and also from physical stores.",
};

const featuresData = [
  {
    icon: images?.react,
    progress: 90,
    title: "Full-Feature React.js and Next.js E-Commerce Website",
    titleBd: "ফুল-ফিচার React.js এবং Next.js ই-কমার্স ওয়েবসাইট",
    subTitle:
      "Enjoy unlimited bandwidth and lightning-fast web hosting for seamless and speedy performance to power your online store.",
    subTitleBd:
      "আনলিমিটেড ব্যান্ডউইথ এবং দ্রুত ওয়েব হোস্টিং উপভোগ করুন, যা আপনার অনলাইন স্টোরের জন্য স্লিম এবং দ্রুত পারফরম্যান্স নিশ্চিত করে।",
  },

  {
    icon: images?.hosting,
    progress: 70,
    title: "Super-Fast NVMe Web Hosting",
    titleBd: "সুপার-ফাস্ট NVMe ওয়েব হোস্টিং",
    subTitle:
      "Experience unlimited bandwidth and ultra-fast hosting for smooth and uninterrupted performance of your online store.",
    subTitleBd:
      "আনলিমিটেড ব্যান্ডউইথ এবং অতি দ্রুত হোস্টিং উপভোগ করুন, যাতে আপনার অনলাইন স্টোরের পারফরম্যান্স মসৃণ এবং বিরামহীন হয়।",
  },

  {
    icon: images?.inventory,
    progress: 80,
    title: "All-in-One Inventory Management System",
    titleBd: "অল-ইন-ওয়ান ইনভেন্টরি ম্যানেজমেন্ট সিস্টেম",
    subTitle:
      "Easily manage your product inventory, track sales, and handle accounts-all in one powerful software.",
    subTitleBd:
      "সহজেই আপনার পণ্য ইনভেন্টরি পরিচালনা করুন, বিক্রয় ট্র্যাক করুন এবং অ্যাকাউন্ট পরিচালনা করুন – সব একটিমাত্র শক্তিশালী সফটওয়্যারে।",
  },

  {
    icon: images?.http,
    progress: 100,
    title: "Free Subdomain",
    titleBd: "ফ্রি সাবডোমেইন",
    subTitle:
      "Get a subdomain at no extra cost and build your website hassle-free—no fees, no hidden charges!",
    subTitleBd:
      "কোনো অতিরিক্ত খরচ ছাড়াই একটি সাবডোমেইন পান এবং আপনার ওয়েবসাইটটি ঝামেলাহীনভাবে তৈরি করুন—কোনো ফি, কোনো গোপন চার্জ নেই!",
  },

  {
    icon: images?.subscription,
    progress: 85,
    title: "Budget-Friendly Monthly Subscription",
    titleBd: "বাজেট-ফ্রেন্ডলি মাসিক সাবস্ক্রিপশন",
    subTitle:
      "Worried about the cost of building an e-commerce website? Relax—our plans start at an amazingly low price!",
    subTitleBd:
      "ই-কমার্স ওয়েবসাইট তৈরির খরচ নিয়ে চিন্তা করছেন? চিন্তা করবেন না—আমাদের প্ল্যানগুলি অল্প খরচে শুরু হয়!",
  },

  {
    icon: images?.easy,
    progress: 90,
    title: "Easy Installation Process",
    titleBd: "সহজ ইনস্টলেশন প্রক্রিয়া",
    subTitle:
      "Creating your website is now a breeze! With eBitans, you can build your dream site in just a few clicks.",
    subTitleBd:
      "এখন একটি ওয়েবসাইট তৈরি করা অনেক বেশি সহজ। আমাদের eBitans প্ল্যাটফর্ম ব্যবহার করে আপনি মাত্র কয়েকটি ক্লিকের মধ্যে আপনার স্বপ্নের ওয়েবসাইট টি তৈরি করে ফেলতে পারেন ।",
  },
];

const team = [
  {
    name: "Hasib Ahmed Soyad",
    nameBd: "হাসিব আহমেদ সোয়াদ",
    image: "https://ebitans.com/Image/cover/Hasib_Ahmed.jpg",
    title: "Founder & CEO",
    titleBd: "প্রতিষ্ঠাতা ও সি.ই.ও",
    facebook: "https://www.facebook.com/nansjejhggfggghjjjtrrfgggghhhj",
    instagram: "https://ebitans.com/Image/cover/Hasib_Ahmed.jpg",
    linkedin: "https://www.linkedin.com/feed/?trk=404_page",
  },
  {
    name: "Hasina Parvin",
    nameBd: "হাসিনা পারভিন",
    image: "https://ebitans.com/Image/cover/hasina_parvin.jpg",
    title: "Head Of Business Development",
    titleBd: "বিজনেস ডেভেলপমেন্ট প্রধান",
    facebook: "https://www.facebook.com/hasina.deepa",
    instagram: "https://www.instagram.com/hasinadeepa/",
    linkedin: "https://www.linkedin.com/in/hasina-parvin-0614552b/",
  },
  {
    name: "Tamanna Lina",
    nameBd: "তামান্না লিনা",
    image: "https://ebitans.com/Image/cover/1659417332510.jpg",
    title: "Head Of Digital Marketing",
    titleBd: "হেড অফ ডিজিটাল মার্কেটিং",
    facebook: "https://www.facebook.com/tamannaparin.lina",
    instagram: "https://www.instagram.com/lina.tamanna/",
    linkedin: "https://www.linkedin.com/in/tamanna-parvin-lina-008b8915a/",
  },
];

const About = ({ params: { locale } }) => {
  const bangla = locale !== "en";
  return (
    <div className="container px-5 lg:px-10 sm:pt-[100px] pt-[65px] relative z-[1]">
      <div className="relative flex justify-center items-center">
        <Image
          width={500}
          height={500}
          src={banner}
          alt="career image"
          className="w-full h-auto rounded-lg border-white border-2"
        />
        <h1
          className={`${styles.archivo} absolute z-[1] text-gray-800 md:tracking-[15px] tracking-widest text-xl lg:text-4xl md:mt-[-120px] mt-[-40px] font-bold`}
        >
          {bangla ? "eBitans সম্পর্কে কিছু কথা" : "Who We Are"}
        </h1>
        <h1
          className={`${styles.wordSpacingOne} ${styles.archivo} mt-9 font-light   absolute z-[1] text-gray-200 md:font-bold md:tracking-[15px] tracking-widest  text-2xl lg:text-6xl`}
        >
          {bangla ? "টার্মস এবং কন্ডিশনস" : "Know More About Us"}
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 container px-5 lg:px-10">
        <div className="pt-16 gap-y-10">
          <h1 className="text-3xl text-[#333] font-semibold font-Railway tracking-widest py-10 ">
            {bangla ? "eBitans সম্পর্কে" : "About eBitans"}
          </h1>
          <h3 className="text-xl text-[#333] font-semibold font-Railway tracking-widest">
            {bangla
              ? `eBitans: বাংলাদেশের সেরা ইকমার্স ওয়েবসাইট নির্মাণ প্ল্যাটফর্ম`
              : `eBitans: The Best eCommerce Website Builder Platform in Bangladesh`}
          </h3>
          <p className="py-5 text-gray-500 font-light font-Railway whitespace-pre-wrap tracking-widest leading-loose">
            {bangla
              ? `আজকের প্রতিযোগিতামূলক ডিজিটাল যুগে, eBitans বাংলাদেশের সেরা ইকমার্স ওয়েবসাইট নির্মাণ প্ল্যাটফর্ম হিসেবে উজ্জ্বল হয়ে উঠেছে, যা উদ্যোক্তাদের তাদের অনলাইন স্টোর চালু করতে সহজতর করে। ব্যবহারকারীর জন্য সহজ ইন্টারফেস সহ, eBitans আপনাকে কয়েকটি ক্লিকে আপনার ব্যবসার জন্য একটি সম্পূর্ণ কার্যকরী ইকমার্স ওয়েবসাইট তৈরি করতে দেয়।`
              : `In today’s competitive digital era, eBitans stands out as the best eCommerce website builder platform in Bangladesh, empowering entrepreneurs to launch their online stores with ease. With a user-friendly interface, eBitans allows you to create a fully functional eCommerce website for your business in just a few clicks.`}
          </p>
          <h3 className="text-xl text-[#333] font-semibold font-Railway tracking-widest">
            {bangla ? `কেন eBitans নির্বাচন করবেন?` : `Why Choose eBitans?`}
          </h3>
          <p className="py-5 text-gray-500 font-light font-Railway whitespace-pre-wrap tracking-widest leading-loose">
            {bangla
              ? `সম্পূর্ণ বৈশিষ্ট্য: ওয়েবসাইট ছাড়াও, eBitans ইকমার্স মোবাইল অ্যাপস, পয়েন্ট অব সেল (POS) সিস্টেম এবং একটি শক্তিশালী ইনভেন্টরি ম্যানেজমেন্ট সিস্টেম প্রদান করে।
সরলীকৃত বিক্রয় প্রক্রিয়া: এই বৈশিষ্ট্যগুলি একত্রিতভাবে কাজ করে, যা অনলাইনে অথবা শারীরিক দোকান থেকে বিক্রি করা সহজ করে।
রাজস্ব বৃদ্ধি: অপারেশন সহজ করে, eBitans আপনার ব্যবসার রাজস্ব সর্বাধিক করতে সাহায্য করে।
eBitans বাংলাদেশে উদ্যোক্তাদের জন্য একটি টেকসই সমাধান প্রদান করে পেশাদার অনলাইন স্টোর তৈরি করতে। আপনি যদি একটি প্রতিষ্ঠিত ব্যবসা হন বা স্টার্টআপ, eBitans আপনার ইকমার্স জগতে সফলতার পথে মসৃণ যাত্রা নিশ্চিত করে।
eBitans নির্বাচন করুন – বাংলাদেশের সেরা ইকমার্স ওয়েবসাইট নির্মাণ প্ল্যাটফর্ম – এবং আপনার ব্যবসা বিপ্লবের প্রথম পদক্ষেপ নিন।`
              : `Comprehensive Features: Alongside websites, eBitans offers E-commerce Mobile Apps, Point of Sale (POS) systems, and a robust Inventory Management System.
Simplified Selling Process: These features seamlessly integrate to make selling online or from physical stores effortless.
Revenue Growth: By streamlining operations, eBitans helps maximize your business revenue.
eBitans provides a sustainable solution for entrepreneurs in Bangladesh to build professional online stores. Whether you're an established business or a startup, eBitans ensures a smooth journey to success in the eCommerce world.
Choose eBitans – the best eCommerce website builder in Bangladesh – and take the first step toward revolutionizing your business.`}
          </p>
        </div>
        <div className="lg:-mr-16  lg:-mb-20 w-full">
          <Image
            src={"https://ebitans.com/Image/ebitans_website_about.png"}
            width={500}
            height={500}
            className="lg:mt-40 h-auto w-auto"
            alt=""
          />
        </div>
      </div>

      <div className="bg-white container px-5 lg:px-10">
        <h1 className="lg:mt-20 lg:px-0 text-xl text-[#f1593a] text-center pt-20 pb-3">
          {bangla? "ফিচারসমূহ" : "Features"}
        </h1>
        <h1 className="text-5xl text-center pb-16">{bangla? "eBitans কেন অনন্য" : "Why eBitans Is Unique"}</h1>
        <div className="container lg:block flex justify-center pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center lg:grid-cols-3 gap-3">
            {featuresData?.map((data, id) => (
              <SingleCircular data={data} key={id} bangla={bangla} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white ">
        <h1 className="text-xl text-[#f1593a] text-center pt-40 pb-3">{bangla? "টিম" : "Team"}</h1>
        <h1 className="text-5xl text-center pb-16">{bangla? "হার্ট অফ eBitans" : "Heart Of eBitans"}</h1>
        <div className="py-14 flex justify-center container px-5 lg:px-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-40 ">
            {team?.map((item, id) => (
              <div key={id} className="group">
                <div className="lg:h-[300px] md:h-[400px] h-[500px] w-full relative">
                  <Image
                    width={300}
                    height={300}
                    className="h-full w-full"
                    src={item.image}
                    alt="ebitans image"
                  />
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-900 opacity-0 group-hover:opacity-60 duration-300"></div>
                  <div className="flex gap-4 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  opacity-0 group-hover:opacity-100 mt-6 group-hover:mt-0 duration-500 text-white">
                    <a
                      className="hover:text-[#f1593a] duration-500 hover:scale-125 text-[30px]"
                      href={item.facebook}
                      target="_blanck"
                    >
                      <RiFacebookBoxLine />
                    </a>
                    <a
                      className="hover:text-[#f1593a] duration-500 hover:scale-125 text-[30px]"
                      href={item.instagram}
                      target="_blanck"
                    >
                      <BsInstagram />
                    </a>
                    <a
                      className="hover:text-[#f1593a] duration-500 hover:scale-125 text-[30px]"
                      href={item.linkedin}
                      target="_blanck"
                    >
                      <RiLinkedinBoxLine />
                    </a>
                  </div>
                </div>
                <div className="text-center py-6">
                  <h1 className="pb-1 text-lg font-bold uppercase">
                    {bangla ? item?.nameBd : item?.name}
                  </h1>
                  <p className="text-sm font-light text-gray-500">
                    {bangla ? item?.titleBd : item?.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container px-5 lg:px-10">
        <Registration />
      </div>

      <div>
        <h2 className="text-5xl text-center pb-7">
          {bangla ? "ট্রেড লাইসেন্স এবং ডিবিআইডি" : "Trade License and DBID"}
        </h2>
        <p className="text-center pb-7">
          {bangla
            ? "আমরা আমাদের ক্লায়েন্ট এবং পার্টনারদের সঙ্গে স্বচ্ছতা ও বিশ্বাস বজায় রাখতে গর্বিত। আমাদের ব্যবসা একটি বৈধ ট্রেড লাইসেন্সের অধীনে পরিচালিত হয়, যা সকল আইনি এবং পেশাগত মানদণ্ড নিশ্চিত করে। এছাড়াও, আমরা একটি ইউনিক ডিবিআইডি (ডান অ্যান্ড ব্র্যাডস্ট্রিট আইডেন্টিফায়ার) সহ নিবন্ধিত, যা আমাদের বিশ্বাসযোগ্যতা এবং মানসম্পন্ন সেবার প্রতিশ্রুতির প্রতীক।"
            : "We take pride in maintaining transparency and trust with our clients and partners. Our business operates under a valid Trade License, ensuring compliance with all legal and professional standards. Additionally, we are registered with a unique DBID (Dun & Bradstreet Identifier), signifying our credibility and commitment to quality."}
        </p>
        <div className="flex flex-col md:flex-row gap-10 md:gap-48 items-center justify-center mb-8">
          <Image
            width={400}
            height={300}
            src={TradeImg.src}
            alt="career image"
            className="rounded-lg border-white border-2"
          />
          <Image
            width={400}
            height={300}
            src={DBIDImg?.src}
            alt="career image"
            className="rounded-lg border-white border-2"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

const SingleCircular = ({ data, bangla }) => {
  return (
    <div className="flex justify-center">
      <div className="h-[330px] w-[330px] flex flex-col items-center">
        <div className="h-[192px] w-[192px] flex justify-center items-center p-3 ">
          <CircleProgress data={data} />
        </div>
        <div className="w-full ">
          <h4 className="text-center text-[17px] text-[#333333] font-semibold">
            {bangla ? data?.titleBd : data?.title}
          </h4>
          <p className={" text-center text-gray-400 text-sm"}>
            {bangla ? data?.subTitleBd : data?.subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};
