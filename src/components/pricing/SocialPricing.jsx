"use client";
import React, { memo, useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import styles from "@/components/home/home.module.css";
import images from "@/lib/images";
import { getPrice } from "@/lib/getPrice";

const SocialPricing = ({ social }) => {
  const [plan, setPlan] = useState("twelvedis");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="container px-5 lg:px-10 pb-10 lg:pb-[120px] relative z-[5] rounded-md">
        <div
          onClick={() => setOpen(!open)}
          className={`p-5 bg-white flex items-center justify-between lg:cursor-pointer`}
        >
          <h2 className={`${styles.archivo} font-bold text-xl lg:text-4xl`}>
            Social Media Marketing
          </h2>
          <FaArrowDown
            className={`${
              open ? "rotate-180" : ""
            } duration-1000 text-[#f1593a] text-3xl`}
          />
        </div>
        <div
          className={`${open ? "h-full" : "h-0"} overflow-hidden px-5 bg-white`}
        >
          <div
            className={`${
              open ? "translate-y-0" : "translate-y-10"
            } duration-1000 grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-10 pt-5 lg:pt-[65px] w-full`}
          >
            <div className="w-full flex lg:justify-center">
              <div>
                <h5
                  className={`${styles.archivo} ${styles.headerFive} font-semibold mb-6 `}
                >
                  All in One Solution
                </h5>
                <div className="space-y-3">
                  {solution?.map((item, id) => (
                    <div key={id} className="flex items-center gap-3">
                      <Image src={images?.tick} alt="ebitans image" />
                      <p className={`${styles.paragraph}`}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full flex lg:justify-center lg:border-x border-[#6D5854]">
              <div>
                <h5
                  className={`${styles.archivo} ${styles.headerFive} font-semibold mb-6 `}
                >
                  Features
                </h5>
                <div className="space-y-3">
                  {features?.map((item, id) => (
                    <div key={id} className="flex items-center gap-3">
                      <Image src={images?.tick} alt="ebitans image" />
                      <p className={`${styles.paragraph}`}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full flex lg:justify-center">
              <div>
                <h5
                  className={`${styles.archivo} ${styles.headerFive} font-semibold mb-6 `}
                >
                  Addons
                </h5>
                <div className="space-y-3">
                  {addons?.map((item, id) => (
                    <div key={id} className="flex items-center gap-3">
                      <Image src={images?.tick} alt="ebitans image" />
                      <p className={`${styles.paragraph}`}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${
              open ? "translate-y-0" : "translate-y-10"
            } duration-1000 relative z-[4] py-[65px]`}
          >
            <div className="flex items-center rounded-md border border-[#442721] justify-center w-max mx-auto px-2 py-1 mb-[65px]">
              <button
                onClick={() => setPlan("onedis")}
                className={`${
                  plan === "onedis" && "bg-[#f1593a] text-white"
                } px-2 py-1 rounded-[3px] border border-transparent`}
              >
                Monthly
              </button>
              <button
                onClick={() => setPlan("twelvedis")}
                className={`${
                  plan === "twelvedis" && "bg-[#f1593a] text-white"
                } px-2 py-1 rounded-[3px] border border-transparent`}
              >
                Annually
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {social?.map((item) => (
                <div key={item?.id} className="">
                  <div
                    className={`bg-[#FEEFEC] relative rounded overflow-hidden`}
                  >
                    <SinglePrice pricing={item} dis={plan} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(SocialPricing);

const solution = [
  "Ecommerce Website",
  "Category and sub-category create",
  "999999 Products",
  "Unlimited Product Varients",
];
const features = [
  "Inventory Management",
  "Order Management",
  "Staff and Employee",
  "Offer Promotion",
];
const addons = [
  "Payment Gateway Integration",
  "Search Console Integration",
  "Easy Order",
  "Advance Payment Configuration",
];

const SinglePrice = ({ pricing, dis }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  useEffect(() => {
    if (dis === "onedis") {
      setPrice(
        getPrice(pricing?.price, pricing?.onedis, pricing?.discount_type)
      );
      setDiscount(pricing?.onedis);
    }
    if (dis === "twelvedis") {
      setPrice(
        getPrice(pricing?.price, pricing?.twelvedis, pricing?.discount_type)
      );
      setDiscount(pricing?.twelvedis);
    }
  }, [dis, pricing]);

  return (
    <div className="w-full space-y-4 mt-5">
      <div className="px-10 text-center">
        <h6
          className={`${styles.archivo} text-[28px] font-semibold text-center capitalize`}
        >
          {pricing?.name}
        </h6>
        <p
          className={`${styles.paragraph} ${styles.archivo} text-[#ACA2A2] text-xs`}
        >
          {pricing?.subtitle}
        </p>
        <div>
          <div className="flex gap-x-3 justify-center items-center pt-3">
            <p
              className={`${styles.paragraph} text-base line-through text-[#ACA9A9] text-[10px]`}
            >
              BDT {pricing?.price !== 2 ? pricing?.price : "0"}
            </p>
            <p
              className={`${styles.paragraph} ${styles.archivo} text-center border border-[#DD8D7C] bg-[#F1D0C9] text-[#f1593a] text-[10px] font-medium px-1 rounded-sm`}
            >
              Save{" "}
              {pricing?.discount_type === "percent"
                ? discount + " %"
                : discount + " %"}
            </p>
          </div>
        </div>
      </div>

      <div className="px-5">
        <div className="bg-[#F5CDC4] w-full h-[1px]"></div>
      </div>

      <div className="py-3 space-y-3 mx-10">
        <div className="flex items-center gap-3 text-xs">
          <Image src={images?.tick} alt="ebitans image" />
          <p className={`${styles.paragraph} ${styles.archivo}`}>
            Personal Domain Add
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <Image src={images?.tick} alt="ebitans image" />
          <p className={`${styles.paragraph} ${styles.archivo}`}>
            Category Create{" "}
            <span className={`${styles.archivo}`}>
              {pricing?.id === 1
                ? "(7)"
                : pricing?.id === 2
                ? "(20)"
                : pricing?.id === 7
                ? "(50)"
                : "(Unlimited)"}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <Image src={images?.tick} alt="ebitans image" />
          <p className={`${styles.paragraph} ${styles.archivo}`}>
            Inventory Management
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <Image src={images?.tick} alt="ebitans image" />
          <p className={`${styles.paragraph} ${styles.archivo}`}>
            Order Management
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <Image src={images?.tick} alt="ebitans image" />
          <p className={`${styles.paragraph} ${styles.archivo}`}>
            Products ({pricing?.product !== 2 ? pricing?.product : "Custom"})
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <Image src={images?.tick} alt="ebitans image" />
          <p className={`${styles.paragraph} ${styles.archivo}`}>
            Staffs ({pricing?.staff !== 1000 ? pricing?.staff : "Custom"})
          </p>
        </div>
        <div className="flex items-center gap-x-3 text-xs">
          {pricing?.advance_report === "No" ? (
            <Image src={images?.close} alt="ebitans image" />
          ) : (
            <Image src={images?.tick} alt="ebitans image" />
          )}
          <p
            className={`${styles.paragraph} ${
              pricing?.advance_report === "No" && "text-[#8F8F8F]"
            } ${styles.archivo}`}
          >
            Advance Report
          </p>
        </div>
        <div className="flex items-center gap-x-3 text-xs">
          {pricing?.website_setup === "No" ? (
            <Image src={images?.close} alt="ebitans image" />
          ) : (
            <Image src={images?.tick} alt="ebitans image" />
          )}
          <p
            className={`${styles.paragraph} ${
              pricing?.website_setup === "No" && "text-[#8F8F8F]"
            } ${styles.archivo}`}
          >
            Website Setup
          </p>
        </div>
        <div className="flex items-center gap-x-3 text-xs">
          {pricing?.id === 1 ? (
            <Image src={images?.close} alt="ebitans image" />
          ) : (
            <Image src={images?.tick} alt="ebitans image" />
          )}
          <p
            className={`${styles.paragraph} ${
              pricing?.website_setup === "No" && "text-[#8F8F8F]"
            } ${styles.archivo}`}
          >
            Email
          </p>
        </div>
      </div>

      <div className="p-2">
        <div className="w-full bg-[#f06448d8] text-white flex items-center rounded-sm  justify-center h-14">
          {price !== 2 ? (
            <div>
              <div className="flex justify-center py-4">
                <p className={`${styles.archivo}`}>BDT</p>
                <p className={`${styles.archivo} text-3xl`}>
                  {parseInt(price)}
                  <span className="text-sm">Monthly</span>
                </p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center py-4">
              <p className={`${styles.paragraph} ${styles.archivo} text-3xl`}>
                Custom
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
