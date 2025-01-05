"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";
import { FaArrowRightLong } from "react-icons/fa6";
import { themeImg } from "@/constants/imageUrl";
import Rate from "@/lib/Rate";

const ThemeSlider = ({ data }) => {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const styleCss = `

    .swiper-pagination-news {
      position: absolute;
      bottom: -30px !important;
      left: 50% !important;
      transform: translateX(-50%);
      width: auto !important;
      margin: 0;
      display: flex;
      z-index: 1;
      gap: 5px;
  }
  
  .swiper-pagination-news .swiper-pagination-bullet {
      border-radius: 0%;
      width: 15px;
      height: 2px;
      opacity: 1;
      background: gray;
  
  }
  
  .swiper-pagination-news .swiper-pagination-bullet-active {
      width: 25px;
      height: 2px;
      border-radius: 0px;
      transition-duration: 500ms;
      background: white;

  }
    `
    return (
        <>
            {isClient ?
                <div>
                    <style>{styleCss}</style>
                    <div>
                        <div className='swiper-pagination-news'></div>
                    </div>

                    <Swiper
                        loop={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2000,
                        }}
                        spaceBetween={30}
                        // pagination={pagination}
                        modules={[FreeMode, Pagination, Autoplay]}
                        breakpoints={{
                            350: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1440: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className="mySwiper"

                    >
                        {
                            data?.map((item) =>
                                <SwiperSlide key={item?.id}>
                                    <Template item={item} />
                                </SwiperSlide>

                            )
                        }
                    </Swiper>
                </div>
                :
                null
            }
        </>
    )
}

export default ThemeSlider

const Template = ({ item }) => {

    return (
        <a href={item?.liveurl} target="_blank" rel="noopener noreferrer"><div className='shadow-md rounded-md p-2 bg-gray-100 border-[2px] border-black'>
            <div className='relative border-1 group bg-slate-900 bg-blend-multiply portfoliocard' >
                <div className='w-full h-full pb-2 bg-gray-50' >
                    <Image unoptimized={true} width={1920} height={1080} className='rounded-t h-auto min-w-full group-hover:bg-blend-darken group-hover:opacity-10 transition duration-150 ease-out group-hover:ease-in' src={themeImg + item?.feature_image} alt="ebitans image" />
                    <div className='absolute inset-0 text-sm group-hover:flex justify-center items-center hidden lg:cursor-pointer'>
                        <h2 className=' text-black font-semibold hover:pr-4 pr-0 duration-500 hover:tracking-widest' >View Demo</h2>
                        <FaArrowRightLong className="" />
                    </div>
                </div>
            </div>
            <h1 className=' bg-gray-100 mt-1 mb-[1px] px-2 sm:text-xl text-lg font-bold text-black hover:text-[#f1593a] lg:cursor-pointer'>{item.name}</h1>
            <h2 className=' bg-gray-100 mb-2 px-2 text-xs font-bold text-black'> Category: <span className='font-normal'>{item.category} </span></h2>

            <div>
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <h1 className=' bg-gray-100 mt-1 mb-1 px-2 sm:text-xl text-lg font-bold text-[#f1593a]'>{item?.is_premium === 'Paid' ? 'BDT:' : 'FREE'} {item.price === 0 ? '' : item.price} </h1>
                        <div className="flex items-center px-2">
                            <Rate rating={item?.review} />
                            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">({item.reviewer})</p>
                        </div>

                        <h2 className=' bg-gray-100 mt-1 mb-2 px-2 text-xs font-normal text-gray-600 hover:text-orange-500 lg:cursor-pointer'> {item.downlad} Downloded </h2>
                    </div>
                    <div className='flex items-end justify-end pr-2 pb-2'>
                        <p className='bg-[#fff] text-[#f1593a] font-semibold text-center rounded-md py-2 drop-shadow-lg shadow-md hover:text-[#fff] border-[#f1593a] hover:border-[#f1593a] hover:bg-[#f1593a] border-2 outline-0 duration-500 px-6'>
                            View Demo
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </a>
    )
}