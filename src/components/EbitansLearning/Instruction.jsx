"use client";
import { Accordion } from "keep-react";
import { useState } from "react";
import styles from "@/components/home/home.module.css";

const Instruction = ({ locale }) => {
  const bangla = locale !== "en";
  const [active, setActive] = useState(1);

  return (
    <div className="relative z-[4]">
      <Accordion openFirstPanel={true} flush={true}>
        {instruction?.map((item) => (
          <Accordion.Panel key={item?.id} className="relative border-b-0">
            <p
              className={`absolute ${styles.paragraph} w-[3px] ${
                active === item?.id ? "h-full" : "h-0"
              } duration-[1s] bg-[#E99989] left-0 top-0`}
            ></p>
            <Accordion.Container className="text-left">
              <h3
                onClick={() =>
                  setActive((prevId) => (prevId === item?.id ? null : item?.id))
                }
                className={`${styles.archivo} ${
                  active === item?.id ? "text-[#f1593a]" : "text-[#D0C8C6]"
                } text-xl lg:text-3xl font-bold`}
              >
                {bangla ? item?.titleBn : item?.title}
              </h3>
            </Accordion.Container>
            <Accordion.Content
              className={`${styles.archivo} ${styles.paragraph} lg:my-5 grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between`}
            >
              <div>
                <p className="text-black">
                  {bangla ? item?.subTitleBn : item?.subTitle}
                </p>
                <button
                  onClick={() => window.open('https://admin.ebitans.com/register', '_blank')}
                  className={`group relative z-[4] h-12 w-48 overflow-hidden rounded-lg bg-[#f1593a] text-lg shadow mt-5 lg:mt-10`}
                >
                  <div
                    className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}
                  ></div>
                  <span className={`${styles.archivo} relative text-white`}>
                    Register Now
                  </span>
                </button>
              </div>
              <div>
                {item?.video ? (
                  <iframe
                    className="h-[300px] w-full rounded"
                    src={item?.video}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                  />
                ) : (
                  <p>No video available</p>
                )}
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
};

export default Instruction;

const instruction = [
  {
    id: 1,
    title: "Journey starts with Registration Now",
    titleBn: "রেজিস্ট্রেশন দিয়ে যাত্রা শুরু করুন এখনই",
    subTitle:
      "Go to 'www.admin.ebitans.com/register' and register your account with 'Your Name', 'Mobile Number' & 'Password'",
    subTitleBn:
      "'www.admin.ebitans.com/register' এ যান এবং 'আপনার নাম', 'মোবাইল নম্বর' এবং 'পাসওয়ার্ড' দিয়ে রেজিস্ট্রেশন করুন।",
    video: "https://www.youtube.com/embed/muglgJznY68",
  },
  {
    id: 2,
    title: "E-Commerce Website Create",
    titleBn: "ই-কমার্স ওয়েবসাইট তৈরি করুন",
    subTitle: `Create Your Website in Seconds! Just enter your Shop Name and select your Store Category to get started!`,
    subTitleBn: `মাত্র কয়েক সেকেন্ডে আপনার ওয়েবসাইট তৈরি করুন! শুধু আপনার দোকানের নাম লিখুন এবং আপনার স্টোর ক্যাটেগরি নির্বাচন করুন শুরু করার জন্য!`,
    video: "https://www.youtube.com/embed/yRF5qLPfl5E",
  },
  {
    id: 3,
    title: "Add Category",
    titleBn: "ক্যাটাগরি যোগ করুন",
    subTitle:
      "To give your website a professional look and organize your products effectively, it's essential to add categories. Start by creating categories, subcategories, product variants, brands, and suppliers. This structure helps visitors easily find products and enhances the overall shopping experience.",
    subTitleBn:
      "আপনার ওয়েবসাইটকে পেশাদারী লুক দিতে এবং আপনার পণ্যের সঠিকভাবে সুশৃঙ্খল করতে ক্যাটেগরি যোগ করা অত্যন্ত গুরুত্বপূর্ণ। শুরু করুন ক্যাটেগরি, সাবক্যাটেগরি, পণ্য ভ্যারিয়েন্ট, ব্র্যান্ড এবং সরবরাহকারী তৈরি করে। এই কাঠামোটি দর্শকদের জন্য পণ্য খুঁজে পাওয়া সহজ করে এবং সামগ্রিক শপিং অভিজ্ঞতাকে উন্নত করে।",
    video: "https://www.youtube.com/embed/_siCvBJQt4k",
  },
  {
    id: 4,
    title: "Add Products",
    titleBn: "পণ্য যোগ করুন",
    subTitle: "Add products with clear images, simple descriptions, and correct prices to improve visibility and SEO.",
    subTitleBn: "স্পষ্ট ছবি, সোজা বিবরণ এবং সঠিক দাম সহ পণ্য যোগ করুন, যাতে ভিজিবিলিটি এবং SEO উন্নত হয়।",
    video: "https://www.youtube.com/embed/0Ua3zIcwazk",
  },
  {
    id: 5,
    title: "Website Logo & Information",
    titleBn: "ওয়েবসাইট লোগো এবং তথ্য",
    subTitle:
      "Upload your business logo, contact information, and address, and integrate your website with social media platforms for better online presence.",
    subTitleBn:
      "আপনার ব্যবসার লোগো, যোগাযোগের তথ্য এবং ঠিকানা আপলোড করুন, এবং আপনার ওয়েবসাইটকে সামাজিক মিডিয়া প্ল্যাটফর্মের সাথে সংযুক্ত করুন উন্নত অনলাইন উপস্থিতির জন্য।",
    video: "https://www.youtube.com/embed/hG8TV4Ry61U",
  },
  {
    id: 6,
    title: "Theme Selection",
    titleBn: "থিম নির্বাচন",
    subTitle:
      "Choose a stunning theme from our theme store and easily customize it with just a few clicks to give your website a unique and professional appearance.",
    subTitleBn: "আমাদের থিম স্টোর থেকে একটি চমকপ্রদ থিম নির্বাচন করুন এবং শুধু কয়েকটি ক্লিকে সহজেই এটি কাস্টমাইজ করুন, যাতে আপনার ওয়েবসাইটকে একটি অনন্য এবং পেশাদারী চেহারা দেওয়া যায়।",
    video: "https://www.youtube.com/embed/EGm3FvomjO8",
  },
  {
    id: 7,
    title: "Select Header Menu",
    titleBn: "হেডার মেনু নির্বাচন করুন",
    subTitle:
      "Customize your website by choosing the header menu and selecting a theme color that suits your style for a personalized look and feel.",
    subTitleBn: "আপনার ওয়েবসাইটটি কাস্টমাইজ করুন হেডার মেনু নির্বাচন করে এবং একটি থিম রঙ নির্বাচন করে যা আপনার স্টাইলের সাথে মানানসই, যাতে একটি ব্যক্তিগতকৃত লুক এবং অনুভূতি তৈরি হয়।",
    video: "https://www.youtube.com/embed/vR9p3CT1e5s",
  },
  {
    id: 8,
    title: "Add Slider & Banner",
    titleBn: "স্লাইডার এবং ব্যানার যোগ করুন",
    subTitle:
      "Add sliders and banner images to promote your products effectively and capture customer attention.",
    subTitleBn: "আপনার পণ্যগুলো কার্যকরভাবে প্রচার করতে এবং গ্রাহকদের মনোযোগ আকর্ষণ করতে স্লাইডার এবং ব্যানার ছবি যোগ করুন।",
    video: "https://www.youtube.com/embed/Yv74r5kIxrU",
  },
  {
    id: 9,
    title: "Add More Page",
    titleBn: "আরও পৃষ্ঠা যোগ করুন",
    subTitle:
      "Create essential pages for your business, such as About Us, Terms & Conditions, and Contact, to provide important information and build trust with your audience.",
    subTitleBn: "আপনার ব্যবসার জন্য গুরুত্বপূর্ণ পেজ তৈরি করুন, যেমন 'আমাদের সম্পর্কে', 'শর্তাবলী', এবং 'যোগাযোগ', যাতে গুরুত্বপূর্ণ তথ্য প্রদান করতে পারেন এবং আপনার দর্শকদের সাথে বিশ্বাস তৈরি করতে পারেন।",
    video: "",
  },
  {
    id: 10,
    title: "Add Personal Domain",
    titleBn: "পার্সোনাল ডোমেন যোগ করুন",
    subTitle: "Finally, connect your custom domain to establish your brand and expand your business globally.",
    subTitleBn: "অবশেষে, আপনার কাস্টম ডোমেন সংযুক্ত করুন আপনার ব্র্যান্ড প্রতিষ্ঠিত করতে এবং আপনার ব্যবসা বিশ্বব্যাপী সম্প্রসারণ করতে।",
    video: "https://www.youtube.com/embed/NYelOP9lv90",
  },
];

// const instruction = [
//     {
//         id: 1,
//         title: "Journey starts with Registration Now",
//         subTitle: "Go to 'www.admin.ebitans.com/register' and register your account with 'Your Name', 'Mobile Number' & 'Password'",
//         video: "https://www.youtube.com/embed/muglgJznY68",

//     },
//     {
//         id: 2,
//         title: "Website Create",
//         subTitle: "Create your website by entering your 'Shop Name' & 'Store Category",
//         video: "https://www.youtube.com/embed/yRF5qLPfl5E",

//     },
//     {
//         id: 3,
//         title: "Add Category",
//         subTitle: "To give your website a proper look needs to add products, for that first need to add categories, subcategories, product variants, brands and suppliers.",
//         video: "https://www.youtube.com/embed/_siCvBJQt4k",

//     },
//     {
//         id: 4,
//         title: "Add Product",
//         subTitle: "Now add your product with proper image, description and price.",
//         video: "https://www.youtube.com/embed/0Ua3zIcwazk",

//     },
//     {
//         id: 5,
//         title: "Website Logo & Information",
//         subTitle: "Upload your business logo, address, contact information and integrate your website with social media platforms.",
//         video: "https://www.youtube.com/embed/hG8TV4Ry61U",

//     },
//     {
//         id: 6,
//         title: "Theme Selection",
//         subTitle: "To give your website a beautiful look select a theme from our theme store and customise your theme through few clicks.",
//         video: "https://www.youtube.com/embed/EGm3FvomjO8",

//     },
//     {
//         id: 7,
//         title: "Select Header Menu",
//         subTitle: "Select header menu and theme highlighted color for better personalization.",
//         video: "https://www.youtube.com/embed/vR9p3CT1e5s",

//     },
//     {
//         id: 8,
//         title: "Add Slider & Banner",
//         subTitle: "ding slider and ad banner image for your product promotional purpose.",
//         video: "https://www.youtube.com/embed/Yv74r5kIxrU",

//     },
//     {
//         id: 9,
//         title: "Add More Page",
//         subTitle: "Add pages which is related to your business. Ex: About, Terms & Conditions, Contact, etc.",
//         video: "",

//     },
//     {
//         id: 10,
//         title: "Add Personal Domain",
//         subTitle: "Finally, add you own domain to spread your business worldwide.",
//         video: "https://www.youtube.com/embed/NYelOP9lv90",

//     },

// ]
