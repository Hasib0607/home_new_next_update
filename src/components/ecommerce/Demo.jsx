"use client";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import styles from "../home/home.module.css";
import { useEffect, useState } from "react";
import { baseUrl } from "@/constants/baseUrl";
import LandingButton from "./LandingButton";

const Demo = ({ locale, scrollToRef }) => {
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

  const handleScroll = () => {
    if (scrollToRef?.current) {
      const topOffset = scrollToRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offset = -200;
  
      window.scrollTo({
        top: topOffset + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section>
      <div className={`${styles.templateBgGradient} relative z-[1]`}>
        <div className="">
          <div className="flex justify-center items-center pt-10 px-5">
            <div className="">
              <h1 className="text-2xl md:text-3xl font-bold text-center px-2 md:px-10 py-4 my-10 bg-[#f1593a] text-white rounded-md shadow-lg shadow-slate-600">
                আপনার পছন্দের ডেমো দেখুন
              </h1>
            </div>
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
          <div className="flex justify-center pb-28">
            <LandingButton
              label="ওয়েবসাইট নিন"
              onClick={handleScroll}
              className="mx-auto my-11"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
