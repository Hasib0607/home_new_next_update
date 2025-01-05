import Link from "next/link";
import styles from "./home.module.css";
import PseImage from "./pse/PseImage";
import PseSearch from "./pse/PseSearch";
import images from "@/lib/images";
import Image from "next/image";

const Pse = ({ locale }) => {
    const bangla = locale !== "en";
  return (
    <section className="bg-gradient-to-t from-[#EED4CE] from-10% to-bg-[#F9F7F6] to-90%  rounded-b-[15px] lg:rounded-b-[45px] relative z-[1] pt-10 lg:pt-[120px] lg:pb-32 overflow-hidden">
      <div className="relative">
        <h2 className={`${styles.dream} ${styles.headerOne} text-center `}>
          BUILD YOUR DREAM
        </h2>
        <div className="absolute bg-gradient-to-t from-[#F6EEEC] top-0 left-0 w-full h-full"></div>
      </div>
      <div className="relative z-[1] container px-5 lg:px-10 rounded-[10px] xl:-mt-24 lg:-mt-10 -mt-6 flex justify-between">
        <div className="relative z-[1] text-LEFT">
          <p
            className={`${styles.archivo} ${styles.paragraph} text-base uppercase`}
          >
            <span className="tracking-[5px] lg:tracking-[10px]">
              {bangla ? "দ্যা পাওয়ার অফ প্রোডাক্ট" : "The power of product"}
            </span>{" "}
            খুঁজো
          </p>
          <h2 className={`${styles.archivo} ${styles.headerTwo}`}>
            {bangla? "প্রোডাক্ট সার্চ ইঞ্জিন" : "Products Search Engine"}
          </h2>
        </div>
        <Link href="/product-khujo">
          <div className="group relative h-[27px] lg:h-[45px] w-max px-4 py-2 border-[1.5px] border-[#f1593a] rounded flex justify-center items-center gap-3 bg-white text-[#f1593a] ">
            <button className="relative z-[1] text-[10px] lg:text-base">
              {bangla ? "ভিজিট প্রোডাক্ট খুঁজো" : "Visit Product খুঁজো"}
            </button>
            <Image
              src={images?.arrow1}
              alt="ebitans image"
              className="relative z-[1] h-2 lg:h-auto w-auto"
            />
            <div
              className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}
            ></div>
          </div>
        </Link>
      </div>
      {/* <div className='relative z-[1] text-center'>
                <p className={`${styles.archivo} ${styles.paragraph} tracking-[5px] lg:tracking-[10px] text-base uppercase`}>The power of product খুঁজো</p>
                <h2 className={`${styles.archivo} ${styles.headerTwo}`}>Products Search Engine</h2>
            </div> */}
      <div className="container px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
          <div className="flex justify-start items-center">
            <div>
              <div className="border-l-[3px] border-[#f1593a] p-5 h-max max-w-[436px]">
                <h3
                  className={`${styles.archivo} lg:text-[28px] font-bold mb-5`}
                >
                  {bangla
                    ? "সবচেয়ে দ্রুত সার্চ সুযোগ"
                    : "Fastest Search Opportunity"}
                </h3>
                <p className={`${styles.archivo} ${styles.paragraph}`}>
                  {bangla
                    ? "eBitans-এর জন্য কাস্টমাইজড PSE সমাধান, যা উদ্ভাবন এবং দক্ষতাকে একত্রিত করে বৃদ্ধিকে ত্বরান্বিত এবং প্রক্রিয়াগুলি সহজ করে। আপনার ব্যবসাকে সফলতার জন্য ডিজাইন করা বিশেষজ্ঞ PSE কৌশল দ্বারা শক্তিশালী করুন।"
                    : "Tailored PSE solutions for eBitans, combining innovation and efficiency to drive growth and streamline processes. Empower your business with expert PSE strategies designed for success."}
                </p>
              </div>
              <PseSearch />
            </div>
          </div>
          <div className="justify-self-center lg:w-full w-[260px] mx-auto h-60 lg:h-full overflow-hidden mt-0 lg:mt-0">
            <PseImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pse;
