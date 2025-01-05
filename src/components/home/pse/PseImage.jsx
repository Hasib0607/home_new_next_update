"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import img1 from "@/assets/images/pse-home/01.webp"
import img2 from "@/assets/images/pse-home/02.webp"
import img3 from "@/assets/images/pse-home/03.webp"
import img4 from "@/assets/images/pse-home/04.webp"
import img5 from "@/assets/images/pse-home/05.webp"
import img6 from "@/assets/images/pse-home/06.webp"
import img7 from "@/assets/images/pse-home/07.webp"
import img8 from "@/assets/images/pse-home/08.webp"
import img9 from "@/assets/images/pse-home/09.webp"
import img10 from "@/assets/images/pse-home/10.webp"

const PseImage = () => {
    
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const pseImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

    const styleCss = `
    .slide-active-pse .swiper-slide-active {
     transition: 1s ease-in-out;
     scale: 2.5;
 }
 `
    return (
        <div>
            <style>{styleCss}</style>
            {isClient ? <Swiper
                autoplay={{ delay: 2500, autoplayDisableOnInteraction: false, reverseDirection: false, }}
                loop={true}
                centeredSlides={true}
                modules={[Pagination, Autoplay]}
                className="rotate-[270deg] mt-[90px] lg:mt-0 xl:rounded-full  xl:w-[500px] !overflow-visible lg:!py-40 slide-active-pse"
                speed={500}
                breakpoints={{
                    350: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1440: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1920: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                }}
            >
                {pseImages?.map((item, id) => <SwiperSlide key={id} >
                    <div className='flex justify-center items-center'>
                        <Image src={item} alt="productImage" unoptimized={true} className='xl:h-32 lg:h-24 h-14 w-auto -rotate-[270deg]' />
                    </div>
                </SwiperSlide>)}
            </Swiper> :
                null}
        </div>
    )
}

export default PseImage