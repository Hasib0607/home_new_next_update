import Image from "next/image";
import banner from "@/assets/images/webBanner/ebitans - eCommerce website builder platform - terms and conditions.webp";
import styles from "@/components/home/home.module.css";

export const metadata = {
  title: "Terms and Conditions",
  description:
    "By accessing or using the Platform or Services, you agree to be bound by these Terms. If you do not agree to all the terms and conditions of this agreement, you may not access or use the Platform or Services.",
};

const TermsAndConditions = async ({ params: { locale } }) => {
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
          {bangla ? "eBitans সম্পর্কে কিছু কথা" : "eBitans"}
        </h1>
        <h1
          className={` ${styles.wordSpacingOne} ${styles.archivo} mt-9 font-light   absolute z-[1] text-gray-200 md:font-bold md:tracking-[15px] tracking-widest  text-2xl lg:text-6xl`}
        >
          {bangla ? "টার্মস এবং কন্ডিশনস" : "Terms & Conditions"}
        </h1>
      </div>

      <div className="container px-5 lg:px-10 py-14 text-justify">
        <p>
          {!bangla
            ? `In these Terms and conditions the term “we”, “our”, “us”, and “eBitans” refers to eBitans, a registered company based in Dhaka Bangladesh. The term “Platform”, “Site”, and “Website” refers to the eBitans e-commerce platform, an intellectual property owned by eBitans, the official website, and all other websites related to this platform.

                    The term “merchant” refers to people who have registered on this website and used the eBitans platform to create their e-commerce website. All active and inactive site owners in eBitans will be treated as “merchants”. The term, “Customer” refers to all the customers purchasing / ordering from our merchant’s online store. The term “you”, and “user” refers to all the merchants, customers, and/or visitors using/visiting this platform or any entity of this platform.

                    Our Privacy Policy also governs your use of our service and explains how we collect, safeguard and disclose information that results from your use of our web pages.

                    Your agreement includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood all the Agreements, and agree to be bound by them.

                    If you do not agree with (or cannot comply with) Agreements, then you may not use the service, but please let us know by emailing info@ebitans.com, so we can try to find a solution. These Terms apply to all visitors, users, and others who wish to access or use the service.
                    `
            : `এই শর্তাবলীতে “আমরা”, “আমাদের”, “আমাদের” এবং “eBitans” শব্দটি ঢাকা বাংলাদেশে অবস্থিত একটি নিবন্ধিত কোম্পানি eBitans কে বোঝায়। "প্ল্যাটফর্ম", "সাইট", এবং "ওয়েবসাইট" শব্দটি eBitans ই-কমার্স প্ল্যাটফর্ম, eBitans এর অফিসিয়াল ওয়েবসাইটের মালিকানাধীন একটি বৌদ্ধিক সম্পত্তি এবং এই প্ল্যাটফর্মের সাথে সম্পর্কিত অন্যান্য সমস্ত ওয়েবসাইটকে বোঝায়।

                    "বণিক" শব্দটি এমন লোকদের বোঝায় যারা এই ওয়েবসাইটে নিবন্ধন করেছেন এবং তাদের ই-কমার্স ওয়েবসাইট তৈরি করতে eBitans প্ল্যাটফর্ম ব্যবহার করেছেন। eBitans এর সমস্ত সক্রিয় এবং নিষ্ক্রিয় সাইটের মালিকদের "বণিক" হিসাবে গণ্য করা হবে। "গ্রাহক" শব্দটি আমাদের বণিকের অনলাইন স্টোর থেকে ক্রয়/অর্ডার করা সমস্ত গ্রাহককে বোঝায়। "আপনি", এবং "ব্যবহারকারী" শব্দটি সমস্ত বণিক, গ্রাহক এবং/অথবা এই প্ল্যাটফর্ম বা এই প্ল্যাটফর্মের যেকোন সত্তা ব্যবহার/দর্শনকারী দর্শকদের বোঝায়।

                    আমাদের গোপনীয়তা নীতি আমাদের পরিষেবার আপনার ব্যবহারকেও নিয়ন্ত্রণ করে এবং ব্যাখ্যা করে যে আমরা কীভাবে আমাদের ওয়েব পৃষ্ঠাগুলির আপনার ব্যবহারের ফলে তথ্য সংগ্রহ, সুরক্ষা এবং প্রকাশ করি।

                    আপনার চুক্তিতে এই শর্তাবলী এবং আমাদের গোপনীয়তা নীতি ("চুক্তি") অন্তর্ভুক্ত রয়েছে। আপনি স্বীকার করেন যে আপনি সমস্ত চুক্তি পড়েছেন এবং বুঝেছেন এবং সেগুলির দ্বারা আবদ্ধ হতে সম্মত হন৷

                    আপনি যদি চুক্তির সাথে একমত না হন (বা মেনে চলতে না পারেন) তবে আপনি পরিষেবাটি ব্যবহার নাও করতে পারেন, তবে অনুগ্রহ করে info@ebitans.com-এ ইমেল করে আমাদের জানান, যাতে আমরা একটি সমাধান খোঁজার চেষ্টা করতে পারি। এই শর্তাবলী সমস্ত দর্শক, ব্যবহারকারী এবং অন্যদের জন্য প্রযোজ্য যারা পরিষেবাটি অ্যাক্সেস করতে বা ব্যবহার করতে চান৷`}
        </p>

        <h3 className="text-2xl font-bold py-6">
          {!bangla ? "Introduction" : "ভূমিকা"}
        </h3>

        <p>
          {!bangla
            ? `Welcome to eBitans e-commerce platform and website. These terms and conditions apply to the Platform, Site, and all of its divisions, subsidiaries, and affiliate-operated Internet sites, which reference these Terms and Conditions. This Platform and Site are owned and operated by eBitans, a product of Wavebox Limited.

                    eBitans is an online Platform / Tool. By using eBitans a merchant can create his / her online store to start and operate an E-commerce business. None of the products listed or will be listed in the future is not owned by us and we are not involved in any actual sell transaction between the customers and merchants.

                    By accessing the Site, you confirm your understanding of the Terms and Conditions and agree to comply with these terms and conditions. If you do not agree to these Terms and Conditions of use, please do not access, register with or use this Site. The Site reserves the right to change, modify, add, or remove portions of these Terms and Conditions of use at any time. Changes will be effective when posted on the Site with no other notice provided. Please check these Terms and Conditions of use regularly for updates. Your continued use of the Site following the posting of changes to these Terms and Conditions of use constitutes your acceptance of those changes.
                    `
            : `eBitans ই-কমার্স প্ল্যাটফর্ম এবং ওয়েবসাইটে স্বাগতম। এই শর্তাবলী প্ল্যাটফর্ম, সাইট এবং এর সমস্ত বিভাগ, সহায়ক সংস্থা এবং অনুমোদিত ইন্টারনেট সাইটগুলিতে প্রযোজ্য, যা এই শর্তাবলী উল্লেখ করে। এই প্ল্যাটফর্ম এবং সাইটটি ওয়েভবক্স লিমিটেডের একটি পণ্য eBitans মালিকানাধীন এবং পরিচালিত।

                    eBitans হল একটি অনলাইন প্ল্যাটফর্ম/ টুল। যা ব্যবহার করে একজন বণিক একটি ই-কমার্স ব্যবসা শুরু ও পরিচালনা করতে তার অনলাইন স্টোর তৈরি করতে পারেন। তালিকাভুক্ত বা ভবিষ্যতে তালিকাভুক্ত করা পণ্যগুলির কোনওটিই আমাদের মালিকানাধীন নয় এবং আমরা গ্রাহক এবং ব্যবসায়ীদের মধ্যে কোনও প্রকৃত বিক্রয় লেনদেনের সাথে জড়িত নই।

                    সাইটে প্রবেশ করে, আপনি শর্তাবলী সম্পর্কে আপনার বোঝার বিষয়টি নিশ্চিত করেন এবং এই শর্তাবলী মেনে চলতে সম্মত হন। আপনি যদি এই ব্যবহারের শর্তাবলীতে সম্মত না হন, তাহলে অনুগ্রহ করে এই সাইটে প্রবেশ, নিবন্ধন বা ব্যবহার করবেন না। সাইটটি যেকোন সময়ে এই শর্তাবলী এবং ব্যবহারের শর্তাবলীর অংশ পরিবর্তন, সংশোধন, যোগ বা অপসারণ করার অধিকার সংরক্ষণ করে। অন্য কোন নোটিশ প্রদান না করে সাইটে পোস্ট করা হলে পরিবর্তন কার্যকর হবে। অনুগ্রহ করে আপডেটের জন্য নিয়মিত ব্যবহারের নিয়ম ও শর্তাবলী পরীক্ষা করুন। এই শর্তাবলী এবং ব্যবহারের শর্তাবলীতে পরিবর্তন পোস্ট করার পরে আপনার সাইটের ক্রমাগত ব্যবহার সেই পরিবর্তনগুলির আপনার স্বীকৃতি গঠন করে।
                    `}
        </p>

        <h3 className="text-2xl font-bold py-6">
          {!bangla ? "General Terms" : "সাধারণ শর্তাবলী"}
        </h3>

        <div>
          <p>
            {!bangla
              ? `You must read, agree with and accept all of the terms and conditions contained in these Terms of Service and the Privacy Policy before you may become a member of eBitans:
                `
              : `আপনি eBitans এর সদস্য হওয়ার আগে আপনাকে অবশ্যই এই পরিষেবার শর্তাবলী এবং গোপনীয়তা নীতিতে থাকা সমস্ত শর্তাবলী পড়তে হবে, সম্মত হতে হবে এবং স্বীকার করতে হবে:`}
          </p>
          <p className="pt-2">
            <span className="text-lg font-bold">
              {!bangla ? "1. Age restrictions: " : "১. বয়স সীমাবদ্ধতা: "}
            </span>
            {!bangla
              ? `All merchants and customers using eBitans have to confirm that they are at least 18 years of age or are accessing the Site under the supervision of a parent or legal guardian. Without prejudice to any other rights and remedies of eBitans under these Terms and Conditions or at law, eBitans reserves the right to limit or withdraw access to the Site or can terminate any store of a merchant if eBitans at its sole discretion reasonably believes or comes to the knowledge that the person is under the age of 18 years.
                    `
              : `eBitans ব্যবহারকারী সমস্ত ব্যবসায়ী এবং গ্রাহকদের নিশ্চিত করতে হবে যে তাদের বয়স কমপক্ষে 18 বছর বা তারা পিতামাতা বা আইনী অভিভাবকের তত্ত্বাবধানে সাইটটি অ্যাক্সেস করছেন৷ এই নিয়ম ও শর্তাবলীর অধীনে বা আইনের অধীনে eBitans এর অন্য কোন অধিকার এবং প্রতিকারের প্রতি পূর্বানুমান না করে, eBitans সাইটের অ্যাক্সেস সীমিত বা প্রত্যাহার করার অধিকার সংরক্ষণ করে বা যদি eBitans তার নিজস্ব বিবেচনার ভিত্তিতে যুক্তিসঙ্গতভাবে বিশ্বাস করে বা আসে জ্ঞান যে ব্যক্তির বয়স 18 বছরের কম।
                    `}
            <span></span>
          </p>
          <p className="pt-2">
            <span className="text-lg font-bold">
              {!bangla
                ? "2. Using eBitans for commercial purposes: "
                : "২. বাণিজ্যিক উদ্দেশ্যে eBitans ব্যবহার করা: "}
            </span>
            {!bangla
              ? `This platform, website, or any portion of this platform, or website (including but not limited to any copyrighted material, trademarks, or other proprietary information) may not be reproduced, duplicated, copied, sold, resold, visited, distributed or otherwise exploited for any commercial purpose without express written consent of eBitans and/or its merchants (for individual merchants store contents owned by them only), as may be applicable. You may not frame or use framing techniques to enclose any of eBitans and/or its affiliates trademark, logo, or other proprietary information (including images, text, page layout, or form) without its/their express written consent. You may not use any meta tags or any other "hidden text" utilizing eBitans and/or its affiliate's names, designs, get-ups, or trademarks without the express written consent of eBitans and/or its affiliates, as applicable. Any unauthorized use terminates the permission or license granted by eBitans and/or its affiliates, as applicable.
                    `
              : `এই প্ল্যাটফর্ম, ওয়েবসাইট, বা এই প্ল্যাটফর্মের যে কোনও অংশ, বা ওয়েবসাইট (কোনও কপিরাইটযুক্ত উপাদান, ট্রেডমার্ক, বা অন্যান্য মালিকানার তথ্য সহ কিন্তু সীমাবদ্ধ নয়) পুনরুত্পাদন, অনুলিপি, অনুলিপি, বিক্রি করা যাবে না, eBitans এবং/অথবা এর ব্যবসায়ীদের (শুধুমাত্র তাদের মালিকানাধীন পৃথক বণিকদের দোকানের সামগ্রীর জন্য) প্রকাশ্য লিখিত সম্মতি ছাড়াই কোনো বাণিজ্যিক উদ্দেশ্যে পুনঃবিক্রয়, পরিদর্শন, বিতরণ বা অন্যথায় শোষিত, যেমনটি প্রযোজ্য হতে পারে। আপনি eBitans এবং/অথবা এর অনুমোদিত ট্রেডমার্ক, লোগো, বা অন্যান্য মালিকানা তথ্য (ছবি, পাঠ্য, পৃষ্ঠার বিন্যাস, বা ফর্ম সহ) এর/তাদের স্পষ্ট লিখিত সম্মতি ছাড়াই আবদ্ধ করার জন্য ফ্রেম বা ফ্রেমিং কৌশল ব্যবহার করতে পারবেন না। আপনি কোনো মেটা ট্যাগ বা অন্য কোনো "লুকানো পাঠ্য" ব্যবহার করতে পারবেন না eBitans এবং/অথবা এর অধিভুক্তদের নাম, ডিজাইন, গেট-আপ, বা ট্রেডমার্ক ব্যবহার করে eBitans এবং/অথবা এর সহযোগীদের স্পষ্ট লিখিত সম্মতি ছাড়া, প্রযোজ্য হিসাবে। যেকোন অননুমোদিত ব্যবহার eBitans এবং/অথবা এর সহযোগীদের দ্বারা প্রদত্ত অনুমতি বা লাইসেন্স বাতিল করে, যেমন প্রযোজ্য।
                    `}
            <span></span>
          </p>
          <p className="pt-2">
            <span className="text-lg font-bold">
              {!bangla
                ? "3. Using eBitans by business entities: "
                : "৩. ব্যবসায়িক সত্তা দ্বারা eBitans ব্যবহার করা: "}
            </span>
            {!bangla
              ? `Business entities creating an e-commerce website in eBitans, you agree that you have the requisite up-to-date licenses to run your business, that you have the authority to bind that entity to these Terms and Conditions and that you and the business entity will comply with all applicable laws relating to the scope of activity undertaken. No person or business entity may register as a member of the Site more than once, liability under these Terms and Conditions is to the specific individual, directly or indirectly related to the email address given by the users.
                    `
              : `ব্যবসায়িক সংস্থাগুলি eBitans-এ একটি ই-কমার্স ওয়েবসাইট তৈরি করে, আপনি সম্মত হন যে আপনার ব্যবসা চালানোর জন্য আপনার কাছে প্রয়োজনীয় আপ-টু-ডেট লাইসেন্স আছে, আপনি সেই সত্তাকে এই শর্তাবলীর সাথে আবদ্ধ করার ক্ষমতা রাখেন এবং শর্তাবলী এবং যে আপনি এবং ব্যবসায়িক সত্তা গৃহীত কার্যকলাপের সুযোগ সম্পর্কিত সমস্ত প্রযোজ্য আইন মেনে চলবেন। কোন ব্যক্তি বা ব্যবসায়িক সত্তা একাধিকবার সাইটের সদস্য হিসাবে নিবন্ধন করতে পারে না, এই শর্তাবলীর অধীনে দায়বদ্ধতা নির্দিষ্ট ব্যক্তির, প্রত্যক্ষ বা পরোক্ষভাবে ব্যবহারকারীদের দেওয়া ইমেল ঠিকানার সাথে সম্পর্কিত।
                    `}
            <span></span>
          </p>
          <p className="pt-2">
            <span className="text-lg font-bold">
              {!bangla
                ? "4. Contents uploaded by merchants: "
                : "৪. বণিকদের দ্বারা আপলোড করা বিষয়বস্তু: "}
            </span>
            {!bangla
              ? `Product representations expressed on individual merchant websites are those of the merchants. Submissions or opinions expressed on those sites' informative pages, descriptions on product details pages, and any other information available within those stores are those of the individual merchants, such contents do not necessarily reflect our opinions. Certain services and related features that may be made available on those individual merchant sites may require registration or the creation of a site by using the e-commerce registration form. Should you choose to register and create your store for any such services or related features, you agree to provide accurate and current information about yourself and your business and to promptly update such information if there are any changes.
                    `
              : `পৃথক বণিক ওয়েবসাইটে প্রকাশ করা পণ্যের উপস্থাপনাগুলি ব্যবসায়ীদের। এই সাইটগুলির তথ্যমূলক পৃষ্ঠাগুলিতে প্রকাশ করা জমা বা মতামত, পণ্যের বিবরণ পৃষ্ঠাগুলির বিবরণ এবং সেই দোকানগুলির মধ্যে উপলব্ধ অন্য কোনও তথ্য পৃথক ব্যবসায়ীদের, এই ধরনের বিষয়বস্তুগুলি আমাদের মতামতকে প্রতিফলিত করে না৷ নির্দিষ্ট কিছু পরিষেবা এবং সম্পর্কিত বৈশিষ্ট্যগুলি যেগুলি পৃথক বণিক সাইটে উপলব্ধ করা যেতে পারে সেগুলির জন্য ই-কমার্স নিবন্ধন ফর্ম ব্যবহার করে নিবন্ধন বা একটি সাইট তৈরির প্রয়োজন হতে পারে৷ আপনি যদি এই ধরনের কোনও পরিষেবা বা সম্পর্কিত বৈশিষ্ট্যগুলির জন্য আপনার স্টোর নিবন্ধন এবং তৈরি করতে পছন্দ করেন তবে আপনি নিজের এবং আপনার ব্যবসার সম্পর্কে সঠিক এবং বর্তমান তথ্য প্রদান করতে এবং কোনো পরিবর্তন হলে এই ধরনের তথ্য অবিলম্বে আপডেট করতে সম্মত হন।
                    `}
            <span></span>
          </p>
          <p className="pt-2">
            <span className="text-lg font-bold">
              {!bangla ? "5. User information: " : "৫. ব্যবহারকারীর তথ্য: "}
            </span>
            {!bangla
              ? `Every user of the Site is solely responsible for keeping passwords and other account identifiers safe and secure and for restricting access to his/her computer to prevent unauthorized access to his/her account. The account owner is entirely responsible for all activities that occur under such password or account. Furthermore, you must notify us of any unauthorized use of your password or account. The Site / Platform shall not be responsible or liable, directly or indirectly, in any way for any loss or damage of any kind incurred as a result of, or in connection with, your failure to comply with this section. During the registration process, you agree to receive direct and promotional emails, SMS and push notifications from the Site, and all of its divisions, subsidiaries, and affiliates operated on the Internet. You can subsequently opt out of receiving such direct and promotional communications by clicking on the link at the bottom of any promotional email but please note that some communication is necessary to complete a purchase/sell of order and that this communication cannot be opted out of if you are purchasing from any merchants store or selling as a merchant.
                    `
              : `সাইটের প্রতিটি ব্যবহারকারী পাসওয়ার্ড এবং অন্যান্য অ্যাকাউন্ট শনাক্তকারীকে নিরাপদ এবং সুরক্ষিত রাখার জন্য এবং তার অ্যাকাউন্টে অননুমোদিত অ্যাক্সেস রোধ করতে তার কম্পিউটারে অ্যাক্সেস সীমাবদ্ধ করার জন্য সম্পূর্ণরূপে দায়ী। অ্যাকাউন্ট মালিক এই ধরনের পাসওয়ার্ড বা অ্যাকাউন্টের অধীনে ঘটে যাওয়া সমস্ত কার্যকলাপের জন্য সম্পূর্ণরূপে দায়ী। উপরন্তু, আপনার পাসওয়ার্ড বা অ্যাকাউন্টের কোনো অননুমোদিত ব্যবহারের বিষয়ে আপনাকে অবশ্যই আমাদের অবহিত করতে হবে। সাইট/প্ল্যাটফর্ম প্রত্যক্ষ বা পরোক্ষভাবে, এই ধারাটি মেনে চলতে আপনার ব্যর্থতার ফলে বা তার সাথে সম্পর্কিত যেকোন ধরনের ক্ষতি বা ক্ষতির জন্য দায়ী বা দায়বদ্ধ হবে না। রেজিস্ট্রেশন প্রক্রিয়া চলাকালীন, আপনি সাইট থেকে সরাসরি এবং প্রচারমূলক ইমেল, এসএমএস এবং পুশ বিজ্ঞপ্তি পেতে সম্মত হন এবং ইন্টারনেটে পরিচালিত এর সমস্ত বিভাগ, সহায়ক সংস্থা এবং অনুমোদিত সংস্থাগুলি থেকে। আপনি পরবর্তীতে যেকোন প্রচারমূলক ইমেলের নীচের লিঙ্কে ক্লিক করে এই ধরনের সরাসরি এবং প্রচারমূলক যোগাযোগগুলি গ্রহণ করা থেকে অপ্ট আউট করতে পারেন তবে দয়া করে মনে রাখবেন যে অর্ডারের ক্রয়/বিক্রয় সম্পূর্ণ করার জন্য কিছু যোগাযোগ প্রয়োজন এবং এই যোগাযোগটি অপ্ট আউট করা যাবে না যদি আপনি যেকোন মার্চেন্ট স্টোর থেকে কিনছেন বা একজন বণিক হিসেবে বিক্রি করছেন।
                    `}
            <span></span>
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold py-6">
            {!bangla ? "Limitation of Liability" : "দায়বদ্ধতা/ সীমাবদ্ধতা"}
          </h3>
          <p>
            {!bangla
              ? `1. You expressly understand and agree that eBitans shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages.
                    `
              : `১. আপনি স্পষ্টভাবে বোঝেন এবং সম্মত হন যে eBitans কোনো প্রত্যক্ষ, পরোক্ষ, আনুষঙ্গিক, বিশেষ, ফলস্বরূপ, বা অনুকরণীয় ক্ষতির জন্য দায়ী থাকবে না।`}
          </p>
          <p>
            {!bangla
              ? `2. Including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses resulting from the use of or inability to use the service.
                    `
              : `২. পরিষেবার ব্যবহার বা ব্যবহারে অক্ষমতার ফলে লাভের ক্ষতি, সদিচ্ছা, ব্যবহার, ডেটা, বা অন্যান্য অস্পষ্ট ক্ষতি সহ কিন্তু সীমাবদ্ধ নয়।`}
          </p>
          <p>
            {!bangla
              ? `3. In no event shall eBitans or our suppliers be liable for lost profits or any special, incidental, or consequential damages arising out of or in connection with our site, our services, or these Terms of Service (however arising including negligence). You agree to indemnify and hold us and (as applicable) our parent, subsidiaries, affiliates, eBitans partners, officers, directors, agents, and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of your breach of these Terms of Service or the documents it incorporates by reference or your violation of any law or the rights of a third party.
                    `
              : `৩. কোনো ঘটনাতেই eBitans বা আমাদের সরবরাহকারীরা আমাদের সাইট, আমাদের পরিষেবা, বা এই পরিষেবার শর্তাবলী (তবে অবহেলা সহ উদ্ভূত) থেকে উদ্ভূত লাভ বা কোনো বিশেষ, আনুষঙ্গিক, বা ফলস্বরূপ ক্ষতির জন্য দায়ী থাকবে না। আপনি ক্ষতিপূরণ দিতে এবং আমাদের এবং (প্রযোজ্য হিসাবে) আমাদের পিতামাতা, সহায়ক সংস্থা, সহযোগী, eBitans অংশীদার, কর্মকর্তা, পরিচালক, এজেন্ট এবং কর্মচারীদের, যে কোনও তৃতীয় পক্ষের দ্বারা করা যুক্তিসঙ্গত অ্যাটর্নি ফি সহ যে কোনও দাবি বা দাবি থেকে ক্ষতিপূরণ দিতে সম্মত হন। আপনার এই পরিষেবার শর্তাবলীর লঙ্ঘন বা রেফারেন্স বা আপনার কোনো আইনের লঙ্ঘন বা তৃতীয় পক্ষের অধিকারের মাধ্যমে অন্তর্ভুক্ত নথিগুলির থেকে উদ্ভূত।`}
          </p>
          <p>
            {!bangla
              ? `4. Your use of the Service is at your sole risk. The Service is provided on an “as is” and “as available” basis without any warranty or condition, express implied, or statutory.
                    `
              : `৪. আপনার পরিষেবার ব্যবহার আপনার একমাত্র ঝুঁকিতে। পরিষেবাটি "যেমন আছে" এবং "যেমন উপলভ্য" ভিত্তিতে কোনো ওয়ারেন্টি বা শর্ত ছাড়াই প্রদান করা হয়, প্রকাশ করা হয়, বা সংবিধিবদ্ধ৷`}
          </p>
          <p>
            {!bangla
              ? `5. eBitans does not warrant that the Service will be uninterrupted, timely, secure, or error-free.
                    `
              : `৫. eBitans নিশ্চিত করে না যে পরিষেবাটি নিরবচ্ছিন্ন, সময়োপযোগী, সুরক্ষিত বা ত্রুটি-মুক্ত হবে।`}
          </p>
          <p>
            {!bangla
              ? `6. eBitans does not warrant that the results that may be obtained from the use of the Service will be accurate or reliable.
                    `
              : `৬. eBitans নিশ্চিত করে না যে পরিষেবার ব্যবহার থেকে প্রাপ্ত ফলাফলগুলি সঠিক বা নির্ভরযোগ্য হবে।`}
          </p>
          <p>
            {!bangla
              ? `7. eBitans does not warrant that the quality of any products, services, information, or other material purchased or obtained by you through the Service will meet your expectations, or that any errors in the Service will be corrected.
                    `
              : `৭. eBitans ওয়্যারেন্টি দেয় না যে পরিষেবার মাধ্যমে আপনার দ্বারা কেনা বা প্রাপ্ত কোনো পণ্য, পরিষেবা, তথ্য, বা অন্যান্য উপাদানের গুণমান আপনার প্রত্যাশা পূরণ করবে, অথবা পরিষেবার কোনো ত্রুটি সংশোধন করা হবে।`}
          </p>
          <p>
            {!bangla
              ? `8. This e-commerce website service & including all associated components, has been developed by eBitans. The attribution 'Developed By eBitans' must be retained and should not be altered or removed from Footer part of the website or user interface within any circumstances.
                    `
              : `৮. এই ই-কমার্স ওয়েবসাইট পরিষেবা এবং সংশ্লিষ্ট সমস্ত ফাংশন, eBitans দ্বারা তৈরি করা হয়েছে। 'Developed By eBitans' লিখাটি  অবশ্যই বজায় রাখতে হবে এবং কোনও পরিস্থিতিতে ওয়েবসাইট বা ব্যবহারকারীর ইন্টারফেসের ফুটার অংশ থেকে পরিবর্তন বা সরানো যাবে না।
                    `}
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold py-6">
            {!bangla
              ? "Terms of the User Account"
              : "ব্যবহারকারীর অ্যাকাউন্টের শর্তাবলী"}
          </h3>

          <div>
            <p>
              <span className="text-lg font-bold">
                {!bangla
                  ? "End Users: "
                  : "ব্যবহারকারীর অ্যাকাউন্টের শর্তাবলী: "}
              </span>{" "}
              <span>
                {!bangla
                  ? `End Users while browsing through the site can view products and information, request information and engage in certain Services on the Site. Users agree to the following terms and conditions: `
                  : `সাইটের মাধ্যমে ব্রাউজ করার সময় শেষ ব্যবহারকারীরা পণ্য এবং তথ্য দেখতে, তথ্যের অনুরোধ করতে এবং সাইটে নির্দিষ্ট পরিষেবাগুলিতে নিযুক্ত হতে পারে। ব্যবহারকারীরা নিম্নলিখিত শর্তাবলীতে সম্মত হন:`}
              </span>
            </p>
            <p>
              {!bangla
                ? `1. You expressly agree that any submissions by You will automatically be treated as non-confidential and non-proprietary and will become the sole property of eBitans without any compensation or credit to you whatsoever.`
                : `১. আপনি স্পষ্টভাবে সম্মত হন যে আপনার দ্বারা যে কোনো দাখিল স্বয়ংক্রিয়ভাবে অ-গোপনীয় এবং অ-মালিকানা হিসাবে বিবেচিত হবে এবং আপনাকে কোনো ক্ষতিপূরণ বা ক্রেডিট ছাড়াই eBitans-এর একমাত্র সম্পত্তিতে পরিণত হবে।`}
            </p>
            <p>
              {!bangla
                ? `2. eBitans and its affiliates may use the ideas contained in such submissions or posts for any purpose in any medium which includes but is not limited to, developing manufacturing, and marketing products and services using such ideas.`
                : `২. eBitans এবং এর সহযোগীরা এই ধরনের জমা বা পোস্টে থাকা ধারনাগুলিকে যেকোন মাধ্যমের জন্য ব্যবহার করতে পারে যার মধ্যে অন্তর্ভুক্ত কিন্তু সীমাবদ্ধ নয়, এই জাতীয় ধারণাগুলি ব্যবহার করে পণ্য এবং পরিষেবাগুলির বিকাশ, উত্পাদন এবং বিপণন৷
                        `}
            </p>
            <p>
              {!bangla
                ? `3. You may not use eBitans service(s) for any illegal or unauthorized purpose which includes but is not limited to the acts specified in Clause on "Prohibited Uses" of this Agreement.`
                : `৩. আপনি কোনো অবৈধ বা অননুমোদিত উদ্দেশ্যে eBitans পরিষেবা(গুলি) ব্যবহার করতে পারবেন না যাতে এই চুক্তির "নিষিদ্ধ ব্যবহার" সংক্রান্ত ধারায় উল্লেখ করা আইন অন্তর্ভুক্ত কিন্তু সীমাবদ্ধ নয়।`}
            </p>

            <p className="pt-2">
              <span className="text-lg font-bold">
                {!bangla ? "Users: " : "ব্যবহারকারীর অ্যাকাউন্টের শর্তাবলী: "}
              </span>{" "}
              <span>
                {!bangla
                  ? `The users who create a separate account at eBitans with the sole purpose of operating and maintaining an online store are to enter into a separate "Merchant User Agreement" and the terms specified in the "Merchant User Agreement" applies to such account users. You are requested to refer to the "Merchant User Agreement" for more details in this regard.`
                  : `যে ব্যবহারকারীরা একটি অনলাইন স্টোর পরিচালনা এবং রক্ষণাবেক্ষণের একমাত্র উদ্দেশ্য নিয়ে eBitans এ একটি পৃথক অ্যাকাউন্ট তৈরি করেন তাদের একটি পৃথক "মার্চেন্ট ইউজার এগ্রিমেন্ট" এ প্রবেশ করতে হয় এবং "মার্চেন্ট ইউজার এগ্রিমেন্ট"-এ উল্লেখিত শর্তাবলী এই ধরনের অ্যাকাউন্ট ব্যবহারকারীদের ক্ষেত্রে প্রযোজ্য। এই বিষয়ে আরো বিস্তারিত জানার জন্য আপনাকে "মার্চেন্ট ইউজার এগ্রিমেন্ট" দেখার জন্য অনুরোধ করা হচ্ছে।`}
              </span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold py-6">
            {!bangla
              ? "Intellectual Property and Customer Content"
              : "মেধা সম্পত্তি এবং গ্রাহক বিষয়বস্তু"}
          </h3>
          <p>
            {!bangla
              ? `1. We do not claim any intellectual property rights over the material you provide to the eBitans service. All material you upload remains yours. You can remove your eBitans online store at any time by deleting your Account.
                    `
              : `১. আপনি eBitans পরিষেবাতে যে উপাদানগুলি প্রদান করেন তার উপর আমরা কোনও বুদ্ধিবৃত্তিক সম্পত্তির অধিকার দাবি করি না। আপনার আপলোড করা সমস্ত উপাদান আপনারই থাকে। আপনি আপনার অ্যাকাউন্ট মুছে যে কোনো সময় আপনার eBitans অনলাইন স্টোর সরাতে পারেন।`}
          </p>
          <p>
            {!bangla
              ? `2. By uploading Store Content, you agree: (a) to allow other internet users to view your Store Content; (b) to allow eBitans to display and store your Store Content; and (c) that eBitans can, at any time, review all the Store Content submitted by you to its Service.
                    `
              : `২. স্টোরের সামগ্রী আপলোড করার মাধ্যমে, আপনি সম্মত হন: (ক) অন্যান্য ইন্টারনেট ব্যবহারকারীদের আপনার স্টোরের সামগ্রী দেখার অনুমতি দেওয়ার জন্য; (খ) eBitans কে আপনার স্টোরের বিষয়বস্তু প্রদর্শন ও সংরক্ষণ করার অনুমতি দেওয়া; এবং (c) যে eBitans, যে কোনো সময়ে, আপনার দ্বারা তার পরিষেবাতে জমা দেওয়া সমস্ত স্টোর সামগ্রী পর্যালোচনা করতে পারে।
                    `}
          </p>
          <p>
            {!bangla
              ? `3. You retain ownership over all Store Content that you upload to an eBitans store; however, by making your store public, you agree to allow others to view your Store Content. You are responsible for compliance of Store Content with any applicable laws or regulations.
                    `
              : `৩. আপনি একটি eBitans স্টোরে আপলোড করা সমস্ত স্টোর সামগ্রীর উপর মালিকানা বজায় রাখেন; যাইহোক, আপনার স্টোরকে সর্বজনীন করে, আপনি অন্যদের আপনার স্টোরের সামগ্রী দেখার অনুমতি দিতে সম্মত হন। আপনি যেকোন প্রযোজ্য আইন বা প্রবিধানের সাথে স্টোর সামগ্রীর সম্মতির জন্য দায়ী।`}
          </p>
          <p>
            {!bangla
              ? `4. We will not disclose your confidential information to third parties, except as required in the course of providing our services. Confidential information includes any materials or information provided by you to us which is not publicly known. Confidential information does not include information that: (a) was in the public domain at the time we received it; (b) comes into the public domain after we received it through no fault of ours; (c) we received from someone other than you without breach of our or their confidentiality obligations; or (d) we are required by law to disclose.
                    `
              : `৪. আমাদের পরিষেবা প্রদানের সময় প্রয়োজন ছাড়া আমরা তৃতীয় পক্ষের কাছে আপনার গোপনীয় তথ্য প্রকাশ করব না। গোপনীয় তথ্যের মধ্যে আপনার দ্বারা আমাদের দেওয়া কোনো উপকরণ বা তথ্য অন্তর্ভুক্ত যা সর্বজনীনভাবে পরিচিত নয়। গোপনীয় তথ্য এমন তথ্য অন্তর্ভুক্ত করে না যেগুলি: (ক) আমরা যখন এটি পেয়েছি তখন সর্বজনীন ডোমেনে ছিল; (খ) আমাদের কোন দোষ ছাড়াই আমরা এটি পাওয়ার পরে পাবলিক ডোমেনে আসে; (c) আমরা আমাদের বা তাদের গোপনীয়তার বাধ্যবাধকতা লঙ্ঘন ছাড়াই আপনি ছাড়া অন্য কারো কাছ থেকে পেয়েছি; বা (d) আমাদের আইন দ্বারা প্রকাশ করা প্রয়োজন।`}
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold py-6">
            {!bangla ? "Reserved Rights" : "সংরক্ষিত অধিকার"}
          </h3>
          <p>
            {!bangla
              ? "eBitans reserves the following rights:"
              : "eBitans নিম্নলিখিত অধিকার সংরক্ষণ করে:"}
          </p>
          <p>
            {!bangla
              ? `1. To suspend or terminate the account of anyone who violates this Agreement
                    `
              : `১. যে কেউ এই চুক্তি লঙ্ঘন করে তার অ্যাকাউন্ট স্থগিত বা সমাপ্ত করতে`}
          </p>
          <p>
            {!bangla
              ? `2. To change or alter the Website, the form and nature of the Website, or any Services provided through the Website, including requiring payment for some or all uses of the Website, at any time.
                    `
              : `২. ওয়েবসাইট পরিবর্তন বা পরিবর্তন করতে, ওয়েবসাইটের ফর্ম এবং প্রকৃতি, বা ওয়েবসাইটের মাধ্যমে প্রদত্ত যে কোনও পরিষেবা, যে কোনও সময় ওয়েবসাইটের কিছু বা সমস্ত ব্যবহারের জন্য অর্থপ্রদানের প্রয়োজন।`}
          </p>
          <p>
            {!bangla
              ? `3. To review, modify, filter, disable, delete, and remove any and all content and information from the Site.
                    `
              : `৩. পর্যালোচনা, সংশোধন, ফিল্টার, নিষ্ক্রিয়, মুছে ফেলা, এবং সাইট থেকে যেকোনো এবং সমস্ত সামগ্রী এবং তথ্য অপসারণ করতে।
                    `}
          </p>
          <p>
            {!bangla
              ? `4. To update and download automatically any software provided on or through the Site.
                    `
              : `৪. সাইটে বা এর মাধ্যমে প্রদত্ত যেকোন সফ্টওয়্যার স্বয়ংক্রিয়ভাবে আপডেট এবং ডাউনলোড করতে।`}
          </p>
          <p>
            {!bangla
              ? `5. To cooperate with any law enforcement, court, or government investigation or order or third party requesting or directing that We disclose information or content or information that You provide, or if We decide that such disclosure is in Our or its customer's best interests.
                    `
              : `৫. যেকোন আইন প্রয়োগকারী, আদালত, বা সরকারী তদন্ত বা আদেশ বা তৃতীয় পক্ষের অনুরোধ বা নির্দেশের সাথে সহযোগিতা করা যে আমরা তথ্য বা বিষয়বস্তু বা তথ্য প্রকাশ করি যা আপনি প্রদান করি, অথবা যদি আমরা সিদ্ধান্ত নিই যে এই ধরনের প্রকাশ আমাদের বা এর গ্রাহকের সর্বোত্তম স্বার্থে।`}
          </p>
          <p>
            {!bangla
              ? `6. To display advertising and promotions, which may be targeted to certain users or sections of the Site based upon queries made or preferences indicated, and may not be identified as paid advertisements or promotions.
                    `
              : `৬. বিজ্ঞাপন এবং প্রচারগুলি প্রদর্শন করতে, যা নির্দিষ্ট ব্যবহারকারীদের বা সাইটের অংশগুলিকে লক্ষ্য করা যেতে পারে করা প্রশ্ন বা পছন্দের উপর ভিত্তি করে নির্দেশিত, এবং অর্থপ্রদানের বিজ্ঞাপন বা প্রচার হিসাবে চিহ্নিত নাও হতে পারে৷`}
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold py-6">
            {!bangla
              ? "Governing Law & Jurisdiction"
              : "গভর্নিং আইন ও এখতিয়ার"}
          </h3>
          <p>
            {!bangla
              ? "This Agreement and its interpretation hereunder and all suits and special proceedings hereunder shall be construed in accordance with the applicable Bangladesh Government laws and any dispute arising shall be governed by the same."
              : "এই চুক্তি এবং এর ব্যাখ্যা এখানে এবং এর অধীনে সমস্ত মামলা এবং বিশেষ কার্যধারা প্রযোজ্য বাংলাদেশ সরকারের আইন অনুসারে নির্ণয় করা হবে এবং উদ্ভূত যেকোন বিরোধ একই দ্বারা পরিচালিত হবে।"}
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold py-6">
            {!bangla ? "Governing Law & Jurisdiction" : "কিছু অন্যান্য পয়েন্ট"}
          </h3>
          <p>
            {!bangla
              ? `1. We will provide You access to those Services to which You subscribe or that You purchase through Your Account (the “Active Plan”).
                    `
              : `১. আমরা আপনাকে সেই পরিষেবাগুলিতে অ্যাক্সেস দেব যা আপনি সাবস্ক্রাইব করেন বা যেগুলি আপনি আপনার অ্যাকাউন্টের মাধ্যমে ক্রয় করেন ("অ্যাকটিভ প্ল্যান")।`}
          </p>
          <p>
            {!bangla
              ? `2. Some of Our Services are offered through packages. The fees for each package, and their applicable terms and limits, are described on Our website. Certain packages may have limitations, and We reserve the right to charge an overage fee for exceeding such limitations at the current list prices or to automatically move You to a plan with limits that exceed Your usage.
                    `
              : `২. আমাদের কিছু পরিষেবা প্যাকেজের মাধ্যমে দেওয়া হয়। প্রতিটি প্যাকেজের জন্য ফি, এবং তাদের প্রযোজ্য শর্তাবলী এবং সীমা, আমাদের ওয়েবসাইটে বর্ণিত আছে। কিছু প্যাকেজের সীমাবদ্ধতা থাকতে পারে, এবং আমরা বর্তমান তালিকার দামে এই ধরনের সীমাবদ্ধতা অতিক্রম করার জন্য বা আপনার ব্যবহারের সীমা অতিক্রম করে এমন একটি পরিকল্পনায় স্বয়ংক্রিয়ভাবে আপনাকে স্থানান্তর করার জন্য অতিরিক্ত ফি চার্জ করার অধিকার সংরক্ষণ করি।`}
          </p>
          <p>
            {!bangla
              ? `3. We reserve the right to quarantine one or more of Your Websites, throttle traffic or invoke other necessary techniques to protect Our other customers. Any such move will last as long as We deem necessary to protect Our other customers, and will not include any additional support. If any of Your Sites is the target of a DDoS or other attack, You consent to Us performing mitigation procedures with or without notice to You and without liability for any delay, disruption, or interruption of service. These techniques will remain in place until Your Site experiences at least 48 hours of continuous non-malicious, “normal” traffic.
                    `
              : `৩. আমরা আপনার এক বা একাধিক ওয়েবসাইটকে কোয়ারেন্টাইন করার, ট্র্যাফিক থ্রোটল করার বা আমাদের অন্যান্য গ্রাহকদের সুরক্ষার জন্য অন্যান্য প্রয়োজনীয় কৌশল প্রয়োগ করার অধিকার সংরক্ষণ করি। আমাদের অন্যান্য গ্রাহকদের সুরক্ষার জন্য আমরা যতক্ষণ পর্যন্ত প্রয়োজন মনে করি ততক্ষণ পর্যন্ত এই ধরনের যেকোনো পদক্ষেপ স্থায়ী হবে এবং এতে কোনো অতিরিক্ত সমর্থন অন্তর্ভুক্ত থাকবে না। যদি আপনার কোনো সাইট একটি DDoS বা অন্য আক্রমণের লক্ষ্য হয়ে থাকে, তাহলে আপনি আমাদেরকে প্রশমন প্রক্রিয়া সম্পাদন করতে সম্মতি দিচ্ছেন আপনাকে বিজ্ঞপ্তি দিয়ে বা ছাড়াই এবং কোনো প্রকার বিলম্ব, ব্যাঘাত বা পরিষেবার বাধার জন্য দায় ছাড়াই। আপনার সাইটটি কমপক্ষে 48 ঘন্টা একটানা অ-দূষিত, "স্বাভাবিক" ট্র্যাফিকের অভিজ্ঞতা না হওয়া পর্যন্ত এই কৌশলগুলি থাকবে।`}
          </p>
          <p>
            {!bangla
              ? `4. We may suspend the Purchased Services to You with or without notice and without liability if: (a) We reasonably believe that You are using the Services in violation of the Agreement; (b) You don’t cooperate with Our reasonable investigation of any suspected violation of the Agreement; (c) there is an attack on Your Sites or Your Sites are accessed or manipulated by a third party without Your consent, (d) We are required by law, or a regulatory or government body, to suspend Your Services, or (e) there is another event for which We reasonably believe that the suspension of Services is necessary to protect Our other customers. We will use commercially reasonable efforts to give You advance notice of any such suspension unless We determine that a suspension on shorter notice or without notice is necessary to protect Us or Our other customers from imminent risk.
                    `
              : `৪. আমরা আপনার কাছে ক্রয়কৃত পরিষেবাগুলি নোটিশ সহ বা ছাড়াই এবং দায় ছাড়াই স্থগিত করতে পারি যদি: (ক) আমরা যুক্তিসঙ্গতভাবে বিশ্বাস করি যে আপনি চুক্তি লঙ্ঘন করে পরিষেবাগুলি ব্যবহার করছেন; (b) আপনি চুক্তির কোনো সন্দেহভাজন লঙ্ঘনের বিষয়ে আমাদের যুক্তিসঙ্গত তদন্তে সহযোগিতা করবেন না; (c) আপনার সাইটগুলিতে আক্রমণ হয়েছে বা আপনার সম্মতি ছাড়াই তৃতীয় পক্ষের দ্বারা আপনার সাইটগুলি অ্যাক্সেস বা ম্যানিপুলেট করা হয়েছে, (d) আপনার পরিষেবাগুলি স্থগিত করার জন্য আমাদের আইন, বা একটি নিয়ন্ত্রক বা সরকারী সংস্থার দ্বারা প্রয়োজন, বা (ঙ) আরেকটি ইভেন্ট রয়েছে যার জন্য আমরা যুক্তিসঙ্গতভাবে বিশ্বাস করি যে আমাদের অন্যান্য গ্রাহকদের সুরক্ষার জন্য পরিষেবা স্থগিত করা প্রয়োজন। আমরা বাণিজ্যিকভাবে যুক্তিসঙ্গত প্রচেষ্টা ব্যবহার করব আপনাকে এই ধরনের স্থগিতাদেশের অগ্রিম নোটিশ দেওয়ার জন্য যদি না আমরা নির্ধারণ করি যে আমাদের বা আমাদের অন্যান্য গ্রাহকদের আসন্ন ঝুঁকি থেকে রক্ষা করার জন্য সংক্ষিপ্ত নোটিশে বা বিনা নোটিশে সাসপেনশন প্রয়োজনীয়।
                    `}
          </p>
          <p>
            {!bangla
              ? `5. Our Services allow You and Your End Users to upload, post, transmit, publish, share, store, or manage content, including, data, graphics, links, photos, music, sound, messages, videos, and other materials (altogether, “Your Content”). You are solely responsible for any and all of Your Content. You represent and warrant that (i) You have all necessary rights to distribute Your Content via Our Services and (ii) Your Content does not violate the rights of any third party. You hereby grant Us a worldwide, royalty-free, non-exclusive license to host and use Your Content in order to provide the Services to You. You are responsible for undertaking necessary measures to ensure the security, confidentiality, and integrity of all Your Content transmitted through or stored on Our servers. You are responsible for any of Your Content that may be lost or unrecoverable through Your use of the Services.
                    `
              : `৫. আমাদের পরিষেবাগুলি আপনাকে এবং আপনার শেষ ব্যবহারকারীদের ডেটা, গ্রাফিক্স, লিঙ্ক, ফটো, সঙ্গীত, শব্দ, বার্তা, ভিডিও এবং অন্যান্য উপকরণগুলি (সম্পূর্ণভাবে, " আপনার বিষয়বস্তু")। আপনি যে কোনো এবং আপনার সমস্ত সামগ্রীর জন্য সম্পূর্ণরূপে দায়ী৷ আপনি প্রতিনিধিত্ব করেন এবং ওয়ারেন্টি দেন যে (i) আমাদের পরিষেবাগুলির মাধ্যমে আপনার সামগ্রী বিতরণ করার জন্য আপনার কাছে সমস্ত প্রয়োজনীয় অধিকার রয়েছে এবং (ii) আপনার সামগ্রী কোনও তৃতীয় পক্ষের অধিকার লঙ্ঘন করে না। আপনি এতদ্বারা আমাদের একটি বিশ্বব্যাপী, রয়্যালটি-মুক্ত, অ-এক্সক্লুসিভ লাইসেন্স প্রদান করছেন যাতে আপনাকে পরিষেবাগুলি প্রদান করার জন্য আপনার সামগ্রী হোস্ট করা এবং ব্যবহার করা যায়৷ আমাদের সার্ভারের মাধ্যমে প্রেরিত বা সঞ্চিত আপনার সমস্ত সামগ্রীর নিরাপত্তা, গোপনীয়তা এবং অখণ্ডতা নিশ্চিত করার জন্য প্রয়োজনীয় ব্যবস্থা গ্রহণের জন্য আপনি দায়ী৷ আপনার পরিষেবাগুলির ব্যবহারের মাধ্যমে হারিয়ে যাওয়া বা পুনরুদ্ধারযোগ্য হতে পারে এমন কোনও সামগ্রীর জন্য আপনি দায়ী৷`}
          </p>
          <p>
            {!bangla
              ? `6. Our servers are not an archive and We shall have no liability to You or any other person for the loss, damage, or destruction of any of Your Sites or Your Content. You are solely responsible for the backup of Your Sites and Your Content. You are encouraged to archive Your Content regularly and frequently.
                    `
              : `৬. আমাদের সার্ভারগুলি একটি সংরক্ষণাগার নয় এবং আপনার সাইট বা আপনার সামগ্রীর ক্ষতি, ক্ষতি বা ধ্বংসের জন্য আপনার বা অন্য কোনও ব্যক্তির কাছে আমাদের কোনও দায় থাকবে না। আপনি আপনার সাইট এবং আপনার বিষয়বস্তুর ব্যাকআপের জন্য সম্পূর্ণরূপে দায়ী৷ আপনি নিয়মিত এবং ঘন ঘন আপনার বিষয়বস্তু আর্কাইভ করতে উত্সাহিত করা হয়.`}
          </p>
          <p>
            {!bangla
              ? `7. eBitans have the full rights to use, edit, modify, and delete your content.
                    `
              : `৭. আপনার সামগ্রী ব্যবহার, সম্পাদনা, পরিবর্তন এবং মুছে ফেলার সম্পূর্ণ অধিকার eBitans-এর রয়েছে৷`}
          </p>
          <p>
            {!bangla
              ? `8. Third-party services can be connected with us through the plugin system. We are not liable for services given by 3rd party companies.
                    `
              : `৮. প্লাগইন সিস্টেমের মাধ্যমে অনেক থার্ড-পার্টি সার্ভিস আমাদের সাথে যুক্ত হতে পারে। আমরা তৃতীয় পক্ষের কোম্পানি দ্বারা প্রদত্ত পরিষেবার জন্য দায়ী নই।`}
          </p>
          <p>
            {!bangla
              ? `9. eBitans has the full right to provide required data to the Government or security authority if they ask for it.
                    `
              : `৯. eBitans এর কাছে সরকার বা নিরাপত্তা কর্তৃপক্ষের কাছে প্রয়োজনীয় তথ্য সরবরাহ করার সম্পূর্ণ অধিকার রয়েছে যদি তারা এটি চায়।`}
          </p>
        </div>

        <h3 className="text-3xl font-bold pt-8 pb-4">
          {!bangla
            ? `Changes to This Terms and Conditions`
            : `এই শর্তাবলী পরিবর্তন`}
        </h3>
        <p>
          {!bangla
            ? `We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.
                These terms and conditions are effective as of 06 July 2022.`
            : `আমরা সময়ে সময়ে আমাদের নিয়ম ও শর্তাবলী আপডেট করতে পারি। সুতরাং, যেকোনো পরিবর্তনের জন্য আপনাকে পর্যায়ক্রমে এই পৃষ্ঠাটি পর্যালোচনা করার পরামর্শ দেওয়া হচ্ছে। আমরা এই পৃষ্ঠায় নতুন নিয়ম ও শর্তাবলী পোস্ট করে কোনো পরিবর্তন সম্পর্কে আপনাকে অবহিত করব।
                এই শর্তাবলী ০৬ জুলাই ২০২২ থেকে কার্যকর হবে।`}
        </p>

        <h3 className="text-3xl font-bold pt-8 pb-4">
          {!bangla ? `Contact Us` : `যোগাযোগ করুন`}
        </h3>
        <p>
          {!bangla
            ? `If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at info@ebitans.com .
                    `
            : `আমাদের নিয়ম ও শর্তাবলী সম্পর্কে আপনার কোন প্রশ্ন বা পরামর্শ থাকলে, 'info@ebitans.com' এ আমাদের সাথে যোগাযোগ করতে দ্বিধা করবেন না।`}
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
