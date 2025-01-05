import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import verify from "@/assets/images/affiliate/verify.png";
import Image from "next/image";

const Why = ({ locale }) => {
  const bangla = locale !== "en";

  return (
    <div className="bg-white relative z-[1]">
      <div className="lg:py-28 py-10 container px-5 lg:px-10">
        <div className="">
          <h1 className="text-3xl font-semibold">
            {!bangla ? "Why choose eBitans" : "কেন eBitans কে  বেছে নিবেন?"}
          </h1>
        </div>

        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-8 w-full">
          <div className="hidden xl:block"></div>
          <div className="space-y-3 ">
            <FiShoppingBag className="text-4xl" />
            <h1 className="text-xl font-semibold">
              {!bangla
                ? "Outstanding commission Structure"
                : "আকর্ষণীয়  কমিশন কাঠামো"}
            </h1>
            <p>
              {!bangla
                ? "As long as your client maintain the paid package you will get the 20% commission per month"
                : "আপনার রেফার করা ক্লায়েন্টরা যতক্ষণ তাদের পেইড প্যাকেজ বজায় রাখবে ততক্ষণ আপনি প্রতি মাসে 20% কমিশন উপার্জন করতে পারবেন।"}
            </p>
          </div>
          <div className="space-y-3 ">
            <Image src={verify} alt="ebitans image" />
            <h1 className="text-xl font-semibold">
              {!bangla ? "Training Facilities" : "প্রশিক্ষণের সুযোগ"}
            </h1>
            <p>
              {!bangla
                ? "We offer organized and top quality training facilities to helps you  to know more about every single function of eBitans and also help you to become an expert Ebitans platform developer."
                : "আমরা আপনাকে eBitans-এর প্রতিটি একক ফাংশন সম্পর্কে বিস্তারিত জানতে  প্রশিক্ষণ এর সুবিধা রেখেছি যা আপনাকে  Ebitans প্ল্যাটফর্ম এর একজন দক্ষ্য ডেভেলপার হতে সাহায্য করবে।"}
            </p>
          </div>
          <div className="space-y-3">
            <FiShoppingCart className="text-4xl" />
            <h1 className="text-xl font-semibold">
              {!bangla
                ? "Robust Career Advancement"
                : "eBitans এর সাথে সফল ক্যারিয়ার গড়ে তুলুন"}
            </h1>
            <p>
              {!bangla
                ? "eBitas offers a secure and bright career and stable income through its platform"
                : "eBitans আপনাকে একটি নিরাপদ এবং সফল ক্যারিয়ার এবং স্থিতিশীল আয়ের প্রস্তাব দেয়।"}
            </p>
          </div>
          <div className="hidden xl:block"></div>
          <div className="space-y-3">
            <FiShoppingCart className="text-4xl" />
            <h1 className="text-xl font-semibold">
              {!bangla ? "​​Set your own hour " : "নিজের স্বাধীনতায় কাজ করুন"}
            </h1>
            <p>
              {!bangla
                ? "You have full freedom to  decide when and how often you will work"
                : "আপনি কখন এবং কতক্ষণ  কাজ করবেন তা সিদ্ধান্ত নেওয়ার আপনার সম্পূর্ণ স্বাধীনতা রয়েছে"}
            </p>
          </div>
          <div className="space-y-3">
            <FiShoppingCart className="text-4xl" />
            <h1 className="text-xl font-semibold">
              {!bangla
                ? " Get paid fast"
                : "দ্রুত এবং আপনার সুবিধা মত টাকা উত্তোলন করুন"}
            </h1>
            <p>
              {!bangla
                ? "You can choose  when you want to withdraw your cash from your panel without any hassle"
                : "আপনি কোন ঝামেলা ছাড়াই আপনার প্যানেল থেকে আপনার উপার্জিত অর্থ  কখন  উত্তলন  করতে চান তা নিজেই সিদ্ধান্ত নিতে পারবেন"}
            </p>
          </div>
          <div className="space-y-3">
            <FiShoppingCart className="text-4xl" />
            <h1 className="text-xl font-semibold">
              {!bangla
                ? "Get support at every turn"
                : "সার্বক্ষণিক টেকনিক্যাল সহযোগিতা"}
            </h1>
            <p>
              {!bangla
                ? "If you have questions, you can reach us anytime andl get 24/7 immense support from eBians"
                : "eBitans সর্বদা আপনার যেকোনো প্রশ্ন বা সাহায্যের জন্য 24/7 পাশে আছে।"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
