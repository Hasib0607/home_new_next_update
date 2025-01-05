import Image from "next/image";
import graphLaptop from "@/assets/images/affiliate/graphLaptop.png";
import manMobile from "@/assets/images/affiliate/manMobile.png";
import dollar from "@/assets/images/affiliate/dollar.png";
import design1 from "@/assets/images/affiliate/design1.png";

const Pay = ({ locale }) => {
  const bangla = locale !== "en";
  return (
    <div className="bg-white relative z-[1]">
      <div className="grid lg:grid-cols-2 gap-x-14 gap-y-10 lg:place-items-center lg:pt-32 lg:pb-32 pb-16 pt-28 container px-5 lg:px-10">
        <div className="lg:justify-self-start justify-self-center mt-20">
          <div className="relative mr-24 ">
            <Image
              width={500}
              height={500}
              src={graphLaptop}
              alt="ebitans image"
              className="h-auto w-auto"
            />
            <Image
              width={500}
              height={500}
              src={manMobile}
              alt="ebitans image"
              className=" absolute z-[2] -right-24 -top-44 h-auto w-auto"
            />
            <Image
              width={500}
              height={500}
              src={dollar}
              alt="ebitans image"
              className="absolute z-[1] lg:left-5 -left-3 -top-10 h-auto w-auto"
            />
            <Image
              width={500}
              height={500}
              src={design1}
              alt="ebitans image"
              className="absolute z-[1] -right-10 bottom-0 h-auto w-auto"
            />
          </div>
        </div>

        <div className="lg:justify-self-end justify-self-center space-y-4">
          <h1 className="text-3xl font-semibold max-w-[500px]">
            {!bangla
              ? "Earn Lifetime Income with the eBitans Affiliate Program!"
              : "eBitans অ্যাফিলিয়েট প্রোগ্রামের মাধ্যমে আজীবন আয় করুন!"}
          </h1>
          <p className="max-w-[500px]">
            {!bangla ? (
              <>
                <p>
                  Make money effortlessly with a simple yet rewarding affiliate
                  program. Here’s how it works:
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    <span className="font-bold">Share and Promote:</span> Use
                    your social media and influence to showcase the benefits of
                    eBitans, Bangladesh’s best{" "}
                    <a
                      href="https://www.ebitans.com.bd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f1593a] underline"
                    >
                      e-commerce website builder
                    </a>
                    .
                  </li>
                  <li>
                    <span className="font-bold">Get Referrals:</span> Share your
                    unique referral link with your audience.
                  </li>
                  <li>
                    <span className="font-bold">Earn for a Lifetime:</span> For
                    every user who signs up through your link, you’ll earn a 20%
                    commission – for life! As long as they keep their account
                    active, your earnings never stop.
                  </li>
                </ul>
                <p>
                  It’s that easy! Start promoting eBitans and build a steady
                  stream of income today.
                </p>
              </>
            ) : (
              <>
                <p>
                  সহজ এবং লাভজনক অ্যাফিলিয়েট প্রোগ্রামের মাধ্যমে সহজেই অর্থ
                  উপার্জন করুন। এটি যেভাবে কাজ করে:
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    <span className="font-bold">শেয়ার এবং প্রচার করুন:</span>{" "}
                    আপনার সামাজিক মিডিয়া এবং প্রভাব ব্যবহার করে বাংলাদেশের সেরা{" "}
                    <a
                      href="https://www.ebitans.com.bd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f1593a] underline"
                    >
                      ই-কমার্স ওয়েবসাইট নির্মাণ প্ল্যাটফর্ম
                    </a>{" "}
                    eBitans এর সুবিধাগুলি প্রদর্শন করুন।
                  </li>
                  <li>
                    <span className="font-bold">রেফারেল পান:</span> আপনার ইউনিক
                    রেফারেল লিঙ্কটি আপনার অডিয়েন্সের সাথে শেয়ার করুন।
                  </li>
                  <li>
                    <span className="font-bold">
                      আজীবনের জন্য উপার্জন করুন:
                    </span>{" "}
                    আপনার লিঙ্কের মাধ্যমে সাইন আপ করা প্রতিটি ব্যবহারকারীর জন্য
                    আপনি আজীবনের জন্য ২০% কমিশন উপার্জন করবেন! যতদিন তারা তাদের
                    অ্যাকাউন্ট সক্রিয় রাখে, আপনার উপার্জন বন্ধ হবে না।
                  </li>
                </ul>
                <p>
                  এত সহজ! আজই eBitans প্রচার শুরু করুন এবং একটি স্থায়ী আয়ের
                  ধারা তৈরি করুন।
                </p>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pay;
