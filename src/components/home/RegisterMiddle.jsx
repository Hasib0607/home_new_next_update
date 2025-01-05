"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import banner from "@/assets/images/Phn.webp";
import { useForm } from "react-hook-form";
import { onSubmit } from "@/lib/registration";
import styles from "@/components/home/home.module.css";
import images from "@/lib/images";
import whiteWand from "@/assets/images/icons/white-wand.svg";
import HeroRegister from "./HeroRegister";

const RegisterMiddle = ({ locale }) => {
  const bangla = locale !== "en";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleRegister = (data) => {
    onSubmit(data, setLoading, router);
  };
  return (
    <div className="container px-5 lg:px-10">
      <div className="bg-white relative z-[4] mb-10 lg:mb-20 mt-10 lg:mt-40 rounded-lg">
        <div>
          <Image
            src={images.registerBanner}
            alt=""
            className="absolute left-0 top-0 w-full h-full z-[1]"
          />
        </div>
        <div className="relative z-[2] flex flex-col gap-y-10 lg:flex-row justify-around lg:px-10 lg:py-8 py-5">
          <div className=" lg:basis-3/4 text-center lg:text-left">
            <div className="">
              <h2 className={`${styles.archivo} ${styles.headerTwo}`}>
                {bangla ? "আজই বিক্রি শুরু করুন" : "Start Selling Today"}
              </h2>
              <h4
                className={`${styles.archivo} text-[12px] lg:text-[22px] font-normal lg:font-medium`}
              >
                {bangla
                  ? "এখনই আপনার ই-কমার্স ওয়েবসাইট তৈরি করুন। ক্রেডিট কার্ডের প্রয়োজন নেই।"
                  : "Build your e-commerce website now. No credit card needed."}
              </h4>
            </div>
            <div className="flex gap-2 w-full mt-10 lg:mt-[70px] px-4 lg:px-0">
              <HeroRegister />
            </div>
          </div>
          <div className="relative lg:basis-1/4 mx-auto hidden lg:block">
            <Image
              src={banner}
              alt="ebitans image"
              className="lg:absolute left-0 -bottom-8 z-[1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterMiddle;
