"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

// Activate autoplay
SwiperCore.use([Autoplay]);

const CustomerReview = () => {
  const reviewImages = [
    "/image/customer-review1.png",
    "/image/customer-review2.png",
    "/image/customer-review3.png",
    "/image/customer-review4.png",
    "/image/customer-review5.png",
    "/image/customer-review6.png",
    "/image/customer-review7.png",
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
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviewImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg overflow-hidden shadow-md mb-10">
                <img
                  src={img}
                  alt={`Customer Review ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReview;
