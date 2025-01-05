"use client"
import Link from 'next/link'
import Card from './Card'
import { SwiperSlide } from 'swiper/react'
import DefaultSlider from '../slider/DefaultSlider'
import Arrow from '../Arrow'

const TopSelling = ({ item, topSelling, ip }) => {
    const prev = 'topselling_pse_Prev'
    const next = 'topselling_pse_Next'
    return (
        <div>
            {item?.id === 28622 &&
                <div className='mt-10 bg-[#f4d9d4a2] sm:p-5 p-2 rounded-md'>
                    <div className='flex justify-between gap-3'>
                        <h1 className='font-semibold text-lg sm:text-2xl'>{item?.name}</h1>
                        <Link href={`/product-khujo/category/${item?.slug}`}><p className='underline sm:text-lg lg:cursor-pointer'>View More</p></Link>
                    </div>
                    <div className="my-1">
                        <Arrow prevEl={prev} nextEl={next}></Arrow>
                    </div>
                    <DefaultSlider
                        prevEl={prev}
                        nextEl={next}
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
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                            1440: {
                                slidesPerView: 6,
                                spaceBetween: 20,
                            },
                            1920: {
                                slidesPerView: 7,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {topSelling?.map((x) => (
                            <SwiperSlide key={x?.id}>
                                <Card item={x} ip={ip} />
                            </SwiperSlide>
                        ))}
                    </DefaultSlider>
                </div>
            }
        </div>
    )
}

export default TopSelling