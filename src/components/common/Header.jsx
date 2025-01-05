"use client";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import styles from "@/components/home/home.module.css";
import { ebitansColor } from "@/lib/ebitansColor";
import images from "@/lib/images";
import { usePathname } from "next/navigation";
import LanguageChanger from "../LanguageChanger";

const Header = ({ locale }) => {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 1024) {
      const handleClickOutside = (event) => {
        if (
          navbarRef.current &&
          !navbarRef.current.contains(event.target) &&
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setOpen(false);
          setOpenSub(false);
        }
      };
      if (open || openSub) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        // Remove event listener when dropdown is closed
        document.removeEventListener("mousedown", handleClickOutside);
      }

      // Cleanup function to remove event listener on unmount
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
    // Function to handle clicks outside of the dropdown
    // const handleClickOutside = (event) => {
    //     if (
    //         navbarRef.current &&
    //         !navbarRef.current.contains(event.target) &&
    //         dropdownRef.current &&
    //         !dropdownRef.current.contains(event.target)
    //     ) {
    //         setOpen(false);
    //         setOpenSub(false);
    //     }
    // };

    // Add event listener when dropdown is open
    // if (open || openSub) {
    //     document.addEventListener('mousedown', handleClickOutside);
    // } else {
    //     // Remove event listener when dropdown is closed
    //     document.removeEventListener('mousedown', handleClickOutside);
    // }

    // // Cleanup function to remove event listener on unmount
    // return () => {
    //     document.removeEventListener('mousedown', handleClickOutside);
    // };
  }, [open || openSub]);

  const styleCss = `
    .nav-link:not(.active):hover{
      color:#f1593a;
     }
    .active{
      color:#f1593a;
      font-weight: 700;
     }
     .slide-active-pse .swiper-slide-active {
      transition: 1s ease-in-out;
      scale: 2.5;
  }
  `;
  return (
    <>
      <style>{styleCss}</style>
      <header className="bg-white lg:h-[85px] h-[50px] flex items-center fixed w-full z-[10] shadow-lg">
        <div className="w-full flex justify-between items-center container px-5 lg:px-10">
          <div>
            <Link href="/">
              <Image
                width={500}
                height={500}
                src={images?.darkLogo}
                alt="ebitansLogo"
                className="lg:h-12 h-7 w-auto"
              />
            </Link>
          </div>
          <div onClick={() => setOpenMenu(!openMenu)} className="lg:hidden">
            <FaBars className={`text-2xl text-[${ebitansColor}]`} />
          </div>
          <div ref={navbarRef} className="hidden lg:block">
            <div className={`flex items-center gap-x-7`}>
              <ul className="relative flex items-center gap-x-7 group">
                <Link href={`/${locale}`} className="nav-link duration-300 ">
                  <li
                    onClick={() => {
                      setOpenSub(false);
                      setOpen(false);
                    }}
                    className={`${styles.archivo} ${
                      pathname === "/" || pathname === "/bn" ? "active" : ""
                    }`}
                  >
                    {locale === "en" ? "Home" : "হোম"}
                  </li>
                </Link>

                <div className="relative">
                  <li
                    onClick={() => {
                      setOpenSub(!openSub);
                      setOpen(false);
                    }}
                    className={`${styles.archivo} nav-link flex items-center gap-2 lg:cursor-pointer duration-300`}
                  >
                    <span
                      className={`${
                        styles.archivo
                      } hover:text-[#f1593a] duration-300 ${
                        openSub ? "active" : ""
                      }`}
                    >
                      {locale === "en" ? "Solutions" : "সমাধান"}
                    </span>
                    <IoIosArrowDown className="hover:text-[#f1593a] duration-300 " />
                  </li>
                  {openSub && (
                    <div className="hidden lg:flex items-center gap-3 absolute -bottom-[95px] -left-[120px] drop-shadow-md w-max border-x border-y border-y-[#26161234]  border-x-[#694F49] bg-white px-10">
                      {subMenu_solutions?.map((sub, id) => (
                        <div key={id} className="px-5">
                          <Link
                            href={sub?.link}
                            onClick={() => {
                              setOpenSub(false);
                              setOpen(false);
                            }}
                            className={`nav-link`}
                          >
                            <li
                              className={`${styles.archivo} ${
                                pathname === `/bn${sub?.link}` ||
                                pathname === `${sub?.link}`
                                  ? "active"
                                  : ""
                              } py-5 list-disc`}
                            >
                              {locale === "en" ? sub?.name : sub?.nameBn}
                            </li>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link href="/pricing" className="nav-link duration-300 ">
                  <li
                    onClick={() => {
                      setOpenSub(false);
                      setOpen(false);
                    }}
                    className={`${styles.archivo} ${
                      pathname === "/pricing" || pathname === "/bn/pricing"
                        ? "active"
                        : ""
                    }`}
                  >
                    {locale === "en" ? "Pricing" : "মূল্য তালিকা"}
                  </li>
                </Link>

                <Link href="/services" className="nav-link duration-300 ">
                  <li
                    onClick={() => {
                      setOpenSub(false);
                      setOpen(false);
                    }}
                    className={`${styles.archivo} ${
                      pathname === "/services" || pathname === "/bn/services"
                        ? "active"
                        : ""
                    }`}
                  >
                    {locale === "en" ? "Services" : "সার্ভিস সমূহ"}
                  </li>
                </Link>

                <div className="relative">
                  <li
                    onClick={() => {
                      setOpenSub(false);
                      setOpen(!open);
                    }}
                    className={`${styles.archivo} nav-link flex items-center gap-2 lg:cursor-pointer duration-300`}
                  >
                    <span
                      className={`${
                        styles.archivo
                      } hover:text-[#f1593a] duration-300 ${
                        open ? "active" : ""
                      }`}
                    >
                      {locale === "en" ? "Resources" : "রিসোর্স"}
                    </span>
                    <IoIosArrowDown className="hover:text-[#f1593a] duration-300 " />
                  </li>

                  {open && (
                    <div className="hidden lg:flex items-center gap-3 absolute  -bottom-[95px] -left-[190px] drop-shadow-md w-max border-x border-y border-y-[#26161234]  border-x-[#694F49] bg-white px-10">
                      {subMenu_resource?.map((sub, id) => (
                        <div ref={dropdownRef} key={id} className="px-5">
                          {sub?.name === "Video" ? (
                            <a href={sub?.link} target="_blank">
                              <li className={`nav-link list-disc`}>
                                {locale === "en" ? sub?.name : sub?.nameBn}
                              </li>
                            </a>
                          ) : (
                            <Link
                              href={sub?.link}
                              onClick={() => {
                                setOpenSub(false);
                                setOpen(false);
                              }}
                              className={`nav-link`}
                            >
                              <li
                                className={`${styles.archivo} ${
                                  pathname === `/bn${sub?.link}` ||
                                  pathname === `${sub?.link}`
                                    ? "active"
                                    : ""
                                } py-5 list-disc`}
                              >
                                {locale === "en" ? sub?.name : sub?.nameBn}
                              </li>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href={`/contact`}
                  className="nav-link hover:text-[#f1593a] duration-300 "
                >
                  <li
                    onClick={() => {
                      setOpenSub(false);
                      setOpen(false);
                    }}
                    className={`${styles.archivo} ${
                      pathname === "/contact" || pathname === "/bn/contact"
                        ? "active"
                        : ""
                    }`}
                  >
                    {locale === "en" ? "Contact" : "যোগাযোগ করুন"}
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <LanguageChanger locale={locale} />
            <a href="https://admin.ebitans.com/login">
              <button
                className={`group relative overflow-hidden rounded bg-[#F1593A] w-[73px] h-[37px] shadow`}
              >
                <div
                  className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}
                ></div>
                <span className={`${styles.archivo} relative text-white`}>
                  Login
                </span>
              </button>
            </a>
          </div>
        </div>
      </header>

      {/* mobile view menu  */}
      <div
        className={`fixed top-0 ${
          openMenu ? "left-0" : "left-[100%]"
        } duration-500 w-full bottom-0 z-50 p-2 `}
      >
        <div className="flex flex-col gap-10 bg-[#F5A797] bg-opacity-25 border border-[#F1593A] rounded backdrop-blur-lg mx-auto h-full overflow-y-auto">
          <IoCloseCircleOutline
            onClick={() => setOpenMenu(!openMenu)}
            className="text-[#F1593A] absolute right-2 top-2 text-3xl"
          />
          <div className="mt-10 pl-4 ">
            <div>
              <Link href="/">
                <Image
                  width={500}
                  height={500}
                  src={images?.darkLogo}
                  alt="ebitansLogo"
                  className="lg:h-12 h-7 w-auto"
                />
              </Link>
            </div>
          </div>
          <div className="pl-4 ">
            <div className={``}>
              <ul className="relative flex flex-col gap-y-8 group">
                <Link
                  href="/"
                  onClick={() => setOpenMenu(!openMenu)}
                  className="nav-link hover:text-[#f1593a] duration-300 w-max"
                >
                  <li
                    className={`${styles.archivo} ${
                      pathname === "/" ? "active" : ""
                    }`}
                  >
                    {locale === "en" ? "Home" : "হোম"}
                  </li>
                </Link>

                <li
                  onClick={() => setOpenSub(!openSub)}
                  className={`${styles.archivo} ${
                    openSub && "text-[#f1593a] border-b border-[#f1593a]"
                  } group flex items-center gap-2 lg:cursor-pointer w-max`}
                >
                  <span className={`${styles.archivo}`}>
                    {locale === "en" ? "Solutions" : "সমাধান"}
                  </span>
                  <IoIosArrowDown className={` `} />
                </li>

                {openSub && (
                  <div className="flex flex-col gap-3 w-max pl-8">
                    {subMenu_solutions?.map((sub, id) => (
                      <ul ref={dropdownRef} key={id}>
                        <Link
                          href={sub?.link}
                          onClick={() => setOpenMenu(!openMenu)}
                        >
                          <li className={`${styles.archivo} list-disc`}>
                            {locale === "en" ? sub?.name : sub?.nameBn}
                          </li>
                        </Link>
                      </ul>
                    ))}
                  </div>
                )}

                <Link
                  href="/pricing"
                  onClick={() => setOpenMenu(!openMenu)}
                  className="nav-link hover:text-[#f1593a] duration-300 w-max"
                >
                  <li className={`${styles.archivo} `}>
                    {locale === "en" ? "Pricing" : "মূল্য তালিকা"}
                  </li>
                </Link>

                <Link
                  href="/services"
                  onClick={() => setOpenMenu(!openMenu)}
                  className="nav-link hover:text-[#f1593a] duration-300 w-max"
                >
                  <li className={`${styles.archivo} `}>
                    {locale === "en" ? "Services" : "সার্ভিস সমূহ"}
                  </li>
                </Link>


                <li
                  onClick={() => {
                    setOpenSub(false);
                    setOpen(!open);
                  }}
                  className={`${styles.archivo} ${
                    open && "text-[#f1593a] border-b border-[#f1593a]"
                  } group flex items-center gap-2 lg:cursor-pointer w-max`}
                >
                  <span className={`${styles.archivo}`}>
                    {locale === "en" ? "Resources" : "রিসোর্সেস"}
                  </span>
                  <IoIosArrowDown className={` `} />
                </li>

                {open && (
                  <div className="flex flex-col gap-3 w-max pl-8">
                    {subMenu_resource?.map((sub, id) => (
                      <ul key={id}>
                        {sub?.name === "Video" ? (
                          <a href={sub?.link} target="_blank">
                            <li className={`${styles.archivo} list-disc`}>
                              {locale === "en" ? sub?.name : sub?.nameBn}
                            </li>
                          </a>
                        ) : (
                          <Link
                            href={sub?.link}
                            onClick={() => setOpenMenu(!openMenu)}
                          >
                            <li className={`${styles.archivo} list-disc`}>
                              {locale === "en" ? sub?.name : sub?.nameBn}
                            </li>
                          </Link>
                        )}
                      </ul>
                    ))}
                  </div>
                )}

                <Link
                  href="/contact"
                  onClick={() => setOpenMenu(!openMenu)}
                  className="nav-link hover:text-[#f1593a] duration-300 w-max"
                >
                  <li className={`${styles.archivo} `}>
                    {locale === "en" ? "Contact" : "যোগাযোগ করুন"}
                  </li>
                </Link>

                <Link
                  href="/product-khujo"
                  onClick={() => setOpenMenu(!openMenu)}
                  className="bg-white border text-[#f1593a] border-[#f1593a] px-4 w-max h-[37px] duration-300 flex justify-center items-center"
                >
                  <li className={`${styles.archivo} `}>Product খুঁজো</li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="h-full w-full flex justify-center items-end pb-10">
            <div className="flex items-center gap-2">
              <LanguageChanger locale={locale} />
              <a href="https://admin.ebitans.com/login">
                <button
                  className={`group relative overflow-hidden rounded bg-[${ebitansColor}] w-[73px] h-[37px] shadow`}
                >
                  <div
                    className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}
                  ></div>
                  <span className={`${styles.archivo} relative text-white`}>
                    Login
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

const subMenu_resource = [
  {
    name: "eBitans Learning",
    nameBn: "নির্দেশনা",
    link: "/resources/ebitans-learning",
  },
  {
    name: "Video",
    nameBn: "ভিডিও",
    link: "https://www.youtube.com/@ebitans/videos",
  },
  {
    name: "Blog",
    nameBn: "ব্লগ",
    link: "/resources/blogs",
  },
  {
    name: "FAQ",
    nameBn: "জিজ্ঞাসা",
    link: "/resources/faq",
  },
];

const subMenu_solutions = [
  {
    name: "Product খুঁজো",
    nameBn: "Product খুঁজো",
    link: "/product-khujo",
  },
  {
    name: "Themes",
    nameBn: "থিম",
    link: "/solutions/all-theme",
  },
];
