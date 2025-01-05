import Image from "next/image";
import styles from "./home.module.css";
import images from "@/lib/images";

const Dream = ({ locale }) => {
  const bangla = locale !== "en";
  return (
    <section>
      <div className="relative bg-[#F9F7F6]">
        <h2 className={`${styles.dream} ${styles.headerOne} text-center `}>
          BUILD YOUR DREAM
        </h2>
        <div className="absolute bg-gradient-to-t from-[#F9F7F6] top-0 left-0 w-full h-full"></div>
      </div>
      <div className="container px-5 lg:px-10">
        <div className="xl:-mt-24 lg:-mt-10 -mt-6 relative z-[1]">
          <p
            className={`${styles.archivo} ${styles.paragraph} tracking-[5px] lg:tracking-[10px]`}
          >
            {bangla ? "সেরা পথটি বেছে নিন" : "TAKE THE BEST PATH"}
          </p>
          <h2 className={`${styles.archivo} ${styles.headerTwo}`}>
            {bangla ? "আপনার ব্যবসা এগিয়ে নিয়ে যান" : "Forward Your Business"}
          </h2>
        </div>

        <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 bg-[#F9F7F6] relative z-[1]">
          <div className="bg-[#E6F4EC] space-y-5 p-3 rounded">
            <Image
              src={images?.plan}
              alt="ebitans image"
              className="h-6 lg:h-auto w-auto"
            />
            <h4 className={`${styles.archivo} ${styles.headerFour}`}>
              {bangla
                ? "আজই আপনার অনলাইন ব্যবসার পরিকল্পনা শুরু করুন!"
                : "Start planning your online business today!"}
            </h4>
            <p
              className={`${styles.archivo} ${styles.paragraph} text-[#726A69]`}
            >
              {bangla ? (
                <>
                  eBitans-এর সাহায্যে আপনার ব্যবসাকে অনলাইনে নিয়ে যান! আপনার
                  ফোন নম্বর এবং পাসওয়ার্ড ব্যবহার করে সহজেই
                  <a
                    href="https://admin.ebitans.com/register"
                    className="text-[#f1593a] underline hover:text-[#f1463a]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {""} সাইন আপ
                  </a>{" "}
                  {""}
                  করুন।
                </>
              ) : (
                <>
                  Take your business online with eBitans!
                  <a
                    href="https://admin.ebitans.com/register"
                    className="text-[#f1593a] underline hover:text-[#f1463a]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Sign up{" "}
                  </a>
                  {""}
                  easily using your phone number and password.
                </>
              )}
            </p>
          </div>

          <div className="bg-[#F4E8E6] space-y-5 p-3 rounded">
            <Image
              src={images?.register}
              alt="ebitans image"
              className="h-6 lg:h-auto w-auto"
            />
            <h4 className={`${styles.archivo} ${styles.headerFour}`}>
              {bangla ? "আজই eBitans এ যোগ দিন!" : "Join eBitans Today!"}
            </h4>
            <p
              className={`${styles.archivo} ${styles.paragraph} text-[#726A69]`}
            >
              {bangla ? (
                <>
                  আপনার ব্যবসা সহজে অনলাইনে নিয়ে আসুন। আপনার ফোন নম্বর এবং
                  পাসওয়ার্ড দিয়ে এখনই
                  <a
                    href="https://admin.ebitans.com/register"
                    className="text-[#f1593a] underline hover:text-[#f1463a]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    সাইন আপ{" "}
                  </a>
                  করুন!
                </>
              ) : (
                <>
                  Take your business online with ease.
                  <a
                    href="https://admin.ebitans.com/register"
                    className="text-[#f1593a] underline hover:text-[#f1463a]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Sign up{" "}
                  </a>
                  now using your phone number and password!
                </>
              )}
            </p>
          </div>

          <div className="bg-[#F4F1E6] space-y-5 p-3 rounded">
            <Image
              src={images?.website}
              alt="ebitans image"
              className="h-6 lg:h-auto w-auto"
            />
            <h4 className={`${styles.archivo} ${styles.headerFour}`}>
              {bangla
                ? "eBitans এর সাথে সেরা eCommerce ওয়েবসাইট তৈরি করুন"
                : "Create the Best eCommerce Website with eBitans"}
            </h4>
            <p
              className={`${styles.archivo} text-[#726A69] ${styles.paragraph}`}
            >
              {bangla
                ? "কোন কোডিং ছাড়াই সহজে একটি সুন্দর এবং পূর্ণাঙ্গ অনলাইন স্টোর তৈরি করুন। বাংলাদেশের সেরা eCommerce ওয়েবসাইট বিল্ডার প্ল্যাটফর্ম।"
                : "Build a beautiful and fully functional online store easily, with no coding required. The best eCommerce website builder platform in Bangladesh."}
            </p>
          </div>
          <div className="bg-[#E6F0F4] space-y-5 p-3 rounded">
            <Image
              src={images?.world}
              alt="ebitans image"
              className="h-6 lg:h-auto w-auto"
            />
            <h4 className={`${styles.archivo} ${styles.headerFour}`}>
              {bangla
                ? "আপনার ব্যবসা বিশ্বব্যাপী নিয়ে যান"
                : "Take Your Business Global"}
            </h4>
            <p
              className={`${styles.archivo} ${styles.paragraph} text-[#726A69]`}
            >
              {bangla
                ? "eBitans এর সাথে মাত্র ১ মিনিটে আপনার স্বপ্নের অনলাইন স্টোর চালু করুন, বাংলাদেশের সেরা eCommerce ওয়েবসাইট বিল্ডার প্ল্যাটফর্ম। আপনার ভালোবাসা থেকে লাভে পরিণত করুন।"
                : "Launch your dream online store in just 1 minute with eBitans, Bangladesh's best eCommerce website builder platform. Turn your passion into profit."}
            </p>
          </div>
        </div>
      </div>
      <div className="py-20 relative ">
        <div className="container px-5 lg:px-10 relative z-[1]">
          {/* <iframe
                        className="xl:h-[700px] h-[350px] md:h-[450px] lg:h-[600px] w-full rounded"
                        src="https://www.youtube.com/embed/6XRokTR92Ik?si=zg84ssT_ohlAv9-U"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="video"
                    />{" "} */}
          <video
            className="border-1 border-[#f1593a] h-full w-full rounded-lg"
            src="https://ebitans.com/eBitans_promo_video.webm"
            playsInline
            loop
            autoPlay
            muted
          ></video>
        </div>
        <div
          className={`${styles.bgGradient} absolute top-0 left-0 w-full h-full rounded-xl`}
        ></div>
      </div>
    </section>
  );
};

export default Dream;
