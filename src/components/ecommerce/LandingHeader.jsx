"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/home/home.module.css";
import images from "@/lib/images";
import { BsFillTelephoneFill } from "react-icons/bs";
import Marquee from "react-fast-marquee";

const LandingHeader = () => {
  return (
    <>
      <header className="bg-white lg:h-[85px] h-[50px] flex items-center fixed w-full z-[10] shadow-lg">
        <div className="w-full flex justify-between items-center container px-5">
          <div>
            <Link href="/">
              <Image
                width={500}
                height={500}
                src={images?.darkLogo}
                alt="ebitansLogo"
                className="lg:h-12 h-7 w-auto"
              />
            </Link>
          </div>

          <Marquee speed={60} pauseOnHover={true}>
            <div className="flex gap-1 items-center justify-center font-bold md:text-3xl">
              <BsFillTelephoneFill />
              <a href="tel:01886515579" className="hover:underline">
                01886515579
              </a>
            </div>
          </Marquee>

          <div className="flex items-center gap-2">
            <a href="https://admin.ebitans.com/login">
              <button
                className={`group relative overflow-hidden rounded bg-[#F1593A] w-[50px] md:w-[73px] h-[25px] md:h-[37px] shadow`}
              >
                <div
                  className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}
                ></div>
                <span className={`${styles.archivo} relative text-white`}>
                  Login
                </span>
              </button>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default LandingHeader;
