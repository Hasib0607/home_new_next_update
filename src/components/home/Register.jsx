"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import styles from "./home.module.css";
import images from "@/lib/images";
import { onSubmit } from "@/lib/registration";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeroRegister from "./HeroRegister";

const Register = ({locale}) => {
  const bangla = locale !== "en";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const router = useRouter();

  const handleRegister = (data) => {
    onSubmit(data, setLoading, router);
  };

  return (
    <section className="lg:py-[80px] py-10 relative z-[1] bg-[#F9F7F6]">
      {/* <div className='absolute bg-gradient-to-t from-[#F9F7F6] top-0 left-0 w-full h-full'></div> */}
      <div className="relative bg-[#F9F7F6]">
        <h2 className={`${styles.dream} ${styles.headerOne} text-center `}>
          LET'S TRY NOW
        </h2>
        <div className="absolute bg-gradient-to-t from-[#F9F7F6] top-0 left-0 w-full h-full"></div>
      </div>
      <div className="relative z-[1] container px-5 lg:px-10 rounded-[10px] xl:-mt-24 lg:-mt-10 -mt-6">
        <div className="text-center">
          {/* <p className={`${styles.archivo} ${styles.paragraph} tracking-[5px] lg:tracking-[10px] text-base uppercase`}>People who believe</p> */}
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
        <div className="lg:flex gap-1 lg:gap-10 w-full justify-center mt-12 register-bottom">
          <HeroRegister />
        </div>
      </div>
    </section>
  );
};

export default Register;
