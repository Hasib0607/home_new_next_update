import Marquee from "react-fast-marquee";
import Image from "next/image";
import images from "@/lib/images";
import styles from "./home.module.css";

const Work = ({ locale }) => {
  const bangla = locale !== "en";
  const brands = [
    images.bkash,
    images.nagad,
    images.amarpay,
    images.ecourier,
    images.ssl,
    images.redx,
    images.pathao,
    images.bylc,
    images.bigBd,
  ];
  return (
    <section className="lg:py-[60px] py-10 relative z-[1] bg-[#F9F7F6]">
      {/* <div className='absolute bg-gradient-to-t from-[#F9F7F6] top-0 left-0 w-full h-full'></div> */}
      <div className="relative bg-[#F9F7F6]">
        <h2 className={`${styles.dream} ${styles.headerOne} text-center `}>
          eBitans Partners
        </h2>
        <div className="absolute bg-gradient-to-t from-[#F9F7F6] top-0 left-0 w-full h-full"></div>
      </div>
      <div className="relative z-[1] container px-5 lg:px-10 rounded-[10px] xl:-mt-24 lg:-mt-10 -mt-6">
        <div className="text-center">
          <h4
            className={`${styles.archivo} ${styles.paragraph} tracking-[5px] lg:tracking-[10px] text-base`}
          >
            {bangla ? "তারা আমাদের সাথে সংযুক্ত" : "They are connect with us"}
          </h4>
          <h2 className={`${styles.archivo} ${styles.headerTwo}`}>
            {bangla ? "আমাদের সাথে কাজ করুন" : "Work With Us"}
          </h2>
        </div>
      </div>
      <Marquee gradient={false} speed={30} className="mt-14">
        {brands?.map((items, id) => (
          <div key={id} className="mx-10">
            <Image src={items} alt="ebitans image" className="h-10 w-auto" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Work;
