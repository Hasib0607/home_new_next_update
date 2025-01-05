"use client";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import styles from "./home.module.css";
import images from "@/lib/images";
import { useEffect, useState } from "react";
import { baseUrl } from "@/constants/baseUrl";

const Theme = ({locale}) => {
  const bangla = locale !== "en";
  const [templates, setTemplates] = useState([]);
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/templates`);
        const data = await response.json();
        setTemplates(data.templates);
      } catch (error) {
        console.error("There was an error fetching the data", error);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 1024);
    }
  }, []);

  return (
    <section>
      <div
        className={`${styles.templateBgGradient} rounded-t-[16px] lg:rounded-t-[50px] relative z-[1]`}
      >
        <div className="container px-5 lg:px-10">
          <div className="flex justify-between items-center pb-10 pt-16">
            <div className="">
              <p
                className={`${styles.archivo} ${styles.paragraph} tracking-[5px] lg:tracking-[10px] uppercase`}
              >
                {bangla ? "আলটিমেট সল্যুশন" : "The Ultimate Solution"}
              </p>
              <h2 className={`${styles.archivo} ${styles.headerTwo}`}>
                {bangla ? "আনলিমিটেড থিমসের সাথে" : "With Unlimited Themes"}
              </h2>
            </div>
            <Link href="/solutions/all-theme">
              <div className="group relative h-[27px] lg:h-[45px] w-[75px] lg:w-[123px] border-[1.5px] border-[#f1593a] rounded flex justify-center items-center gap-3 bg-white text-[#f1593a] ">
                <button className="relative z-[1] text-[10px] lg:text-base">
                  {bangla ? "আরো দেখুন" : "See More"}
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
        </div>
        <div>
          <Marquee
            pauseOnHover={true}
            speed={isMobile ? 30 : 60}
            gradient={false}
          >
            {templates?.slice(0, 10).map((item, index) => (
              <a
                href={item?.liveurl}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <div className="relative group">
                  <Image
                    src={
                      "https://admin.ebitans.com/assets/images/template/" +
                      item?.feature_image
                    }
                    width={500}
                    height={500}
                    alt="theme"
                    className="h-[108px] lg:h-[280px] w-[145px] lg:w-[380px] border-x-4 border-y-4 lg:border-y-0 lg:border-x-8 lg:border-t-8 border-[#E0D4D1] mx-2.5"
                  />
                  <div className="absolute z-[1] bg-black bg-opacity-60 top-0 left-0 h-full w-full text-sm group-hover:flex justify-center items-center hidden lg:cursor-pointer">
                    <p
                      className={`${styles.archivo} ${styles.paragraph} text-white font-semibold hover:pr-4 pr-2 duration-500 hover:tracking-widest`}
                    >
                      {bangla ? "ডেমো দেখুন" : "View Demo"}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </Marquee>
          <Marquee
            pauseOnHover={true}
            speed={isMobile ? 32 : 70}
            gradient={false}
            className="lg:mt-10 mt-3"
          >
            {templates?.slice(11, 20).map((item, index) => (
              <a
                href={item?.liveurl}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <div className="relative group">
                  <Image
                    src={
                      "https://admin.ebitans.com/assets/images/template/" +
                      item?.feature_image
                    }
                    width={500}
                    height={500}
                    alt="theme"
                    className="h-[108px] lg:h-[280px] w-[145px] lg:w-[380px] border-x-4 border-y-4 lg:border-y-0 lg:border-x-8 lg:border-t-8 border-[#E0D4D1] mx-2.5"
                  />
                  <div className="absolute z-[1] bg-black bg-opacity-60 top-0 left-0 h-full w-full text-sm group-hover:flex justify-center items-center hidden lg:cursor-pointer">
                    <p
                      className={`${styles.archivo} ${styles.paragraph} text-white font-semibold hover:pr-4 pr-2 duration-500 hover:tracking-widest`}
                    >
                      {bangla ? "ডেমো দেখুন" : "View Demo"}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Theme;
