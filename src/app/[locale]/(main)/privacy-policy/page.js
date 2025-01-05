import Image from "next/image";
import banner from "@/assets/images/webBanner/ebitans - ebitans - eCommerce website builder platform - Refund Policy.webp";
import styles from "@/components/home/home.module.css";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Our Privacy Policy governs your visit to https://ebitans.com.bd/ and explains how we collect, safeguard and disclose information that results from your use of our Service.",
};

const Privacy = async ({ params: { locale } }) => {
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
          {bangla ? "প্রাইভেসী পলিসি" : "Privacy Policy"}
        </h1>
      </div>

      {/* <div className="sm:h-[40vh] h-[15vh] bg-center bg-[length:100%_100%] flex flex-col gap-4 items-center justify-center bg-[url('https://ebitans.com/Image/cover/eBitans-Web-Bannar1.png')] bg-no-repeat ">
            <h1 className='text-md sm:text-lg md:text-xl lg:text-4xl font-bold text-[#f1593a]'>{bangla ? "eBitans" : "eBitans"}</h1>
                <h1 className=' text-xl sm:text-2xl md:text-4xl lg:text-7xl font-bold text-white'>{bangla ? "প্রাইভেসী পলিসি" : "Privacy Policy"}</h1>
            </div> */}
      <div className="container px-5 lg:px-10 py-14 text-justify">
        <div className="text-xl font-bold pt-8 pb-4">
          {bangla ? (
            <>
              স্বাগতম eBitans-এ! <br />
              আপনার গোপনীয়তা রক্ষা করা আমাদের প্রধান অগ্রাধিকার। এই ডকুমেন্টে
              আমরা কিভাবে আপনার তথ্য সংগ্রহ, ব্যবহার এবং নিরাপদ রাখি তা বর্ণনা
              করা হয়েছে, যখন আমরা বাংলাদেশের সেরা ই-কমার্স ওয়েবসাইট নির্মাণ
              প্ল্যাটফর্ম প্রদান করি।
            </>
          ) : (
            <>
              Welcome to eBitans! <br />
              Protecting your privacy is our top priority. This document
              outlines how we collect, use, and safeguard your data while
              providing the best eCommerce website builder in Bangladesh.
            </>
          )}
        </div>
        <div>
          <h3 className="text-3xl font-bold pt-8 pb-4">
            {bangla ? "ভূমিকা" : "Introduction"}
          </h3>
          <p>
            {bangla ? (
              <>
                eBitans (“আমরা,” “আমাদের”) ওয়েবসাইট{" "}
                <a
                  href="https://www.ebitans.com.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f1593a] underline"
                >
                  https://www.ebitans.com.bd
                </a>{" "}
                পরিচালনা করে, যা “সার্ভিস” হিসেবে পরিচিত। এই প্রাইভেসি পলিসি
                আমাদের সার্ভিস ব্যবহার করার সময় আপনার তথ্য কিভাবে পরিচালনা করি
                তা ব্যাখ্যা করে। আমাদের সার্ভিসে প্রবেশ করার মাধ্যমে আপনি এখানে
                বর্ণিত তথ্য সংগ্রহ, ব্যবহার এবং প্রকাশের অনুশীলনগুলিতে সম্মত হন।
              </>
            ) : (
              <>
                eBitans (“we,” “us,” “our”) operates the website{" "}
                <a
                  href="https://www.ebitans.com.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f1593a] underline"
                >
                  https://www.ebitans.com.bd
                </a>
                , referred to as “Service.” This Privacy Policy explains how we
                handle your information when you use our Service. By accessing
                our Service, you agree to our collection, use, and disclosure
                practices described here.
              </>
            )}
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold pt-8 pb-4">
            {bangla ? "সংজ্ঞা" : "Definitions"}
          </h3>
          <p>
            {bangla ? (
              <>
                <span className="font-bold">সার্ভিস:</span> eBitans দ্বারা
                পরিচালিত ওয়েবসাইট{" "}
                <a
                  href="https://www.ebitans.com.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f1593a] underline"
                >
                  https://www.ebitans.com.bd
                </a>
              </>
            ) : (
              <>
                <span className="font-bold">SERVICE:</span> The website{" "}
                <a
                  href="https://www.ebitans.com.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f1593a] underline"
                >
                  https://www.ebitans.com.bd
                </a>
                , managed by eBitans.
              </>
            )}
          </p>
          <p>
            {bangla ? (
              <>
                <span className="font-bold">ব্যক্তিগত তথ্য: </span>
                এমন তথ্য যা সরাসরি বা পরোক্ষভাবে একজন ব্যক্তিকে চিহ্নিত করতে
                পারে।
              </>
            ) : (
              <>
                <span className="font-bold">PERSONAL DATA: </span>
                Information that can identify an individual directly or
                indirectly.
              </>
            )}
          </p>
          <p>
            {bangla ? (
              <>
                <span className="font-bold">ব্যবহারের তথ্য: </span>
                আমাদের সার্ভিসের সাথে আপনার ইন্টারঅ্যাকশনের ব্যাপারে
                স্বয়ংক্রিয়ভাবে সংগ্রহ করা তথ্য, যেমন পেজ ভিজিটের সময়কাল।
              </>
            ) : (
              <>
                <span className="font-bold">USAGE DATA: </span>
                Automatically collected data about your interaction with our
                Service, such as page visit duration.
              </>
            )}
          </p>
          <p>
            {bangla ? (
              <>
                <span className="font-bold">ডেটা কন্ট্রোলার: </span>
                eBitans সিদ্ধান্ত নেয় কেন এবং কিভাবে আপনার ব্যক্তিগত তথ্য
                প্রক্রিয়া করা হবে।
              </>
            ) : (
              <>
                <span className="font-bold">DATA CONTROLLER: </span>
                eBitans determines why and how your personal data is processed.
              </>
            )}
          </p>
          <p>
            {bangla ? (
              <>
                <span className="font-bold">ডেটা প্রসেসর: </span>
                তৃতীয় পক্ষ যারা eBitans এর পক্ষ থেকে আপনার তথ্য প্রক্রিয়া করে।
              </>
            ) : (
              <>
                <span className="font-bold">DATA PROCESSORS: </span>
                External parties that process your data on behalf of eBitans.
              </>
            )}
          </p>
          <p>
            {bangla ? (
              <>
                <span className="font-bold">ব্যবহারকারী: </span>
                যে কোনো ব্যক্তি যারা আমাদের সার্ভিস ব্যবহার করে।
              </>
            ) : (
              <>
                <span className="font-bold">USER: </span>
                Any individual who uses our Service.
              </>
            )}
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold pt-8 pb-4">
            {bangla
              ? "তথ্য সংগ্রহ এবং ব্যবহার"
              : "Information Collection and Use"}
          </h3>
          <p>
            {bangla
              ? "আমরা বিভিন্ন ধরনের তথ্য সংগ্রহ করি যাতে আমরা আমাদের ই-কমার্স ওয়েবসাইট নির্মাণ প্ল্যাটফর্মটি প্রদান এবং উন্নত করতে পারি।"
              : "We collect various types of information to deliver and improve our eCommerce website builder in Bangladesh."}
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold pt-8 pb-4">
            {bangla ? "সংগৃহীত তথ্যের ধরণ" : "Types of Data Collected"}
          </h3>
          <p className="font-bold">
            {bangla ? "ব্যক্তিগত তথ্য" : "Personal Data"}
          </p>
          <br />
          <p>
            {bangla
              ? "ব্যক্তিগতভাবে শনাক্তযোগ্য তথ্যের মধ্যে অন্তর্ভুক্ত হতে পারে, তবে এর মধ্যে সীমাবদ্ধ নয়:"
              : "Personally, identifiable information may include, but is not limited to:"}
          </p>
          <ul className="list-disc ml-6">
            {bangla ? (
              <>
                <li>নাম।</li>
                <li>ইমেইল ঠিকানা।</li>
                <li>ফোন নম্বর।</li>
                <li>ঠিকানা (শহর, পোস্টাল কোড এবং দেশসহ)।</li>
              </>
            ) : (
              <>
                <li>Name.</li>
                <li>Email address.</li>
                <li>Phone number.</li>
                <li>Address (including city, postal code, and country).</li>
              </>
            )}
          </ul>
          <br />
          <h4 className="font-bold">{!bangla ? "Purpose:" : "উদ্দেশ্য:"}</h4>
          <p>
            {!bangla
              ? "We use this data to provide services, send updates, and share promotional materials."
              : "আমরা এই তথ্যটি সেবা প্রদান, আপডেট পাঠানো এবং প্রচারমূলক উপকরণ শেয়ার করার জন্য ব্যবহার করি।"}
          </p>

          <h4 className="font-bold py-2">
            {!bangla ? "Other Data" : "অন্যান্য তথ্য"}
          </h4>
          <h5 className="font-semibold">
            {!bangla ? "May include:" : "এতে অন্তর্ভুক্ত হতে পারে:"}
          </h5>
          <div>
            <ul className="list-disc pl-6">
              <li>
                {!bangla
                  ? "Age, gender, or date of birth."
                  : "বয়স, লিঙ্গ বা জন্ম তারিখ।"}
              </li>
              <li>
                {!bangla
                  ? "Employment or education details."
                  : "কর্মসংস্থান বা শিক্ষার বিবরণ।"}
              </li>
              <li>
                {!bangla
                  ? "Marital status or citizenship."
                  : "বৈবাহিক অবস্থা বা নাগরিকত্ব।"}
              </li>
            </ul>
          </div>
          <h4 className="font-bold py-2">{!bangla ? "Usage:" : "ব্যবহার:"}</h4>
          <p className="">
            {!bangla
              ? "This data helps us tailor your experience and improve Service functionality."
              : "এই তথ্য আমাদের সার্ভিসের কার্যকারিতা এবং আপনার অভিজ্ঞতা উন্নত করতে সহায়ক।"}
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold pt-8 pb-4">
            {!bangla ? "Usage Data" : "ব্যবহারের তথ্য"}
          </h3>
          <p className="font-bold">
            {!bangla
              ? "Automatically collected, such as:"
              : "স্বয়ংক্রিয়ভাবে সংগ্রহ করা, যেমন:"}
          </p>
          <ul className="list-disc pl-6">
            <li>{!bangla ? "Browser type" : "ব্রাউজারের ধরন"}</li>
            <li>{!bangla ? "Pages visited" : "প্রদর্শিত পেজগুলো"}</li>
            <li>
              {!bangla
                ? "Time spent on our site"
                : "আমাদের সাইটে ব্যয় করা সময়"}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold pt-8 pb-4">
            {!bangla ? "Retention of Data" : "তথ্য সংরক্ষণ"}
          </h3>
          <p>
            {!bangla ? (
              <>
                We retain your data only as long as necessary.
                <ul className="list-disc pl-5 mt-2">
                  <li>
                    Personal Data: Stored until no longer needed or per legal
                    requirements.
                  </li>
                  <li>
                    Usage Data: Typically kept for shorter periods unless used
                    for security or operational improvements.
                  </li>
                </ul>
              </>
            ) : (
              <>
                আমরা শুধুমাত্র প্রয়োজনীয় সময় পর্যন্ত আপনার তথ্য সংরক্ষণ করি।
                <ul className="list-disc pl-5 mt-2">
                  <li>
                    ব্যক্তিগত তথ্য: যতক্ষণ প্রয়োজন বা আইনগত প্রয়োজন অনুযায়ী
                    সংরক্ষণ করা হয়।
                  </li>
                  <li>
                    ব্যবহারের তথ্য: সাধারণত স্বল্প সময়ের জন্য সংরক্ষণ করা হয়,
                    যদি না এটি নিরাপত্তা বা কার্যক্রম উন্নতির জন্য ব্যবহৃত হয়।
                  </li>
                </ul>
              </>
            )}
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold pt-8 pb-4">
            {!bangla ? "Transfer of Data" : "তথ্যের স্থানান্তর"}
          </h3>
          <p>
            {!bangla
              ? "Your data may be processed outside your country, including in Bangladesh. Rest assured, we ensure your information is secure with adequate safeguards."
              : "আপনার তথ্য আপনার দেশের বাইরে প্রক্রিয়া করা হতে পারে, যার মধ্যে বাংলাদেশও থাকতে পারে। নিশ্চিত থাকুন, আমরা আপনার তথ্য সুরক্ষিত রাখতে যথাযথ সুরক্ষা ব্যবস্থা গ্রহণ করি।"}
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold pt-8 pb-4">
            {!bangla ? "Disclosure of Data" : "তথ্য প্রকাশ"}
          </h3>

          <p>
            {!bangla
              ? "We may share your information under the following circumstances:"
              : "আমরা নিম্নলিখিত পরিস্থিতিতে আপনার তথ্য শেয়ার করতে পারি:"}
          </p>
          <br />
          <li className="font-bold">
            {!bangla ? "Legal Requirements:" : "আইনগত প্রয়োজনীয়তা:"}
          </li>
          <p className="pl-5">
            {!bangla
              ? "In response to lawful requests or obligations."
              : "বৈধ অনুরোধ বা বাধ্যবাধকতার জন্য।"}
          </p>
          <li className="font-bold">
            {!bangla ? "Business Transactions:" : "ব্যবসায়িক লেনদেন:"}
          </li>
          <p className="pl-5">
            {!bangla
              ? "In cases of mergers, acquisitions, or asset transfers."
              : "একত্রিতকরণ, অধিগ্রহণ, বা সম্পদ স্থানান্তরের ক্ষেত্রে।"}
          </p>
          <li className="font-bold">
            {!bangla ? "Other Parties:" : "অন্যান্য পক্ষ:"}
          </li>
          <div className="pl-5">
            <li>
              {!bangla
                ? "Affiliates and service providers supporting our operations."
                : "আমাদের কার্যক্রম সমর্থনকারী সহযোগী এবং সেবা প্রদানকারীরা।"}
            </li>
            <li>
              {!bangla
                ? "For purposes described at the time of collection."
                : "সংগ্রহের সময় বর্ণিত উদ্দেশ্যে।"}
            </li>
            <li>
              {!bangla
                ? "With your explicit consent."
                : "আপনার স্পষ্ট সম্মতির মাধ্যমে।"}
            </li>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold pt-8 pb-4">
            {!bangla ? "Security of Data" : "তথ্যের নিরাপত্তা"}
          </h3>
          <p>
            {!bangla
              ? "We implement robust security measures to protect your information. However, no system is foolproof. We recommend taking precautions when sharing sensitive data online."
              : "আমরা আপনার তথ্য রক্ষার জন্য শক্তিশালী নিরাপত্তা ব্যবস্থা গ্রহণ করি। তবে, কোন সিস্টেমই সম্পূর্ণ নিরাপদ নয়। আমরা পরামর্শ দিচ্ছি যে আপনি অনলাইনে সংবেদনশীল তথ্য শেয়ার করার সময় সতর্ক থাকুন।"}
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold pt-8 pb-4">
            {!bangla
              ? "Third-Party Service Providers"
              : "তৃতীয়-পক্ষ সেবা প্রদানকারী"}
          </h3>
          <p>
            {!bangla ? (
              <>
                We may collaborate with external providers for tasks like:
                <ul className="list-disc pl-5 mt-2">
                  <li>Payment processing (e.g., for premium services).</li>
                  <li>Analytics to understand Service performance.</li>
                  <li>Hosting services to ensure website availability.</li>
                </ul>
              </>
            ) : (
              <>
                আমরা বাইরের সেবা প্রদানকারীদের সাথে সহযোগিতা করতে পারি, যেমন:
                <ul className="list-disc pl-5 mt-2">
                  <li>পেমেন্ট প্রক্রিয়াকরণ (যেমন, প্রিমিয়াম সেবা জন্য)।</li>
                  <li>সেবা পারফরমেন্স বিশ্লেষণ।</li>
                  <li>হোস্টিং সেবা যাতে ওয়েবসাইট সর্বদা উপলব্ধ থাকে।</li>
                </ul>
              </>
            )}
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold pt-8 pb-4">
            {!bangla ? "Children’s Privacy" : "শিশুদের গোপনীয়তা"}
          </h3>
          <p>
            {!bangla
              ? "Our Service is not intended for individuals under 18. We do not knowingly collect their data. If you believe a minor has shared information, contact us immediately."
              : "আমাদের সার্ভিস ১৮ বছরের নিচে বয়সী ব্যক্তিদের জন্য নয়। আমরা তাদের তথ্য জানার উদ্দেশ্যে সংগ্রহ করি না। যদি আপনি মনে করেন কোনও শিশু তথ্য শেয়ার করেছে, তবে দয়া করে অবিলম্বে আমাদের সাথে যোগাযোগ করুন।"}
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold pt-8 pb-4">
            {!bangla ? "Links to Other Sites" : "অন্যান্য সাইটের লিঙ্ক"}
          </h3>
          <p>
            {!bangla
              ? "Our website may contain links to third-party sites. We are not responsible for their content or privacy practices. Review their policies before sharing any data."
              : "আমাদের ওয়েবসাইটে তৃতীয় পক্ষের সাইটগুলির লিঙ্ক থাকতে পারে। আমরা তাদের বিষয়বস্তু বা গোপনীয়তা নীতির জন্য দায়ী নই। তাদের নীতিগুলি পর্যালোচনা করুন পূর্বে কোনো তথ্য শেয়ার করার আগে।"}
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold pt-8 pb-4">
            {!bangla
              ? "Changes to This Privacy Policy"
              : "এই প্রাইভেসি পলিসিতে পরিবর্তন"}
          </h3>
          <p>
            {!bangla
              ? "We update our Privacy Policy periodically. Check this page for changes or updates, which will take effect upon posting."
              : "আমরা আমাদের প্রাইভেসি পলিসি সময় সময় আপডেট করি। পরিবর্তন বা আপডেটের জন্য এই পৃষ্ঠাটি চেক করুন, যা পোস্ট করার পর কার্যকর হবে।"}
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold pt-8 pb-4">
            {!bangla ? "After-Sales Support" : "পরবর্তী সেবা সহায়তা"}
          </h3>
          <p>
            {!bangla ? (
              <>
                We offer comprehensive after-sales support for our services,
                including:
                <ul className="list-disc pl-5">
                  <li>Assistance with technical issues.</li>
                  <li>
                    Guidance for using our eCommerce website builder in
                    Bangladesh effectively.
                  </li>
                </ul>
                For further inquiries or concerns, reach out via our contact
                page or email.
              </>
            ) : (
              <>
                আমরা আমাদের সেবার জন্য ব্যাপক পরবর্তী বিক্রয় সহায়তা প্রদান
                করি, যার মধ্যে রয়েছে:
                <ul className="list-disc pl-5">
                  <li>টেকনিক্যাল সমস্যা সমাধানে সহায়তা।</li>
                  <li>
                    বাংলাদেশে আমাদের ইকমার্স ওয়েবসাইট নির্মাণ প্ল্যাটফর্ম
                    কার্যকরভাবে ব্যবহার করার জন্য গাইডেন্স।
                  </li>
                </ul>
                আরও যেকোনো প্রশ্ন বা উদ্বেগের জন্য, আমাদের যোগাযোগ পৃষ্ঠায় বা
                ইমেইলে যোগাযোগ করুন।
              </>
            )}
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold pt-8 pb-4">
            {!bangla
              ? "Your Privacy, Our Priority"
              : "আপনার গোপনীয়তা, আমাদের অগ্রাধিকার"}
          </h3>
          <p>
            {!bangla ? (
              <>
                At eBitans, we prioritize transparency and user trust. Explore
                our Service confidently, knowing your data is in safe hands.
                <br />
                Get started today with the best eCommerce website builder in
                Bangladesh and enjoy top-tier support!
              </>
            ) : (
              <>
                eBitans-এ আমরা স্বচ্ছতা এবং ব্যবহারকারীর বিশ্বাসকে অগ্রাধিকার
                দেই। আত্মবিশ্বাসের সাথে আমাদের সার্ভিস এক্সপ্লোর করুন, জানুন
                আপনার তথ্য নিরাপদ হাতে।
                <br />
                আজই শুরু করুন বাংলাদেশের সেরা ইকমার্স ওয়েবসাইট নির্মাণ
                প্ল্যাটফর্ম এবং উপভোগ করুন শীর্ষস্থানীয় সহায়তা!
              </>
            )}
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold pt-8 pb-4">
            {bangla ? "যোগাযোগ করুন" : "Contact Us"}
          </h3>
          <p>
            {bangla ? (
              <>
                এই প্রাইভেসি পলিসি সম্পর্কে যদি আপনার কোনো প্রশ্ন থাকে, তাহলে
                অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন:
                <br />
                <span className="font-bold">ইমেইল:</span> support@ebitans.com
                <br />
                <span className="font-bold">আমাদের অফিস:</span>
                <br />
                হাউস-৩৯ (৪র্থ তলা), রোড-২০, নিকুঞ্জ-২, খিলখেত, ঢাকা-১২২৯
              </>
            ) : (
              <>
                If you have any questions about this Privacy Policy, please
                contact us by
                <br />
                <span className="font-bold">email:</span> support@ebitans.com
                <br />
                <span className="font-bold">Visit Our Office:</span>
                <br />
                House-39 (4th floor), Road-20, Nikunja-2, Khilkhet, Dhaka-1229
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
