"use client"
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from "./home.module.css"
import Rate from '@/lib/Rate';
import { memo, useEffect, useState } from 'react';

const Testimonial = ({ testimonials }) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <>
            {isClient ? <div className='lg:mt-48 mt-16 bg-[#F9F7F6] relative z-[3]'>
                <Swiper
                    autoplay={{ delay: 2500, autoplayDisableOnInteraction: false }}
                    loop={true}
                    centeredSlides={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    speed={1000}
                    breakpoints={{
                        350: {
                            slidesPerView: 1.5,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1440: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1920: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {testimonials?.map(item => <SwiperSlide key={item?.id} >
                        <div className='bg-white p-5 rounded-lg lg:rounded-3xl min-h-[430px] relative pb-20 border border-[#E0D4D1]'>
                            <Rate rating={item?.rating} />
                            <div className='mt-3'>
                                <p className={`${styles.archivo} ${styles.paragraph}`}>{item?.text}</p>
                                {item?.video && <iframe
                                    className="h-[280px] w-full rounded-lg"
                                    src={item?.video}
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    title="video"
                                />}
                            </div>
                            <div className='flex items-center gap-3 absolute bottom-5'>
                                <Image className='' src={item?.image} alt="ebitans image" />
                                <div>
                                    <h5 className={`${styles.archivo} ${styles.headerFive} font-bold`}>{item?.name}</h5>
                                    <p className={`${styles.archivo} ${styles.paragraph}`}>{item?.company}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)}
                </Swiper>
            </div> :
                null
            }

        </>

    )
}

export default memo(Testimonial)