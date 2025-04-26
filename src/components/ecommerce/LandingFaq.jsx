"use client";
import { Accordion } from "keep-react";
import styles from "@/components/home/home.module.css";

const LandingFaq = () => {
  
  const styleCss = `
  .red-link {
      color: blue;
    }
  `;

  return (
    <div className=" bg-red-100 border-y-2 border-black">
      <h1 className="container text-2xl md:text-3xl font-bold text-center px-20 py-4 my-10 bg-[#f1593a] text-white rounded-md shadow-lg shadow-slate-600">
        কাস্টমাররা যা যা জানতে চায় 
      </h1>
    
    <div className="container lg:px-10 py-10 gap-4 grid grid-cols-1 lg:grid-cols-2 w-full ">
      <style>{styleCss}</style>
      <div className="flex flex-col gap-4 w-full">
        <Accordion openFirstPanel={true} flush={true}>
          {faqdata.slice(0, 5)?.map((item) => (
            <Accordion.Panel
              key={item?.id}
              className="w-full h-auto px-4 mb-2 rounded border lg:cursor-pointer"
            >
              <Accordion.Container className="text-left bg-[#f1593a]">
                <h3 className={`${styles.archivo} text-lg md:text-2xl mr-2 font-semibold`}>
                  {item?.titleBn}
                </h3>
                <Accordion.Icon />
              </Accordion.Container>
              <Accordion.Content
                className={`${styles.archivo} ${styles.paragraph}`}
              >
                <p
                  className="mt-4 text-black text-lg md:text-xl font-medium"
                  dangerouslySetInnerHTML={{
                    __html: item?.descBn,
                  }}
                ></p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <Accordion openFirstPanel={false} flush={true}>
          {faqdata.slice(5, 10)?.map((item) => (
            <Accordion.Panel
              key={item?.id}
              className="w-full h-auto px-4 mb-2 rounded border lg:cursor-pointer"
            >
              <Accordion.Container className="text-left bg-[#f1593a]">
                <h3 className={`${styles.archivo} text-lg md:text-2xl mr-2`}>
                  {item?.titleBn}
                </h3>
                <Accordion.Icon />
              </Accordion.Container>
              <Accordion.Content
                className={`${styles.archivo} ${styles.paragraph}`}
              >
                <p
                  className="mt-4 text-black text-lg md:text-xl font-medium"
                  dangerouslySetInnerHTML={{
                    __html: item?.descBn,
                  }}
                ></p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </div>
    </div>
  );
};

export default LandingFaq;

const faqdata = [
  {
    id: 1,
    titleBn: "eBitans সর্ম্পকে বিস্তারিত জানতে চাই।",
    title: `I want to know more details about eBitans.`,
    descBn:
      "eBitans হচ্ছে একটি ই-কমার্স ওয়েবসাইট বিলডারস প্লাটফর্ম। যেখান থেকে আপনি নিজেই অটোমেটিকালি একটি ইকমার্স ওয়েবসাইট তৈরি করেতে পারবেন, আপনার মোবাইল নাম্বার এবং পাসওয়ার্ড দিয়ে রেজিস্ট্রেশন করে। তারপর আপনার স্টোর/ব্যবসার নাম এবং ধরন সিলেক্ট করে ওয়েবসাইট তৈরি করে নিতে পারবেন। এর জন্য আপনার কোন টেকনিকাল বা coding জ্ঞান থাকার প্রয়োজন নেই। ওয়েবসাইট তৈরি হয়ে যাওয়ার পর আপনাকে একটা অ্যাডমিন প্যানেল দেয়া হবে যেখান থেকে আপনি প্রোডাক্ট আপলোড, ওয়েবসাইট কাস্টমাইজেশন, অর্ডার ম্যানেজমেন্ট  সিস্টেম, ইনভেন্টরি ম্যানেজমেন্ট সিস্টেম, কাস্টমার ম্যানেজমেন্ট সিস্টেম, ডিসকাউন্ট/ অফার/ কুপন ম্যানেজমেন্ট সিস্টেম এবং আরও অনেক কিছু পাচ্ছেন এই  এক অ্যাডমিন প্যানেল থেকেই।",
    desc: `eBitans is an e-commerce website builder platform. Here, you can automatically create an e-commerce website on your own by registering with your mobile number and password. After registration, you can select your store/business name and type to create the website. You don't need any technical or coding knowledge for this. Once the website is created, you will be provided with an admin panel. From this panel, you can manage product uploads, website customization, order management systems, inventory management systems, customer management systems, discount/offer/coupon management systems, and much more—all from a single admin panel.`,
  },
  {
    id: 2,
    titleBn: "ডোমেইন কি?",
    descBn:
      "ডোমেইন হলো ইন্টারনেটে ওয়েবসাইটের নাম বা ঠিকানা, যেটা লিখে আমরা কোনো ওয়েবসাইটে যাই। <br> যেমন: google.com, facebook.com — এগুলো ডোমেইন। <br> সংক্ষেপে: বাসার ঠিকানা যেমন দরকার, তেমনি ওয়েবসাইটের ঠিকানাও দরকার — সেটাই ডোমেইন।",
  },
 
  {
    id: 3,
    titleBn: "আমি কি আমার ডোমেইন এড করতে পারবো?",
    title: "Can I add my domain?",
    descBn:
      "জী, অবশ্যই আপনার পার্সনাল ডোমেইন এড করতে পারবেন। এর জন্য আপনাকে আমাদের যেকোন একটা পেইড প্যাকেজ নিতে হবে।",
    desc: "Yes, you can definitely add your personal domain. For this, you will need to purchase one of our paid packages.",
  },
  {
    id: 2,
    titleBn: "হোস্টিং কি?",
    descBn:
      "হোস্টিং হলো একটা অনলাইন জায়গা, যেখানে আপনার ওয়েবসাইটের সব ফাইল, ছবি আর তথ্য সংরক্ষণ থাকে।",
  },
  {
    id: 4,
    titleBn: "হোস্টিং কি আপনারা দিবেন? নাকি এর জন্য আলাদা পেমেন্ট করতে হবে?",
    descBn:
      "জী স্যার হোস্টিং আমারাই দিচ্ছি। এর জন্য আপনাকে কোন এক্সট্রা পেমেন্ট করতে হবে না। আমাদের প্যাকেজের প্রাইসিং এর ভিতরেই হোস্টিং এর প্রাইস সংযুক্ত করা আছে।",
   },
  {
    id: 5,
    titleBn: "কিভাবে আমি পেমেন্ট গেটওয়ে অপশন এড করবো?",
    descBn:
      "জী আপনি অবশ্যই পেমেন্ট গেটওয়ে এড করতে পারবেন । এর জন্য আপনাকে আমাদের এড-অনসসার্ভিস নিতে হবে যার প্রাইজ মাত্র ১০০০ টাকা ।(আপনি যাদের(বিকাশ/ নগদ/ SSL commerce, etc ) পেমেন্ট গেটওয়ে নিতে চাচ্ছেন তাদের API  আমাদের সাথে শেয়ার করলে আমরা আপনার ওয়েবসাইট এর সাথে পেমেন্ট গেইটওয়ে যুক্ত করে দিব।)",
  },
  {
    id: 6,
    titleBn: "ব্যান্ডউইথ কি?",
    descBn: ` ব্যান্ডউইথ হলো, ওয়েবসাইট ভিজিটরদের দ্বারা ব্যবহৃত মোট ডাটার পরিমাণ। পেজ, ছবি, ভিডিও লোড হওয়ার সময় যে ডাটা লাগে, সেটাই ব্যান্ডউইথ।
<br>আপনার ওয়েবসাইটে ভিজিটরের সংখ্যা যত বেশি হবে ততো বেশি ব্যান্ডউইথ বেশি খরচ হবে।`,
  },
  {
    id: 7,
    titleBn: "ওয়েবসাইটে কিভাবে প্রোডাক্ট আপলোড করবো?",
    descBn:
      `eBitans প্ল্যাটফর্মে পণ্য যুক্ত করার ধাপসমূহ:

আপনার eBitans অ্যাডমিন প্যানেলে লগইন করুন:
<a href="https://admin.ebitans.com">https://admin.ebitans.com </a> ওয়েবসাইটে গিয়ে আপনার ড্যাশবোর্ডে প্রবেশ করুন।

পণ্য ম্যানেজমেন্ট সেকশনে যান:
সাইডবার মেনু থেকে "Products" ট্যাবে ক্লিক করুন। <br>

নতুন পণ্য যোগ করুন:

"Add Product" বাটনে ক্লিক করুন। <br>

পণ্যের বিবরণ পূরণ করুন:

পণ্যের নাম

বর্ণনা

মূল্য

SKU (স্টক কিপিং ইউনিট)

স্টকের পরিমাণ

ক্যাটাগরি এবং সাবক্যাটাগরি

ভেরিয়েন্ট (যেমন: সাইজ, রঙ)

পণ্যের ছবি আপলোড করুন <br>

অতিরিক্ত সেটিংস কনফিগার করুন:

ডিসকাউন্ট বা প্রমোশনাল মূল্য সেট করুন (যদি থাকে)। <br>

শিপিং অপশন এবং খরচ নির্ধারণ করুন।

প্রয়োজন অনুযায়ী ট্যাক্স সেটিংস ঠিক করুন। <br>

সেভ এবং প্রকাশ করুন:

সমস্ত তথ্য পূরণের পর "Publish" বাটনে ক্লিক করে পণ্যটি আপনার অনলাইন স্টোরে প্রকাশ করুন।`,
   },
  {
    id: 8,
    titleBn: "ওয়েবসাইট পরিচালনা করার জন্য কোনও টিটোরিয়াল আছে?",
    descBn:
      `কিভাবে আপনি আপনার ওয়েবসাইট পরিচালনা করবেন তার বিস্তারিত আমাদের Youtube চ্যানেলে দেয়া আছে।<br> Youtube চ্যানেলের লিংক: <a href="https://www.youtube.com/channel/UCNYZdTPddwoGeMWy5cQ733w" >https://www.youtube.com/channel/UCNYZdTPddwoGeMWy5cQ733w</a>`,
  },
  

];
