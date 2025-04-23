"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import styles from "../home/home.module.css";
import { onSubmit } from "@/lib/registration";
import images from "@/lib/images";
import Link from "next/link";

const LandingRegistration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const router = useRouter();

  useEffect(() => {
    let currentAudio = null;

    const speak = (text, fallbackAudio) => {
      if (!("speechSynthesis" in window)) {
        if (fallbackAudio) {
          fallbackAudio.play().catch(() => {});
        }
        return;
      }

      const synth = window.speechSynthesis;
      const voices = synth.getVoices();
      const banglaVoice = voices.find((voice) => voice.lang === "bn-BD");

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "bn-BD";
      if (banglaVoice) {
        utterance.voice = banglaVoice;
      }

      synth.cancel(); // stop current speaking
      synth.speak(utterance);
    };

    const handleClick = (e) => {
      const target = e.currentTarget;
      const audioSrc = target.getAttribute("data-audio");
      const speechText =
        target.getAttribute("data-speech") || "অনুগ্রহ করে তথ্য দিন";

      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      if (audioSrc) {
        currentAudio = new Audio(audioSrc);
        currentAudio.play().catch(() => speak(speechText));
      } else {
        speak(speechText);
      }
    };

    const triggers = document.querySelectorAll(".audio-trigger");
    triggers.forEach((trigger) => {
      trigger.addEventListener("click", handleClick);
    });

    return () => {
      triggers.forEach((trigger) => {
        trigger.removeEventListener("click", handleClick);
      });
    };
  }, []);

  const handleRegister = (data) => {
    onSubmit(data, setLoading, router, reset);
  };

  return (
    <div className="border-black border-2 shadow-lg shadow-black">
      <form onSubmit={handleSubmit(handleRegister)} className="mx-2 md:mx-20">
        <h1 className="text-2xl md:text-3xl font-bold text-center py-4 my-10 bg-[#f1593a] text-white mx-4 px-2 md:mx-40 rounded-md shadow-xl shadow-slate-600">
          ই-কমার্স ওয়েবসাইট তৈরির জন্য এখনই রেজিস্ট্রেশন করুন
        </h1>
        <div className="flex gap-2 w-full">
          <div className="w-full">
            <input
              autoComplete=""
              placeholder="আপনার ইমেইল অথবা ফোন নম্বর লিখুন"
              type="text"
              {...register("email_or_phone", {
                required: true,
              })}
              aria-invalid={errors.email_or_phone ? "true" : "false"}
              data-audio="/audio/mobile_number.mp3"
              data-speech="আপনার ইমেইল অথবা ফোন নম্বর লিখুন"
              className={`audio-trigger w-full ${styles.archivo} ${
                errors?.email_or_phone?.type === "required"
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#f1593a] focus:border-[#f1593a]"
              } h-[40px] sm:h-[48px] drop-shadow-4xl text-xs lg:text-base border-[2px] placeholder:text-[#a39f9e] focus:outline-none focus:ring-0 rounded-sm px-2`}
            />
            {errors?.email_or_phone?.type === "required" && (
              <span className="text-xs text-red-500 block">
                Email or Phone is required
              </span>
            )}
          </div>
          <div className="w-full relative">
            <input
              autoComplete="pass"
              placeholder="আপনার পছন্দমতো পাসওয়ার্ড লিখুন"
              type={`${show ? "text" : "password"}`}
              {...register("password", { required: true })}
              data-audio="/audio/password.mp3"
              data-speech="আপনার পছন্দমতো পাসওয়ার্ড লিখুন"
              className={`audio-trigger w-full ${
                styles.archivo
              } h-[40px] sm:h-[48px] drop-shadow-4xl text-xs lg:text-base placeholder:text-[#a39f9e] border-[2px] ${
                errors?.password?.type === "required"
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#f1593a] focus:border-[#f1593a]"
              } focus:outline-none focus:ring-0 rounded-sm px-2`}
            />
            <div className="absolute right-2 top-[40%] -translate-y-1/2 z-[2] lg:cursor-pointer">
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

        {/* Add this new checkbox section */}
        <div className="flex items-center mt-4 mb-4">
          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              {...register("terms_agreed", { required: true })}
              className={`mr-2 w-4 h-4 accent-[#F1593A] ${
                errors.terms_agreed ? "border-red-500" : "border-gray-300"
              } rounded focus:ring-[#F1593A]`}
            />
            <span className={styles.archivo}>
              আমি{" "}
              <Link
                href="/terms-and-conditions"
                className="text-[#F1593A] hover:underline"
              >
                শর্তাবলী ও নীতিমালা
              </Link>{" "}
              পড়েছি এবং সম্মত
            </span>
          </label>
        </div>
        {errors.terms_agreed && (
          <span className="text-xs text-red-500 block -mt-2 mb-2">
            আপনাকে শর্তাবলীতে সম্মতি দিতে হবে
          </span>
        )}

        <div className="flex items-center justify-center lg:-mt-8 mt-3 mb-10">
          {loading ? (
            <button
              className={`group relative h-12 w-48 overflow-hidden rounded-lg bg-[#F1593A] text-lg shadow `}
            >
              <div
                className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}
              ></div>
              <span className={`${styles.archivo} relative  text-white`}>
                লোড হচ্ছে
              </span>
            </button>
          ) : (
            <>
              <button
                type="submit"
                className={`group relative h-16 w-80 overflow-hidden rounded-[3px] bg-[#F1593A] text-lg shadow `}
              >
                <div
                  className={`absolute inset-0 w-1 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}
                ></div>
                <span
                  className={`${styles.archivo} relative text-white flex items-center justify-around font-bold text-2xl`}
                >
                  <span>রেজিস্ট্রেশন করুন</span>
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
    </div>
  );
};

export default LandingRegistration;
