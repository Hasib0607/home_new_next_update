"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../../i18nConfig";

export default function LanguageChanger({ locale }) {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const language = locale;

  const handleChange = (e) => {
    const newLocale = e;
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <>
      {/* <select onChange={handleChange} value={currentLocale} className='border rounded border-[#f1593a] h-[37px] focus:ring-0 focus:outline-none'>
                <option value="en">English</option>
                <option value="bn">Bangla</option>
            </select> */}
      <div
        className={`w-[73px] h-[37px] border rounded border-[#f1593a] flex items-center justify-center gap-2`}
      >
        <span
          onClick={() => handleChange("bn")}
          className={`${
            language === "bn"
              ? "text-[#f1593a] font-semibold"
              : "text-[#726865]"
          } lg:cursor-pointer `}
        >
          BN
        </span>
        <span
          onClick={() => handleChange("en")}
          className={`${
            language === "en"
              ? "text-[#f1593a] font-semibold"
              : "text-[#726865]"
          } lg:cursor-pointer`}
        >
          EN
        </span>
      </div>
    </>
  );
}
