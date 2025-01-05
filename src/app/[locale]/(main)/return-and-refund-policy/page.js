import Image from "next/image";
import banner from "@/assets/images/webBanner/ebitans - eCommerce website builder platform -Return & Refund Policy.webp";
import styles from "@/components/home/home.module.css";

export const metadata = {
  title: "Return and Refund Policy",
  description:
    "This Return & Refund Policy outlines the conditions under which you can return a product and receive a refund.",
};

const RefundPolicy = ({ params: { locale } }) => {
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
          {bangla ? "eBitans" : "eBitans"}
        </h1>
        <h1
          className={` ${styles.wordSpacingOne} ${styles.archivo} mt-9 font-light   absolute z-[1] text-gray-200 md:font-bold md:tracking-[15px] tracking-widest  text-2xl lg:text-6xl`}
        >
          {bangla ? "রিটার্ন & রিফান্ড পলিসি" : "Return & Refund Policy"}
        </h1>
      </div>

      <div className="container px-5 lg:px-10 pt-10 text-justify">
        <h2 className="text-4xl font-bold pt-8 pb-4">
          {!bangla
            ? "eBitans: The Best eCommerce Website Builder in Bangladesh with a 7- Days Free Trial"
            : "eBitans: বাংলাদেশের সেরা ইকমার্স ওয়েবসাইট নির্মাণ প্ল্যাটফর্ম, ৭ দিনের ফ্রি ট্রায়াল !"}
        </h2>
      </div>

      <div className="container px-5 lg:px-10 pt-10 text-justify">
        <h3 className="text-3xl font-bold pt-8 pb-4">
          {!bangla
            ? "Try Before You Subscribe"
            : "সাবস্ক্রাইব করার আগে চেষ্টা করুন"}
        </h3>
        <p className="text-m sm:text-lg md:text-xl lg:text-2xl">
          {!bangla ? (
            <>
              <a
                href="https://www.ebitans.com.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f1593a] underline"
              >
                eBitans
              </a>
              , the best eCommerce website builder in Bangladesh, offers a
              7-days free trial to help you explore all our platform's features.
              This trial period allows you to experience the benefits and decide
              if our services are the perfect fit for your online business.
            </>
          ) : (
            <>
              <a
                href="https://www.ebitans.com.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f1593a] underline"
              >
                eBitans
              </a>
              , বাংলাদেশের সেরা ইকমার্স ওয়েবসাইট নির্মাণ প্ল্যাটফর্ম, আমাদের
              প্ল্যাটফর্মের সমস্ত বৈশিষ্ট্য অন্বেষণ করতে ৭ দিনের ফ্রি ট্রায়াল
              অফার করছে। এই ট্রায়াল সময়কালে আপনি আমাদের সেবাগুলির সুবিধা অনুভব
              করতে পারবেন এবং সিদ্ধান্ত নিতে পারবেন যে আমাদের সেবাগুলি আপনার
              অনলাইন ব্যবসার জন্য আদর্শ কিনা।
            </>
          )}
        </p>
      </div>
      <div className="container px-5 lg:px-10 py-0 text-justify">
        <h3 className="text-3xl font-bold pt-8 pb-4">
          {!bangla ? "Make an Informed Decision" : "সুচিন্তিত সিদ্ধান্ত নিন"}
        </h3>
        <p className=" text-m sm:text-lg md:text-xl lg:text-2xl">
          {!bangla
            ? "After the trial, you can choose to continue by subscribing to one of our affordable monthly plans. As the leading eCommerce website builder in Bangladesh, we ensure you have the tools and flexibility needed to grow your business without pressure."
            : "ট্রায়াল শেষ হওয়ার পরে, আপনি আমাদের সাশ্রয়ী মাসিক প্ল্যানগুলির মধ্যে একটি সাবস্ক্রাইব করে চলতে পারেন। বাংলাদেশের শীর্ষস্থানীয় ইকমার্স ওয়েবসাইট নির্মাণ প্ল্যাটফর্ম হিসেবে, আমরা নিশ্চিত করি যে আপনি আপনার ব্যবসা বৃদ্ধির জন্য প্রয়োজনীয় সরঞ্জাম এবং নমনীয়তা পাবেন, কোনো চাপ ছাড়াই।"}
        </p>
      </div>
      <div className="container px-5 lg:px-10 py-0 text-justify">
        <h3 className="text-3xl font-bold pt-8 pb-4">
          {!bangla ? "Hassle-Free Cancellation" : "ঝামেলাবিহীন ক্যান্সেলেশন"}
        </h3>
        <p className=" text-m sm:text-lg md:text-xl lg:text-2xl">
          {!bangla
            ? "Your satisfaction matters to us. That’s why eBitans lets you cancel your subscription anytime—no penalties, no hidden fees. Enjoy full control over your online store."
            : "আপনার সন্তুষ্টি আমাদের কাছে গুরুত্বপূর্ণ। এজন্য eBitans আপনাকে যেকোনো সময় আপনার সাবস্ক্রিপশন বাতিল করার সুবিধা দেয়—কোনো জরিমানা, কোনো হিডেন চার্জ নেই। আপনার অনলাইন স্টোরের উপর পূর্ণ নিয়ন্ত্রণ উপভোগ করুন।"}
        </p>
      </div>
      <div className="container px-5 lg:px-10 pb-40 text-justify">
        <h3 className="text-3xl font-bold pt-8 pb-4">
          {!bangla
            ? "Why eBitans is the Best Choice in Bangladesh:"
            : "কেন eBitans বাংলাদেশের সেরা পছন্দ:"}
        </h3>
        <div className="text-m sm:text-lg md:text-xl lg:text-2xl">
          {!bangla ? (
            <ul className="list-disc pl-6">
              <li>7 Days Free Trial: Experience our platform risk-free.</li>
              <li>Empowered Decisions: Test and decide with confidence.</li>
              <li>
                No Return Policy Needed: The trial ensures satisfaction upfront.
              </li>
              <li>Cancel Anytime: Flexible and customer-focused service.</li>
              <li>
                Best website builder in Bangladesh: Tailored for businesses like
                yours.
              </li>
            </ul>
          ) : (
            <ul className="list-disc pl-6">
              <li>
                ৭ দিন ফ্রি ট্রায়াল: আমাদের প্ল্যাটফর্ম ঝুঁকি মুক্তভাবে পরীক্ষা
                করুন।
              </li>
              <li>
                ক্ষমতাবান সিদ্ধান্ত: আত্মবিশ্বাসের সাথে পরীক্ষা করুন এবং
                সিদ্ধান্ত নিন।
              </li>
              <li>
                রিটার্ন পলিসি প্রয়োজন নেই: ট্রায়াল থেকেই সন্তুষ্টি নিশ্চিত।
              </li>
              <li>
                যেকোনো সময় ক্যান্সেল করুন: নমনীয় এবং গ্রাহক-কেন্দ্রিক সেবা।
              </li>
              <li>
                বাংলাদেশের সেরা ওয়েবসাইট নির্মাণ প্ল্যাটফর্ম: আপনার ব্যবসার
                জন্য উপযোগী।
              </li>
            </ul>
          )}
        </div>
        <p className="text-m sm:text-lg md:text-xl lg:text-2xl mt-5">
          {!bangla
            ? "Your satisfaction matters to us. That’s why eBitans lets you cancel your subscription anytime—no penalties, no hidden fees. Enjoy full control over your online store."
            : "আপনার সন্তুষ্টি আমাদের কাছে গুরুত্বপূর্ণ। এজন্য eBitans আপনাকে যেকোনো সময় আপনার সাবস্ক্রিপশন বাতিল করার সুবিধা দেয়—কোনো জরিমানা, কোনো হিডেন চার্জ নেই। আপনার অনলাইন স্টোরের উপর পূর্ণ নিয়ন্ত্রণ উপভোগ করুন।"}
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
