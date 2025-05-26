"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import { baseUrl } from "@/constants/baseUrl";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "@/lib/localstorage";
import {
  getFromSessionStorage,
  removeFromSessionStorage,
} from "@/lib/sessionstorage";
import { sendGTMEvent } from "@next/third-parties/google";
import { ViewContent } from "@/helper/fbTracking";

const OtpVerify = () => {
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(null);
  const [user, setUser] = useState(getFromSessionStorage("isUserReg"));
  const [time, setTime] = useState(null);
  const [dis, setDis] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!user?.email_or_phone) {
      router.push("/", { scroll: false });
    }
  }, [user]);

  useEffect(() => {
    setOtp(getFromSessionStorage("random"));
    setUser(getFromSessionStorage("isUserReg"));
    setTime(getFromLocalStorage("time"));
    setDis(getFromLocalStorage("register"));

    setTimeout(() => {
      removeFromSessionStorage("random");
      removeFromSessionStorage("isUserReg");
      removeFromLocalStorage("time");
      removeFromLocalStorage("register");
    }, 300000);
  }, [user?.phone]);

  const onSubmit = (data) => {
    setLoading(true);
    if (Number(atob(otp)) === Number(data?.otp)) {
      const registerData = {
        name: user?.name ? user?.name : null,
        email_or_phone: user?.email_or_phone,
        password: user?.password,
        type: user?.type ?? null,
        time: dis === 1 ? time : null,
        origin_domain: "ebitans.com.bd",
      };

      const requestOptions = {
        method: "POST",
        body: JSON.stringify(registerData),
        headers: {
          "Content-Type": "application/json",
        },
      };

      fetch(
        `${process.env.NEXT_PUBLIC_API_URL_V2}/user/registration`,
        requestOptions
      )
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          if (res) {
            // ✅ Send GTM and FB tracking event
            const event_id = "evt_" + Math.random().toString(36).substr(2, 9);

            // GTM Event
            sendGTMEvent({
              event: "subscription",
              form_type: "OTP Verification",
              page_path: window.location.pathname,
              event_id,
            });

            // FB Event
            ViewContent({
              content_name: "Subscription Form",
              content_category: "OTP Verification",
              content_type: "subscription",
              eventId: event_id,
            });

            removeFromSessionStorage("random");
            removeFromSessionStorage("isUserReg");
            removeFromLocalStorage("time");
            removeFromLocalStorage("register");
            router.replace(
              `https://admin.ebitans.com/login?token=${res?.data?.token}`
            );
          }
        })
        .catch((error) => {
          // console.error(error, "error");
          setLoading(false);
        });
    }
    if (Number(atob(otp)) !== Number(data?.otp)) {
      toast("OTP Doesn't Match", { type: "error" });
      setLoading(false);
    }
  };

  return (
    <>
      {isClient ? (
        <div className="container px-5 lg:px-10 text-center rounded-lg relative z-[1] overflow-hidden py-16 h-screen">
          <div className="mb-10 md:mb-6 text-center">
            <h2 className="text-sm md:text-base text-[#5A5A5A] mt-12 mb-8 font-bold">
              Check "
              <span className="text-[#f1593a]">{user?.email_or_phone}</span>"
              for Verify Your OTP{" "}
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center flex-col items-center mb-6 w-full">
              <label
                for="email"
                className="block text-gray-600 font-semibold text-sm leading-none mb-3 lg:cursor-pointer"
              >
                OTP
              </label>
              <input
                type="Number"
                {...register("otp", { required: true })}
                placeholder="Enter your OTP "
                className={
                  "py-2 px-4 md:px-5 sm:w-[300px] w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                }
              />
            </div>
            {errors?.otp && <p>{errors.test.message}</p>}

            <div className="mb-10 lg:cursor-pointer">
              {loading ? (
                <button
                  className={`shadow-xl uppercase py-3 px-2 w-40 text-sm text-white bg-[#f1593a] rounded border-2 border-[#f1593a] hover:text-[#f1593a] hover:bg-white lg:cursor-pointer`}
                >
                  Loading
                </button>
              ) : (
                <button
                  type="submit"
                  className={`shadow-xl uppercase py-3 px-2 w-40 text-sm text-white bg-[#f1593a] rounded border-2 border-[#f1593a] hover:text-[#f1593a] hover:bg-white lg:cursor-pointer`}
                >
                  Verify OTP
                </button>
              )}
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};


export default OtpVerify;
