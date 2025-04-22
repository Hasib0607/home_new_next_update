import AdvantageFromOthers from "@/components/ecommerce/AdvantageFromOthers";
import Advantages from "@/components/ecommerce/Advantages";
import CustomerReview from "@/components/ecommerce/CustomerReview";
import Demo from "@/components/ecommerce/Demo";
import Intro from "@/components/ecommerce/Intro";
import LandingFaq from "@/components/ecommerce/LandingFaq";
import LandingRegistration from "@/components/ecommerce/LandingRegistration";
import Price from "@/components/ecommerce/Price";

export const metadata = {
  title: "E-Commerce",
  description:
    "Helping businesses go online and grow bigger with high-tech ecommerce website.",
};

const Ecommerce = async ({ params: { locale } }) => {
  const bangla = locale !== "en";

  return (
    <div className="bg-[#F9F7F6] lg:pt-28 pt-20 relative">
      <div>
        <Intro />
      </div>
      <div>
        <AdvantageFromOthers />
      </div>
      <div>
        <Price />
      </div>
      <div>
        <CustomerReview />
      </div>
      <div>
        <Demo />
      </div>
      <div>
        <Advantages />
      </div>
      <div className="bg-[#f1593a] py-14">
        <div className="container bg-white">
          <LandingRegistration />
        </div>
      </div>
      <div>
        <LandingFaq />
      </div>
    </div>
  );
};

export default Ecommerce;
