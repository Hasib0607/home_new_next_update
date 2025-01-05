"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import images from "@/lib/images";
import styles from "@/components/home/home.module.css";

const Footer = ({ locale }) => {
  let date = new Date().getFullYear();

  useEffect(() => {
    // Add Elfsight script
    const elfsightScript = document.createElement("script");
    elfsightScript.src = "https://static.elfsight.com/platform/platform.js";
    elfsightScript.setAttribute("data-use-service-core", "");
    elfsightScript.defer = true;
    document.body.appendChild(elfsightScript);

    // Add Facebook Messenger script
    const fbScript = document.createElement("script");
    fbScript.id = "facebook-jssdk";
    fbScript.src =
      "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    document.body.appendChild(fbScript);

    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v11.0", // Replace with desired API version
      });
    };

    // Clean up scripts on unmount
    return () => {
      document.body.removeChild(elfsightScript);
      document.body.removeChild(fbScript);
    };
  }, []);

  return (
    <footer className="bg-[#261612] pt-16 relative z-[1]">
      <div className="grid grid-cols-12 gap-5 container px-5 lg:px-10">
        <div className="lg:col-span-4 col-span-12 text-white">
          <div className="lg:mb-16 mb-5">
            <Link href="/">
              <Image
                width={500}
                height={500}
                src={images?.whiteLogo}
                alt="ebitans image"
                className="h-12 w-auto"
              />
            </Link>
          </div>
          <div className="lg:mb-12 mb-5">
            <p className={`${styles.archivo} ${styles.headerFour}`}>
              Follow us on
            </p>
            <div className="flex items-center gap-2 lg:mt-5 mt-2">
              {socialLink?.map((item) => (
                <a
                  key={item?.id}
                  href={item?.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={item?.icon} alt="ebitans image" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className={`${styles.archivo} ${styles.headerFour}`}>
              Download Our Mobile App
            </p>
            <div className="flex items-center gap-2 lg:mt-5 mt-2">
              <Image src={images?.googlePlay} alt="ebitans image" />
              <Image src={images?.appleStore} alt="ebitans image" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 col-span-6 text-white">
          <h4
            className={`${styles.archivo} font-semibold mb-9 ${styles.headerFour}`}
          >
            {locale === "en" ? "Pages" : "পেইজ"}
          </h4>
          <div>
            {footerPage?.map((item) => (
              <Link href={`${item?.url}`} key={item?.id}>
                <p className={`${styles.archivo} pb-3 ${styles.paragraph}`}>
                  {locale === "en" ? item?.name : item?.nameBn}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 col-span-6 text-white lg:justify-self-end">
          <h4
            className={`${styles.archivo} font-semibold mb-9 ${styles.headerFour}`}
          >
            {locale === "en" ? "Legal" : "আইনসংক্রান্ত"}
          </h4>
          <div>
            {legal?.map((item) => (
              <Link href={`${item?.url}`} key={item?.id}>
                <p className={`${styles.archivo} pb-3 ${styles.paragraph}`}>
                  {locale === "en" ? item?.name : item?.nameBn}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:col-span-4 col-span-12 text-white lg:justify-self-end">
          <h4
            className={`${styles.archivo} font-semibold mb-9 ${styles.headerFour}`}
          >
            {locale === "en" ? "Contact Us" : "যোগাযোগ করুন"}
          </h4>

          <div className="flex items-center gap-5">
            <Image src={images?.mail} alt="ebitans image" />
            <p className={`${styles.archivo} ${styles.paragraph}`}>
              info@ebitans.com
            </p>
          </div>

          <div className="flex items-center gap-5 mt-5 mb-4">
            <Image src={images?.phone} alt="ebitans image" />
            <p className={`${styles.archivo} ${styles.paragraph}`}>
              +8801886 515579
            </p>
          </div>

          <div className="flex items-center gap-5">
            <Image src={images?.location} alt="ebitans image" />
            <p className={`${styles.archivo} ${styles.paragraph}`}>
              <span className="font-bold">Bangladesh Office</span> <br /> House:
              39, Road: 20, Nikunja 2, Dhaka-1229
            </p>
          </div>

          <div className="flex items-center gap-5 mt-3">
            <Image src={images?.location} alt="ebitans image" />
            <p className={`${styles.archivo} ${styles.paragraph}`}>
              <span className="font-bold">Portugal Office</span> <br /> Rua dos
              Anjos 27 A/B, 1150-032 Lisboa Portugal
            </p>
          </div>

          <div
            className="elfsight-app-d5564ed2-4616-4bb4-908f-13e6b4d69ac7"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
      <div className="relative bg-[#000] py-3 mt-10 z-[1]">
        <div className="grid grid-cols-1 justify-start pl-4">
          <span className="text-sm text-[#f1593a] sm:text-center">
            © {date} All Rights Reserved | Design & Developed By{" "}
            <a href="https://ebitans.com" className="font-bold">
              eBitans Ltd. |
            </a>{" "}
            <a>Made In BANGLADESH</a>{" "}
          </span>
        </div>
        <p className="text-sm text-[#f1593a] sm:text-center pl-4">
          Trade License: TRAD/DNCC/004256/2023
        </p>
      </div>
      {/* Facebook Messenger Chat Plugin */}
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <script>
        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "104694832190312");
        chatbox.setAttribute("attribution", "biz_inbox");
      </script>
    </footer>
  );
};

export default Footer;

const socialLink = [
  {
    id: 1,
    url: "https://www.facebook.com/ebitans",
    icon: images?.fb,
  },
  {
    id: 2,
    url: "https://www.instagram.com/ebitansbd",
    icon: images?.insta,
  },
  {
    id: 3,
    url: "https://wa.me/8801886515579",
    icon: images?.whatsapp,
  },
  {
    id: 4,
    url: "https://www.youtube.com/channel/UCNYZdTPddwoGeMWy5cQ733w",
    icon: images?.youtube,
  },
  {
    id: 5,
    url: "https://www.facebook.com/groups/3028406117411540",
    icon: images?.fbGroup,
  },
];

const footerPage = [
  {
    id: 1,
    name: "Home",
    nameBn: "হোম",
    url: "/",
  },
  {
    id: 2,
    name: "About",
    nameBn: "আমাদের পরিচয়",
    url: "/about",
  },
  {
    id: 3,
    name: "Services",
    nameBn: "সার্ভিস সমূহ",
    url: "/services",
  },
  {
    id: 4,
    name: "Pricing",
    nameBn: "মূল্য তালিকা",
    url: "/pricing",
  },
  {
    id: 5,
    name: "Instruction",
    nameBn: "নির্দেশনা",
    url: "/resources/ebitans-learning",
  },
  {
    id: 6,
    name: "Contact Us",
    nameBn: "যোগাযোগ করুন",
    url: "/contact",
  },
];

const legal = [
  {
    id: 1,
    name: "Blogs",
    nameBn: "ব্লগ",
    url: "/resources/blogs",
  },
  {
    id: 3,
    name: "Privacy Policy",
    nameBn: "প্রাইভেসী পলিসি",
    url: "/privacy-policy",
  },
  {
    id: 4,
    name: "Return & Refund Policy",
    nameBn: "রিটার্ন & রিফান্ড পলিসি",
    url: "/return-and-refund-policy",
  },
  {
    id: 5,
    name: "Terms & Conditions",
    nameBn: "টার্মস এবং  কন্ডিশনস",
    url: "/terms-and-conditions",
  },
  {
    id: 6,
    name: "Affiliate Program",
    nameBn: "এফিলিয়েট প্রোগ্রাম",
    url: "/affiliate-program",
  },
  {
    id: 7,
    name: "Login",
    nameBn: "লগইন",
    url: "https://admin.ebitans.com/login",
  },
  {
    id: 8,
    name: "Career",
    nameBn: "ক্যারিয়ার",
    url: "/career",
  },
];
