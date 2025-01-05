import Image from "next/image";
import styles from "./home.module.css";
import HeroRegister from "./HeroRegister";
import images from "@/lib/images";

const Hero = async ({ locale }) => {
  const bangla = locale !== "en";
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 2xl:items-center pb-10 lg:pb-[120px] pt-16 lg:pt-32 2xl:pt-56 relative container px-5 lg:px-10">
        <div className="relative order-last lg:order-first lg:justify-self-start justify-self-center w-full">
          <div
            className={`${styles.bgAnimate} w-[345px] h-[345px] bg-[#F3BEB3] bg-opacity-50 blur-3xl rounded-full`}
          ></div>
          <h1
            className={`${styles.archivo} text-3xl font-bold sm:text-[36px] lg:text-[44px] relative z-[1] leading-[40px] sm:leading-[50px] text-shadow-animation mx-auto lg:mx-0 text-center lg:text-left`}
          >
            {bangla ? (
              <>
                eBitans - বাংলাদেশের সবচেয়ে জনপ্রিয় ইকমার্স ওয়েবসাইট তৈরির
                প্ল্যাটফর্ম।
                <br className="sm:hidden" />
                মাত্র ১ মিনিটে সহজেই আপনার{" "}
                <span className={`${styles.archivo} text-[#f1593a] font-black`}>
                  অনলাইন স্টোর
                </span>
                তৈরি করুন!
              </>
            ) : (
              <>
                eBitans - The Most Popular <br className="sm:hidden" />
                eCommerce Website Builder Platform in Bangladesh. <br />
                Easily Create Your{" "}
                <span className={`${styles.archivo} text-[#f1593a] font-black`}>
                  Online Store
                </span>
                {" "}in Just 1 Minute!
              </>
            )}
          </h1>
          <p
            className={`${styles.archivo} text-gray-700 mt-6 lg:mb-12 mb-6 max-w-[700px] text-base lg:text-xl mx-auto lg:mx-0 text-center lg:text-left relative z-[1]`}
          >
            {bangla ? (
              <>
                আপনি কি বাংলাদেশের সেরা ইকমার্স ওয়েবসাইট নির্মাণ প্ল্যাটফর্ম
                খুঁজছেন? eBitans সহজেই একটি ব্যবহারবান্ধব অনলাইন স্টোর তৈরি করতে
                সহায়তা করে। আপনার পণ্য প্রদর্শন করুন, ব্যবসা বৃদ্ধি করুন, এবং{" "}
                <a
                  href="/pricing"
                  className="text-[#f1593a] underline hover:text-[#f1463a]"
                  target="_blank"
                >
                  আজই অনলাইনে বিক্রি শুরু করুন!
                </a> {" "}
                সেরা ইকমার্স ওয়েবসাইট নির্মাণ প্ল্যাটফর্ম দিয়ে আপনার ইকমার্স ওয়েবসাইট তৈরি করুন,
                আপনার গ্রাহকদের সেবা দেওয়ার এবং সহজেই ব্যবসা বাড়ানোর জন্য শক্তিশালী টুলস পান!
              </>
            ) : (
              <>
                Are you looking for the best eCommerce website builder in
                Bangladesh? eBitans makes it easy to create a user-friendly
                online store. Showcase your products, grow your business, and{" "}
                <a
                  href="/pricing"
                  className="text-[#f1593a] underline hover:text-[#f14f3a]"
                  target="_blank"
                >
                  start selling online today!
                </a>{" "}
                Build your eCommerce website with the best eCommerce website builder,
                Get powerful tools to serve your customers and grow your business effortlessly!
              </>
            )}
          </p>

          <HeroRegister />
        </div>
        <div className="image-section lg:-mr-12 lg:justify-self-end justify-self-start sm:justify-self-center relative z-[1] lg:sticky lg:top-32 2xl:top-56 h-max">
          <div className="relative">
            <Image
              placeholder="blur"
              src={images.laptop}
              alt="laptop"
              className=""
            />
            <div className="perspective-image absolute bg-white top-0 left-0 w-full opacity-90 max-h-[100%] blur-xl"></div>
          </div>
          <Image
            placeholder="blur"
            src={images.review}
            alt="review"
            className="float-right lg:mr-12 -mt-10 relative z-[1] h-[48px] w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
