import Image from "next/image";
import banner from "@/assets/images/webBanner/ebitans - eCommerce website builder platform - Theme.webp";
import styles from "@/components/home/home.module.css";
import { Suspense } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { fetchThemeData } from "@/helper/api";
import { themeImg } from "@/constants/imageUrl";
import Loading from "@/app/[locale]/loading";
import Rate from "@/lib/Rate";
import Registration from "@/components/pricing/Registration";

export const metadata = {
  title: "Themes",
  description:
    "No coding knowledge is required! Build a beautiful and user-friendly online store ",
};

const AllTheme = async ({ params: { locale } }) => {
  const bangla = locale !== "en";
  const data = (await fetchThemeData()) ?? [];

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
          {bangla ? "eBitans সম্পর্কে কিছু কথা" : "THE ULTIMATE SOLUTION"}
        </h1>
        <h1
          className={`  ${styles.wordSpacingOne} ${styles.archivo} mt-9 font-light   absolute z-[1] text-gray-200 md:font-bold md:tracking-[15px] tracking-widest  text-2xl lg:text-6xl`}
        >
          {bangla ? "টার্মস এবং কন্ডিশনস" : "With Unlimited Themes"}
        </h1>
      </div>

      <div className="container px-5 lg:px-10 my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  sm:gap-x-10 sm:gap-y-10 gap-4">
        <Suspense
          fallback={
            <div>
              <Loading />
            </div>
          }
        >
          {data?.map((item) => (
            <Template key={item.id} item={item} />
          ))}
        </Suspense>
      </div>
      <div className="container px-5 lg:px-10">
        <Registration />
      </div>
    </div>
  );
};

export default AllTheme;

const Template = ({ item }) => {
  return (
    <>
      <div className="shadow-md rounded-md p-2 bg-gray-100 border-[2px] border-black">
        <div className="relative border-1 group bg-slate-900 bg-blend-multiply portfoliocard">
          <a href={item?.liveurl} target="_blank" rel="noopener noreferrer">
            <div className="w-full h-full pb-2 bg-gray-50">
              <Image
                src={themeImg + item?.feature_image}
                alt="themeImage"
                unoptimized={true}
                width={1920}
                height={1080}
                className="rounded-t h-auto w-full group-hover:bg-blend-darken group-hover:opacity-10 transition duration-150 ease-out group-hover:ease-in"
              />
              <div className="absolute inset-0 text-sm group-hover:flex justify-center items-center hidden lg:cursor-pointer">
                <h2 className=" text-black font-semibold hover:pr-4 pr-0 duration-500 hover:tracking-widest">
                  View Demo
                </h2>
                <FaArrowRightLong />
              </div>
            </div>
          </a>
        </div>

        <div>
          <a href={item?.liveurl} target="_blank" rel="noopener noreferrer">
            <h1 className=" bg-gray-100 mt-1 mb-[1px] px-2 sm:text-xl text-lg font-bold text-black hover:text-[#f1593a] lg:cursor-pointer">
              {item.name}
            </h1>
          </a>
          <h2 className=" bg-gray-100 mb-2 px-2 text-xs font-bold text-black">
            {" "}
            Category: <span className="font-normal">{item.category} </span>
          </h2>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <h1 className=" bg-gray-100 mt-1 mb-1 px-2 sm:text-xl text-lg font-bold text-[#f1593a]">
                {item?.is_premium === "Paid" ? "BDT:" : "FREE"}{" "}
                {item.price === 0 ? "" : item.price}{" "}
              </h1>

              <div className="flex items-center px-2">
                <Rate rating={item?.review} />
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  ({item.reviewer})
                </p>
              </div>

              <h2 className=" bg-gray-100 mt-1 mb-2 px-2 text-xs font-normal text-gray-600 hover:text-orange-500 lg:cursor-pointer">
                {" "}
                {item.downlad} Downloded{" "}
              </h2>
            </div>
            <div className="flex items-end justify-end pr-2 pb-2">
              <a
                href={item?.liveurl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fff] text-[#f1593a] font-semibold text-center rounded-md py-2 drop-shadow-lg shadow-md hover:text-[#fff] border-[#f1593a] hover:border-[#f1593a] hover:bg-[#f1593a] border-2 outline-0 duration-500 px-4 text-nowrap"
              >
                View Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
