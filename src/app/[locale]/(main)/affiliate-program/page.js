import Earn from "@/components/affiliate-program/Earn";
import Help from "@/components/affiliate-program/Help";
import Partner from "@/components/affiliate-program/Partner";
import Pay from "@/components/affiliate-program/Pay";
import Review from "@/components/affiliate-program/Review";
import Why from "@/components/affiliate-program/Why";
import Registration from "@/components/pricing/Registration";

export const metadata = {
  title: "Affiliate Program",
  description:
    "Let’s work together to help startup business entrepreneur around us to sell online. Join eBitans Affiliates learning program where we can teach you how to build an amazing businesse online with eBitans E-commerce website builder platform.",
};

const AffiliateProgram = ({ params: { locale } }) => {
  return (
    <div className="lg:pt-[85px] pt-[50px]">
      <Help locale={locale} />
      <Pay locale={locale} />
      <Partner locale={locale} />
      <Earn locale={locale} />
      <Review locale={locale} />
      <Why locale={locale} />
      <div className="container px-5 lg:px-10">
        <Registration />
      </div>
    </div>
  );
};

export default AffiliateProgram;
