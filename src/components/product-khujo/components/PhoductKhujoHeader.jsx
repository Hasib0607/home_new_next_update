import { ebitansColor } from '@/lib/ebitansColor';
import images from '@/lib/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

const PhoductKhujoHeader = ({
  isIntersecting,
  text,
  handleSelect,
  handleChange,
  category,
  locale,
}) => {
  return (
    <div className="shadow-lg fixed top-0 left-0 w-full bg-white z-10">
      <div className="lg:h-[85px] h-[50px] flex justify-between items-center container px-5 lg:px-10">
        <Link href={`/${locale}/product-khujo`}>
          <Image
            src={images?.darkPse}
            alt="ebitans image"
            className="lg:h-12 h-7 w-auto"
          />
        </Link>
        <div
          className={`${
            isIntersecting ? "translate-y-0" : "md:-translate-y-20"
          } hidden lg:flex duration-500 border border-gray-400 rounded md:w-[70%] sm:w-[85%] w-[95%]  justify-between overflow-hidden bg-white`}
        >
          <div className="flex items-center px-1 relative">
            <select
              name=""
              id=""
              value={text.catSlug}
              onChange={handleSelect}
              className="bg-white border-0 focus:ring-0 focus:outline-none focus:border-0 w-full max-w-[250px] lg:cursor-pointer"
            >
              {category?.map((item) => (
                <option key={item?.id} value={item?.slug}>
                  {item?.name}
                </option>
              ))}
            </select>
            <p className="absolute w-[1px] h-16 right-0 -top-2 bg-black"></p>
          </div>
          <input
            value={text.searchTxt}
            onChange={handleChange}
            type="text"
            className="w-[95%] bg-white pl-5 outline-none border-gray-500 border-0 p-0 focus:ring-0 focus:outline-none focus:border-0 focus:border-gray-500"
          />

          <div className="px-5 py-1 lg:cursor-pointer">
            <AiOutlineSearch className="text-3xl" />
          </div>
        </div>
        <a href="https://admin.ebitans.com/register">
          <button
            className={`group relative overflow-hidden rounded bg-[${ebitansColor}] px-4 h-[37px] shadow`}
          >
            <div
              className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}
            ></div>
            <span className={`relative text-white`}>Registration</span>
          </button>
        </a>
      </div>
    </div>
  );
};


export default PhoductKhujoHeader