"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import styles from "./home.module.css";
import { onSubmit } from "@/lib/registration";
import images from "@/lib/images";

const HeroRegister = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const router = useRouter();

  const handleRegister = (data) => {
    onSubmit(data, setLoading, router, reset);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="flex gap-2 w-full">
          <div className="w-full ">
            <input
              autoComplete=""
              placeholder="Enter Your Email or Phone"
              type="text"
              {...register("email_or_phone", {
                required: true,
              })}
              aria-invalid={errors.email_or_phone ? "true" : "false"}
              className={`w-full ${styles.archivo} ${
                errors?.email_or_phone?.type === "required"
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#a8a3a2] focus:border-[#D3CDCB]"
              } h-[40px] sm:h-[48px] drop-shadow-4xl text-xs lg:text-base border-[1.5px] placeholder:text-[#D3CDCB] focus:outline-none focus:ring-0 rounded-sm px-4`}
            />
            {errors?.email_or_phone?.type === "required" && (
              <span className="text-xs text-red-500 block">
                Email or Phone is required
              </span>
            )}
       
          </div>
          <div className="w-full lg:mr-20 relative">
            <input
              autoComplete="pass"
              placeholder="Enter Your Password"
              type={`${show ? "text" : "password"}`}
              {...register("password", { required: true })}
              className={`w-full ${
                styles.archivo
              } h-[40px] sm:h-[48px] drop-shadow-4xl text-xs lg:text-base placeholder:text-[#D3CDCB] border-[1.5px] ${
                errors?.password?.type === "required"
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#a8a3a2] focus:border-[#D3CDCB]"
              } focus:outline-none focus:ring-0 rounded-sm px-4`}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 z-[2] lg:cursor-pointer">
              {show ? (
                <BsEye onClick={() => setShow(!show)} />
              ) : (
                <BsEyeSlash onClick={() => setShow(!show)} />
              )}
            </div>
            {errors?.password?.type === "required" && (
              <span className="text-xs text-red-500 block">
                Password is required
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-start lg:-mt-5 mt-3 btn-register">
          {loading ? (
            <button
              className={`group relative h-12 w-48 overflow-hidden rounded-lg bg-[#F1593A] text-lg shadow `}
            >
              <div
                className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}
              ></div>
              <span className={`${styles.archivo} relative  text-white`}>
                Loading
              </span>
            </button>
          ) : (
            <>
              <button
                type="submit"
                className={`group relative h-12 w-60 overflow-hidden rounded-[3px] bg-[#F1593A] text-lg shadow `}
              >
                <div
                  className={`absolute inset-0 w-1 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}
                ></div>
                <span
                  className={`${styles.archivo} relative  text-white flex items-center justify-around `}
                >
                  <span>Registration Now</span>
                  <span>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34.6699 22.8598L35.1699 34.9298L30.5699 22.5898C32.3499 20.5498 34.5999 17.9698 35.1399 17.3498C35.4799 17.5498 35.8499 17.6998 36.2799 17.6998C37.5399 17.6998 38.5499 16.6798 38.5499 15.4298C38.5499 14.1798 37.5299 13.1598 36.2799 13.1598C35.0299 13.1598 34.0099 14.1798 34.0099 15.4298C34.0099 15.9198 34.1999 16.3598 34.4699 16.7298L30.0899 21.2798L25.4599 8.85982C25.2999 8.43982 24.9599 8.08982 24.5099 7.93982C23.6999 7.65982 22.8099 8.09982 22.5399 8.91982C22.5499 8.93982 11.7499 40.4798 11.7799 40.4998C11.3099 41.7298 13.0499 42.7498 13.8899 41.7198C13.8899 41.7198 22.0099 32.3998 28.7299 24.6998C32.0899 32.6998 35.4599 40.7298 35.4599 40.7298C35.7899 41.5898 37.1599 41.3298 37.1499 40.4098L37.8799 22.8598C37.9399 20.6498 34.6299 20.6598 34.6699 22.8598ZM16.1499 35.7698L24.1299 13.7198C24.9799 15.7498 26.1799 18.5998 28.1499 23.2898L16.1499 35.7698Z"
                        fill="white"
                      />
                      <path
                        d="M43.4103 4.74023L43.9603 6.43023H45.7303L44.3003 7.47023L44.8403 9.16023L43.4103 8.12023L41.9703 9.16023L42.5203 7.47023L41.0903 6.43023H42.8603L43.4103 4.74023Z"
                        fill="white"
                      />
                      <path
                        d="M15.4901 0L16.1801 2.13H18.4101L16.6001 3.44L17.3001 5.57L15.4901 4.25L13.6801 5.57L14.3701 3.44L12.5601 2.13H14.8001L15.4901 0Z"
                        fill="white"
                      />
                      <path
                        d="M47.1101 32.8105L47.4701 33.9405H48.6501L47.7001 34.6305L48.0601 35.7505L47.1101 35.0605L46.1501 35.7505L46.5201 34.6305L45.5601 33.9405H46.7401L47.1101 32.8105Z"
                        fill="white"
                      />
                      <path
                        d="M22.7603 44.4297L23.4503 46.5597H25.6903L23.8803 47.8697L24.5703 49.9997L22.7603 48.6897L20.9503 49.9997L21.6503 47.8697L19.8403 46.5597H22.0703L22.7603 44.4297Z"
                        fill="white"
                      />
                      <path
                        d="M3.1501 26L3.5801 27.31H4.9601L3.8501 28.13L4.2701 29.44L3.1501 28.63L2.0401 29.44L2.4601 28.13L1.3501 27.31H2.7301L3.1501 26Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            </>
          )}
          <Image
            src={images?.arrow}
            alt="ebitans image"
            className="rotate-[90deg] -ml-7 hidden lg:block relative -z-[1]"
          />
        </div>
      </form>
    </>
  );
};

export default HeroRegister;
