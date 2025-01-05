import styles from "@/components/home/home.module.css";
import pricingStyles from "@/components/pricing/pricing.module.css";
import WebsitePricing from "@/components/pricing/WebsitePricing";
import PosPricing from "@/components/pricing/PosPricing";
import SocialPricing from "@/components/pricing/SocialPricing";
import { fetchPricingData } from "@/helper/api";

export const metadata = {
  title: "Pricing",
  description:
    "Helping businesses go online and grow bigger with high-tech ecommerce website.",
};

const PricingUi = async ({ params: { locale } }) => {
  const bangla = locale !== "en";
  const data = (await fetchPricingData()) ?? [];

  return (
    <div className="bg-[#F9F7F6] lg:pt-28 pt-20 relative">
      <div className="">
        <div className="relative bg-[#F9F7F6]">
          <h1 className={`${styles.dream} ${styles.headerOne} text-center `}>
            ALL IN ONE PLACE
          </h1>
          <div className="absolute bg-gradient-to-t from-[#F9F7F6] top-0 left-0 w-full h-full"></div>
        </div>
        <div className="text-center lg:-mt-20 relative z-[4] container px-5 lg:px-10">
          <div
            className={`${pricingStyles.bgAnimate} w-[345px] h-[345px] bg-[#F3BEB3] bg-opacity-50 blur-3xl rounded-full`}
          ></div>
          <h1
            className={`${styles.archivo} ${styles.headerOne} uppercase max-w-[540px] mx-auto`}
          >
            {bangla
              ? "সকল প্রকার ব্যবসার জন্য উপযুক্ত মূল্য নির্ধারণ"
              : "PRICING TO SUITS ALL SIZE OF BUSINESS"}
          </h1>
          <h5
            className={`${styles.archivo} ${styles.headerFive} font-normal py-10 max-w-[490px] mx-auto`}
          >
            {bangla
              ? "উচ্চ প্রযুক্তির ই-কমার্স ওয়েবসাইটের মাধ্যমে ব্যবসাগুলোকে অনলাইনে নিয়ে যেতে এবং বড় হতে সহায়তা করছি।"
              : `Helping businesses go online and grow bigger with high-tech
            ecommerce website.`}
          </h5>
        </div>
      </div>
      {/* <WebsitePricing website={data?.website_Plan} /> */}
      <WebsitePricing locale={locale} />
      {/* <PosPricing pos={data?.Pos_Plan} /> */}
      {/* <SocialPricing social={data?.Digital_Plan} /> */}
    </div>
  );
};

export default PricingUi;
