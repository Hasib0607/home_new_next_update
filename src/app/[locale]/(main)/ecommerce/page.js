'use client';

import AdvantageFromOthers from '@/components/ecommerce/AdvantageFromOthers';
import Advantages from '@/components/ecommerce/Advantages';
import CustomerReview from '@/components/ecommerce/CustomerReview';
import Demo from '@/components/ecommerce/Demo';
import Features from '@/components/ecommerce/Features';
import Intro from '@/components/ecommerce/Intro';
import LandingContacts from '@/components/ecommerce/LandingContacts';
import LandingFaq from '@/components/ecommerce/LandingFaq';
import LandingRegistration from '@/components/ecommerce/LandingRegistration';
// import Price from "@/components/ecommerce/Price";
import { useRef } from 'react';
import ViewContentGtm from '../ViewContentGtm';
import Price1 from '@/components/ecommerce/Price1';
import Youtube from '@/components/ecommerce/Youtube';

// export const metadata = {
//   title: "E-Commerce",
//   description:
//     "Helping businesses go online and grow bigger with high-tech ecommerce website.",
// };

const Ecommerce = async ({ params: { locale } }) => {
  const bangla = locale !== 'en';
  const registrationRef = useRef(null);

  return (
    <div className="bg-[#F9F7F6] pt-12 md:pt-20 relative">
      <ViewContentGtm title="eCommerce" category="Landing Page" />
      <div>
        <Intro />
      </div>
      <div>
        <Advantages scrollToRef={registrationRef} />
      </div>
      <div>
        <Youtube scrollToRef={registrationRef} />
      </div>
      <div>
        <Features scrollToRef={registrationRef} />
      </div>
      {/* <div>
        <Price scrollToRef={registrationRef} />
      </div> */}
      <div>
        <Demo scrollToRef={registrationRef} />
      </div>
      <div>
        <CustomerReview scrollToRef={registrationRef} />
      </div>
      <div>
        <AdvantageFromOthers />
      </div>
      <div>
        <Price1 scrollToRef={registrationRef} />
      </div>
      <div className="bg-[#f1593a] py-14">
        <div className="container bg-white" ref={registrationRef}>
          <LandingRegistration />
        </div>
      </div>
      <div>
        <LandingFaq />
      </div>
      <div>
        <LandingContacts scrollToRef={registrationRef} locale={locale} />
      </div>
    </div>
  );
};

export default Ecommerce;
