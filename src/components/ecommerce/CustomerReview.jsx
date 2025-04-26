"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import LandingButton from "./LandingButton";
// Activate autoplay
SwiperCore.use([Autoplay, Pagination]);

const CustomerReview = ({ scrollToRef }) => {
  const handleScroll = () => {
    if (scrollToRef?.current) {
      const topOffset =
        scrollToRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offset = -200; // adjust this value to scroll a bit higher (try -80 to -150 as needed)

      window.scrollTo({
        top: topOffset + offset,
        behavior: "smooth",
      });
    }
  };

  const reviewImages = [
    {
      img: "/image/customer-review1.webp",
      link: "https://watchtimebd.com",
    },
    {
      img: "/image/customer-review2.webp",
      link: "https://savantstylefashion.com",
    },
    {
      img: "/image/customer-review3.webp",
      link: "https://nayeil.com",
    },
    {
      img: "/image/customer-review4.webp",
      link: "http://kc.design",
    },
    {
      img: "/image/customer-review5.webp",
      link: "https://blgbd.com",
    },
    {
      img: "/image/customer-review6.webp",
      link: "https://10starbd.com",
    },
    {
      img: "/image/customer-review7.webp",
      link: "https://uncleflix.com",
    },
  ];

  return (
    <div>
      <div className="container px-5 lg:px-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center px-2 md:px-10 py-4 my-10 bg-[#f1593a] text-white rounded-md shadow-lg shadow-slate-600">
          eBitans এর সার্ভিস সম্পর্কে সম্মানিত গ্রাহকদের কিছু মন্তব্য
        </h1>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviewImages.map(({ img, link }, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg overflow-hidden shadow-md mb-10">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={img}
                    alt={`Customer Review ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center my-12">
        <LandingButton
          onClick={handleScroll}
          label="ওয়েবসাইট তৈরি করুন এখনই"
          heartbeat={true}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default CustomerReview;
