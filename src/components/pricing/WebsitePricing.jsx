"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import styles from "@/components/home/home.module.css";
// import images from "@/lib/images";
// import Image from "next/image";
import { getPrice } from "@/lib/getPrice";
import Registration from "./Registration";
import close from "../../assets/img/close.svg";
import tick from "../../assets/img/tick.svg";
import { baseUrl } from "@/constants/baseUrl";

const WebsitePricing = ({ locale }) => {
  const bangla = locale !== "en";
  const [website, setWebsite] = useState([]);
  const [plan, setPlan] = useState("twelvedis");
  const [cardName, setActiveCardName] = useState("Standard");
  const [allState, setAllState] = useState([]);
  const [addonsState, setAddonsState] = useState([]);
  const [featuresState, setFeaturesState] = useState([]);
  const [newArray, setNewArray] = useState([]);

  const viewRef = useRef(null);

  function transformPlanDetails(plans) {
    return plans.map((plan) => {
      const types = {
        all: [],
        addons: [],
        features: [],
      };

      plan.details.forEach((detail) => {
        if (types[detail.type]) {
          types[detail.type].push({
            title: detail.title,
            status: detail.status,
          });
        }
      });

      return {
        name: plan.name,
        types,
      };
    });
  }

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        var clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const response = await fetch(`${baseUrl}/plan-details`, {
          next: { revalidate: 10 },
        });
        const data = await response.json();
        const getData = data?.website_Plan || [];
        setWebsite(getData);
        setNewArray(transformPlanDetails(getData));
      } catch (error) {
        console.error("There was an error fetching the data", error);
      }
    };

    fetchPricingData();
  }, []);

  useEffect(() => {
    if (newArray.length > 0) {
      console.log(newArray);
      const x = newArray.find((item) => item.name === cardName);
      if (x) {
        setAllState(x.types.all);
        setAddonsState(x.types.addons);
        setFeaturesState(x.types.features);
      }
    }
  }, [cardName, newArray]);

  return (
    <div
      className="bg-gradient-to-t from-[#FEEFEC] pb-14 relative z-[4]"
      ref={viewRef}
      id="targetScroll"
    >
      <div className="lg:container xl3:px-28 xl:px-20 xl2:px-16 md:px-10 px-5">
        <h2
          className={`${styles.archivo} font-bold text-xl lg:text-4xl text-center `}
        >
          {bangla ? "ই-কমার্স ওয়েবসাইট " : "Ecommerce Website"}
        </h2>

        {/* this is features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-10 pt-[65px] w-full">
          <div className="w-full flex lg:justify-center">
            <div>
              <h5
                className={`${styles.archivo} ${styles.headerFive} font-bold mb-6 `}
              >
                All in One Solution
              </h5>
              <div className="space-y-3">
                {allState?.map((item) => (
                  <div className="flex items-center gap-3">
                    <img
                      src={item.status === 0 ? close?.src : tick?.src}
                      alt=""
                    />
                    <p className={`${styles.paragraph}`}>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex lg:justify-center lg:border-x border-[#6D5854] px-20">
            <div>
              <h5
                className={`${styles.archivo} ${styles.headerFive} font-bold mb-6 `}
              >
                Features
              </h5>
              <div className="space-y-3">
                {featuresState?.map((item) => (
                  <div className="flex items-center gap-3">
                    <img
                      src={item.status === 0 ? close?.src : tick?.src}
                      alt=""
                    />
                    <p className={`${styles.paragraph}`}>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex lg:justify-center">
            <div>
              <h5
                className={`${styles.archivo} ${styles.headerFive} font-bold mb-6 `}
              >
                Addons
              </h5>
              <div className="space-y-3">
                {addonsState?.map((item) => (
                  <div className="flex items-center gap-3">
                    <img
                      src={item.status === 0 ? close?.src : tick?.src}
                      alt=""
                    />
                    <p className={`${styles.paragraph}`}>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-[4] py-[65px]">
          {/* this is monthly or yearly */}
          <div className="flex items-center rounded-md border border-[#442721] justify-center w-max mx-auto px-2 py-1 mb-[65px]">
            <button
              onClick={() => setPlan("onedis")}
              className={`${
                plan === "onedis" && "bg-[#f1593a] text-white"
              } px-2 py-1 rounded-[3px] border border-transparent`}
            >
              {bangla ? "মাসিক" : "Monthly"}
            </button>
            <button
              onClick={() => setPlan("twelvedis")}
              className={`${
                plan === "twelvedis" && "bg-[#f1593a] text-white"
              } px-2 py-1 rounded-[3px] border border-transparent`}
            >
              {bangla ? "বাৎসরিক " : "Annually"}
            </button>
          </div>

          {/* this is cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {website?.map((item) => (
              <div key={item?.id} className="">
                <div
                  className={`flex bg-white relative rounded justify-content-center overflow-hidden ${
                    item.name == cardName ? "border-2 border-[#f1593a]" : ""
                  }`}
                >
                  <SinglePrice
                    pricing={item}
                    dis={plan}
                    cardName={cardName}
                    setActiveCardName={setActiveCardName}
                    scrollToHeader={() =>
                      viewRef.current?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Registration />
      </div>
    </div>
  );
};

export default WebsitePricing;

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

const SinglePrice = ({ pricing, dis, setActiveCardName, scrollToHeader }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (dis === "onedis") {
      setPrice(
        getPrice(
          pricing?.price,
          pricing?.one_month_discount,
          pricing?.discount_type
        )
      );
      setDiscount(pricing?.one_month_discount);
    }
    if (dis === "twelvedis") {
      setPrice(
        getPrice(
          pricing?.price,
          pricing?.twelve_month_discount,
          pricing?.discount_type
        )
      );
      setDiscount(pricing?.twelve_month_discount);
    }
  }, [dis, pricing]);

  const handleCardClick = useCallback(() => {
    if (typeof window !== "undefined" && pricing?.name) {
      setActiveCardName(pricing?.name);

      // Ensure the DOM is ready before accessing `document` or `window`.
      const targetElement = document.getElementById("targetScroll");

      if (targetElement) {
        const header = document.querySelector("header>header");
        const headerHeight = header ? header.offsetHeight : 100;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight -
          20;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [pricing?.name]);

  return (
    <div
      style={{
        border:
          setActiveCardName === pricing?.name ? "2px solid #f1593a" : "none",
        borderRadius: "8px", // Adjust as needed
        cursor: "pointer",
        padding: "10px",
        margin: "10px",
        transition: "border 0.3s",
      }}
      id="cardID"
      className="w-full space-y-4 mt-5 hover:opacity-85 hover:cursor-pointer"
      onClick={handleCardClick}
    >
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
              {pricing?.symbol} {pricing?.price !== 2 ? pricing?.price : "0"}
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

      {/* card content */}
      <div className="py-3 space-y-3 mx-10">
        {pricing.details
          .filter((item) => item.type === "package")
          .map((item) => (
            <div className="flex items-center gap-3 text-xs">
              <img src={item.status === 0 ? close?.src : tick?.src} alt="" />
              <p className={`${styles.paragraph} ${styles.archivo}`}>
                {item.title}
              </p>
            </div>
          ))}
      </div>

      <div className="p-2">
        <div className="w-full bg-[#f06448d8] text-white flex items-center rounded-sm  justify-center h-14">
          {price !== 2 ? (
            <div>
              <div className="flex justify-center py-4">
                <p className={`${styles.archivo}`}>{pricing?.symbol}</p>
                <p className={`${styles.archivo} text-3xl`}>
                  {parseInt(price)}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center py-4">
              <p
                className={`${styles.paragraph} ${styles.archivo} text-3xl`}
              ></p>
            </div>
          )}
        </div>
      </div>
      <div>
        <a
          href="https://admin.ebitans.com/register"
          className="text-center underline text-[#f06448d8] block"
        >
          Start Now
        </a>
      </div>
    </div>
  );
};
