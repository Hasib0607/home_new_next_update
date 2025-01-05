import Image from "next/image";
import styles from "./home.module.css";
import images from "@/lib/images";
import Link from "next/link";

const Services = ({ locale }) => {
  const bangla = locale !== "en";
  return (
    <section>
      <div className="container px-5 lg:px-10">
        <div className="relative h-20 ">
          <div className="absolute bg-gradient-to-t from-[#F9F7F6] top-0 left-0 w-full h-full"></div>
        </div>
      </div>
      <div className="bg-[#F9F7F6] relative z-[1]">
        <h2 className={`${styles.power} ${styles.headerOne} text-center`}>
          TO POWER UP YOU
        </h2>
        <div className="absolute bg-gradient-to-t from-[#F9F7F6] top-0 left-0 w-full h-full"></div>
      </div>
      <div className="xl:-mt-24 lg:-mt-10 -mt-6 relative z-[1] container px-5 lg:px-10">
        <p
          className={`${styles.archivo} ${styles.paragraph} tracking-[5px] lg:tracking-[10px]`}
        >
          {bangla ? "আমরা আপনাকে সেবা দেওয়ার জন্য তৈরি করি" : "WE BUILD TO SERVE YOU"}
        </p>
        <h2 className={`${styles.archivo} ${styles.headerTwo}`}>
          {bangla ? "আমাদের সেবাসমূহ" : "Our Services"}
        </h2>
      </div>
      <div className="container px-5 lg:px-10">
        <div className="bg-[#0E144B] my-10 relative z-[1] grid grid-cols-1 lg:grid-cols-2 rounded-lg  mx-auto p-5">
          <div className="text-white relative w-full h-full">
            <Image
              src={images?.Layer_1}
              alt="ebitans image"
              className="float-right mt-[176px] lg:mt-[163px] xl:mt-[142px] 2xl:mt-[170px] h-[495px] lg:h-[522px] xl:h-[573px] 2xl:h-[535px] w-auto hidden lg:block"
            />
            <div className="space-y-8 lg:absolute top-10 max-w-[400px] p-5 lg:p-0">
              <h2
                className={`${styles.archivo} ${styles.headerTwo} leading-10`}
              >
                {bangla ? (
                  <>
                    সেরা ইকমার্স <br className="hidden lg:block" />
                    ওয়েবসাইট নির্মাণ প্ল্যাটফর্ম
                  </>
                ) : (
                  <>
                    Best eCommerce <br className="hidden lg:block" />
                    Website Builder Platform
                  </>
                )}
              </h2>
              <p>
                {bangla ? (
                  <>
                    eBitans-এর মাধ্যমে আপনার নিজস্ব ইকমার্স ওয়েবসাইট তৈরি করুন।
                    আমাদের সেরা ইকমার্স ওয়েবসাইট নির্মাণ প্ল্যাটফর্মটি আপনাকে
                    আপনার ব্যবসা শুরু, পরিচালনা এবং বৃদ্ধি করার জন্য প্রয়োজনীয়
                    সকল ফিচার প্রদান করে। eBitans শুধুমাত্র ছোট এবং মাঝারি
                    ব্যবসার জন্য একটি ওয়েবসাইট নির্মাণ প্ল্যাটফর্ম নয়—আমরা{" "}
                    <a
                      href="/pricing"
                      className="text-[#f1593a] underline hover:text-[#f1463a]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      আরও প্রদান করি
                    </a>{" "}
                    নির্ভরযোগ্য ওয়েবসাইট হোস্টিং, ডোমেন নাম নিবন্ধন,{" "}
                    <a
                      href="/solutions/all-theme"
                      className="text-[#f1593a] underline hover:text-[#f1463a]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ফ্রি থিম
                    </a>
                    , ডিজাইন লেআউট, মোবাইল অ্যাপস, ইমেজ কাস্টমাইজেশন এবং আরও
                    অনেক কিছু।
                  </>
                ) : (
                  <>
                    Create your own eCommerce website with eBitans. Our best
                    eCommerce website builder platform provides all the features
                    you need to start, manage, and grow your business. eBitans
                    is not just a website builder for small and medium
                    businesses—we{" "}
                    <a
                      href="/pricing"
                      className="text-[#f1593a] underline hover:text-[#f1463a]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      also offer
                    </a>{" "}
                    reliable website hosting, domain name registration,{" "}
                    <a
                      href="/solutions/all-theme"
                      className="text-[#f1593a] underline hover:text-[#f1463a]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      free themes
                    </a>
                    , design layouts, mobile apps, image customization, and much
                    more.
                  </>
                )}
              </p>

              <Link href="/services/ecommerce-website">
                <button className="border mt-8 px-5 py-2.5 text-sm rounded">
                  {bangla ? "বিস্তারিত" : "Details"}
                </button>
              </Link>
            </div>
            <Image
              src={images?.website_mobile}
              alt="ebitans image"
              className="mx-auto p-5 lg:hidden"
            />
            <div className="hidden lg:block">
              <Image
                src={images?.website_element}
                alt="ebitans image"
                className="absolute left-0 bottom-0"
              />
              <Image
                src={images?.line_white}
                alt="ebitans image"
                className="absolute left-0 bottom-72"
              />
              <Image
                src={images?.triangle_white}
                alt="ebitans image"
                className="absolute left-0 bottom-60"
              />
              <Image
                src={images?.line_white}
                alt="ebitans image"
                className="absolute right-72 bottom-0"
              />
              <Image
                src={images?.triangle_white}
                alt="ebitans image"
                className="absolute right-16 bottom-0"
              />
              <Image
                src={images?.web_white}
                alt="ebitans image"
                className="absolute right-48 bottom-0"
              />
              <Image
                src={images?.website_mobile}
                alt="ebitans image"
                className="mx-auto p-5 lg:hidden"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-0  p-2 md:p-0  w-full h-full py-5">
            <div className="bg-[#FF7069] w-full min-h-[407px] rounded-lg md:rounded-none md:rounded-tl-lg relative">
              <Image
                src={images?.Layer_2}
                alt="ebitans image"
                className="min-w-full h-auto hidden lg:block mt-[87px] lg:mt-[68px] xl:mt-[17px]"
              />
              <Image
                src={images?.point}
                alt="ebitans image"
                className="h-[250px] w-auto mx-auto lg:hidden p-5"
              />
              <div className="lg:hidden">
                <Image
                  src={images?.line}
                  alt="ebitans image"
                  className="absolute right-16 top-10"
                />
                <Image
                  src={images?.triangle}
                  alt="ebitans image"
                  className="absolute right-16 bottom-36"
                />
              </div>
              <div className="flex justify-between items-end gap-2 absolute bottom-5 right-5 left-5">
                <h3
                  className={`${styles.archivo} text-base font-bold md:text-2xl`}
                >
                  Point Of Sale (POS)
                </h3>
                <Image src={images?.arrowUp} alt="ebitans image" className="" />
              </div>
            </div>
            <div className="bg-[#FFD390] relative min-h-[407px] w-full h-full flex rounded-lg md:rounded-none md:rounded-tr-lg lg:items-end">
              <Image
                src={images?.Layer_3}
                alt="ebitans image"
                className="hidden lg:block pr-5 2xl:-mb-[35px]"
              />
              <Image
                src={images?.inventory}
                alt="ebitans image"
                className="h-[250px] lg:hidden p-5 mx-auto"
              />
              <div className="flex justify-between items-end gap-2 absolute bottom-5 right-5 left-5">
                <h3
                  className={`${styles.archivo} text-base font-bold md:text-2xl`}
                >
                  Inventory Management Solution
                </h3>
                <Image src={images?.arrowUp} alt="ebitans image" className="" />
              </div>
            </div>
            <div className="bg-[#B4E5F2] min-h-[407px] w-full h-full rounded-lg md:rounded-none md:rounded-bl-lg relative">
              <Image
                src={images?.Layer_4}
                alt="ebitans image"
                className="min-w-full h-auto 2xl:h-[255px] float-right pt-[25px] lg:pt-[27px] xl:pt-[6px] hidden lg:block"
              />
              <Image
                src={images?.social_media}
                alt="ebitans image"
                className="h-[250px] lg:hidden p-5 mx-auto"
              />
              <Link href="/social-media-marketing">
                <div className="flex justify-between items-end gap-2 absolute bottom-5 right-5 left-5">
                  <h3
                    className={`${styles.archivo} text-base font-bold md:text-2xl`}
                  >
                    Social Media Marketing
                  </h3>
                  <Image
                    src={images?.arrowUp}
                    alt="ebitans image"
                    className=""
                  />
                </div>
              </Link>
            </div>
            <div className="bg-[#4F92D0] min-h-[407px] w-full h-full rounded-lg md:rounded-none md:rounded-br-lg relative">
              <Image
                src={images?.Layer_5}
                alt="ebitans image"
                className="hidden lg:block pr-5"
              />
              <Image
                src={images?.mobile_app}
                alt="ebitans image"
                className="h-[250px] lg:hidden p-5 mx-auto"
              />
              <div className="flex justify-between items-end gap-2 absolute bottom-5 right-5 left-5">
                <h3
                  className={`${styles.archivo} text-base font-bold md:text-2xl`}
                >
                  E-commerce Mobile App
                </h3>
                <Image src={images?.arrowUp} alt="ebitans image" className="" />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
