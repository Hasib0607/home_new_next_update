import Image from "next/image";
import banner from "@/assets/images/webBanner/ebitans - eCommerce website builder platform - Career.webp";
import light from "@/assets/images/light.png";
import dollar from "@/assets/images/dollar.png";
import achievement from "@/assets/images/achievement.png";
import handshake from "@/assets/images/handshake.png";
import grow from "@/assets/images/grow.png";
import styles from "@/components/home/home.module.css";
import images from "@/lib/images";
import Registration from "@/components/pricing/Registration";

export const metadata = {
  title: "Career",
  description:
    "Discover rewarding career paths with eBitans. We offer diverse job opportunities across various industries. Explore our open positions and join our team of talented professionals.",
};

const Career = () => {
  return (
    <div className="container px-5 lg:px-10 sm:pt-[100px] pt-[65px] relative z-[1]">
      <div className="relative flex justify-center items-center">
        <Image
          width={500}
          height={500}
          src={banner}
          alt="career image"
          className="w-full h-auto"
        />
        <p
          className={`${styles.archivo} absolute z-[1] text-white tracking-[15px] text-2xl lg:text-6xl`}
        >
          JOB CAREER
        </p>
      </div>

      <div className="relative lg:pt-40 pt-20">
        <h2 className={`${styles.power} ${styles.headerOne} text-center`}>
          YOU WILL GET
        </h2>
        <div className="-mt-5 lg:-mt-16 relative z-[1] text-center">
          <p
            className={`${styles.archivo} ${styles.paragraph} tracking-[5px] lg:tracking-[10px] text-base uppercase`}
          >
            When you will be working with us.
          </p>
          <h2 className={`${styles.archivo} ${styles.headerTwo}`}>
            Our Worker Facilities
          </h2>
        </div>
        <div className="absolute bg-gradient-to-t from-[#F9F7F6] top-0 left-0 w-full h-full"></div>
      </div>

      <div className="flex flex-wrap justify-center text-center gap-10 my-10">
        <div className="h-[190px] w-[263px] bg-[#E6F4EC] flex flex-col justify-center items-center rounded">
          <Image
            width={500}
            height={500}
            src={light}
            alt="career image"
            className="w-auto h-auto mb-3"
          />
          <p className={`${styles.archivo} text-xl font-bold px-4`}>
            Innovation & Creativity
          </p>
        </div>
        <div className="h-[190px] w-[263px] bg-[#ECEEFF] flex flex-col justify-center items-center rounded">
          <Image
            width={500}
            height={500}
            src={handshake}
            alt="career image"
            className="w-auto h-auto mb-3"
          />
          <p className={`${styles.archivo} text-xl font-bold px-4`}>
            Supportive Work Culture
          </p>
        </div>
        <div className="h-[190px] w-[263px] bg-[#F4E8E6] flex flex-col justify-center items-center rounded">
          <Image
            width={500}
            height={500}
            src={achievement}
            alt="career image"
            className="w-auto h-auto mb-3"
          />
          <p className={`${styles.archivo} text-xl font-bold px-4`}>
            Recognition for achievements
          </p>
        </div>
        <div className="h-[190px] w-[263px] bg-[#F4F1E6] flex flex-col justify-center items-center rounded">
          <Image
            width={500}
            height={500}
            src={dollar}
            alt="career image"
            className="w-auto h-auto mb-3"
          />
          <p className={`${styles.archivo} text-xl font-bold px-4`}>
            Competitive Benefit Package
          </p>
        </div>
        <div className="h-[190px] w-[263px] bg-[#E6F0F4] flex flex-col justify-center items-center rounded">
          <Image
            width={500}
            height={500}
            src={grow}
            alt="career image"
            className="w-auto h-auto mb-3"
          />
          <p className={`${styles.archivo} text-xl font-bold px-4`}>
            Career Growth Opportunity
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-10 mb-20 lg:mb-60">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 bg-white p-5">
          <div>
            <h4
              className={`${styles.archivo} text-[#f1593a] text-xl lg:text-3xl font-bold`}
            >
              Graphic Design Job
            </h4>
            <p
              className={`${styles.archivo} text-[#8F8F8F] mt-3 text-sm lg:text-base max-w-[590px]`}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="flex items-center gap-x-5">
            <div className="group relative h-[27px] lg:h-[45px] w-max px-4 py-2 border-[1.5px] border-[#f1593a] rounded flex justify-center items-center gap-3 bg-white text-[#f1593a] ">
              <button className="relative z-[1] text-[10px] lg:text-base">
                View Details
              </button>
              <Image
                src={images?.arrow1}
                alt="ebitans image"
                className="relative z-[1] h-2 lg:h-auto w-auto"
              />
              <div
                className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}
              ></div>
            </div>
            <div className="group relative h-[27px] lg:h-[45px] w-max px-4 py-2 border-[1.5px] border-[#f1593a] rounded flex justify-center items-center gap-3 bg-white text-[#f1593a] ">
              <button className="relative z-[1] text-[10px] lg:text-base">
                Apply
              </button>
              <Image
                src={images?.arrow1}
                alt="ebitans image"
                className="relative z-[1] h-2 lg:h-auto w-auto"
              />
              <div
                className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 bg-white p-5">
          <div>
            <h4
              className={`${styles.archivo} text-[#f1593a] text-xl lg:text-3xl font-bold`}
            >
              Web Designer Job
            </h4>
            <p
              className={`${styles.archivo} text-[#8F8F8F] mt-3 text-sm lg:text-base max-w-[590px]`}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="flex items-center gap-x-5">
            <div className="group relative h-[27px] lg:h-[45px] w-max px-4 py-2 border-[1.5px] border-[#f1593a] rounded flex justify-center items-center gap-3 bg-white text-[#f1593a] ">
              <button className="relative z-[1] text-[10px] lg:text-base">
                View Details
              </button>
              <Image
                src={images?.arrow1}
                alt="ebitans image"
                className="relative z-[1] h-2 lg:h-auto w-auto"
              />
              <div
                className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}
              ></div>
            </div>
            <div className="group relative h-[27px] lg:h-[45px] w-max px-4 py-2 border-[1.5px] border-[#f1593a] rounded flex justify-center items-center gap-3 bg-white text-[#f1593a] ">
              <button className="relative z-[1] text-[10px] lg:text-base">
                Apply
              </button>
              <Image
                src={images?.arrow1}
                alt="ebitans image"
                className="relative z-[1] h-2 lg:h-auto w-auto"
              />
              <div
                className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 bg-white p-5">
          <div>
            <h4
              className={`${styles.archivo} text-[#f1593a] text-xl lg:text-3xl font-bold`}
            >
              Front-end Developer Job
            </h4>
            <p
              className={`${styles.archivo} text-[#8F8F8F] mt-3 text-sm lg:text-base max-w-[590px]`}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="flex items-center gap-x-5">
            <div className="group relative h-[27px] lg:h-[45px] w-max px-4 py-2 border-[1.5px] border-[#f1593a] rounded flex justify-center items-center gap-3 bg-white text-[#f1593a] ">
              <button className="relative z-[1] text-[10px] lg:text-base">
                View Details
              </button>
              <Image
                src={images?.arrow1}
                alt="ebitans image"
                className="relative z-[1] h-2 lg:h-auto w-auto"
              />
              <div
                className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}
              ></div>
            </div>
            <div className="group relative h-[27px] lg:h-[45px] w-max px-4 py-2 border-[1.5px] border-[#f1593a] rounded flex justify-center items-center gap-3 bg-white text-[#f1593a] ">
              <button className="relative z-[1] text-[10px] lg:text-base">
                Apply
              </button>
              <Image
                src={images?.arrow1}
                alt="ebitans image"
                className="relative z-[1] h-2 lg:h-auto w-auto"
              />
              <div
                className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 bg-white p-5">
          <div>
            <h4
              className={`${styles.archivo} text-[#f1593a] text-xl lg:text-3xl font-bold`}
            >
              Back-end Developer Job
            </h4>
            <p
              className={`${styles.archivo} text-[#8F8F8F] mt-3 text-sm lg:text-base max-w-[590px]`}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="flex items-center gap-x-5">
            <div className="group relative h-[27px] lg:h-[45px] w-max px-4 py-2 border-[1.5px] border-[#f1593a] rounded flex justify-center items-center gap-3 bg-white text-[#f1593a] ">
              <button className="relative z-[1] text-[10px] lg:text-base">
                View Details
              </button>
              <Image
                src={images?.arrow1}
                alt="ebitans image"
                className="relative z-[1] h-2 lg:h-auto w-auto"
              />
              <div
                className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}
              ></div>
            </div>
            <div className="group relative h-[27px] lg:h-[45px] w-max px-4 py-2 border-[1.5px] border-[#f1593a] rounded flex justify-center items-center gap-3 bg-white text-[#f1593a] ">
              <button className="relative z-[1] text-[10px] lg:text-base">
                Apply
              </button>
              <Image
                src={images?.arrow1}
                alt="ebitans image"
                className="relative z-[1] h-2 lg:h-auto w-auto"
              />
              <div
                className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Registration />
      </div>
    </div>
  );
};

export default Career;
