"use client";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import user1 from "@/assets/images/affiliate/user1.png";
import Image from "next/image";

const Testimonal = () => {
  return (
    <div className="relative lg:h-[400px] w-full p-10">
      <div className="h-full w-full">
        <div className="h-full w-full">
          <CarouselProvider
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={sliderData.length}
          >
            <Slider>
              {sliderData?.map((review, index) => (
                <Slide key={index} tabIndex="null">
                  <div className="">
                    <div className="space-y-8">
                      <div className="relative">
                        <Image
                          width={500}
                          height={500}
                          src={review?.image}
                          alt="ebitans image"
                          className="h-auto w-auto object-fit object-cover rounded"
                        />
                      </div>

                      <p className="text-sm text-gray-600">{review.desc}</p>

                      <div className="md:mt-0 mt-8">
                        <p className="text-base font-bold leading-4 text-gray-900">
                          {review.name}
                        </p>
                        <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                          {review.occupation}
                        </p>
                      </div>
                    </div>
                  </div>
                </Slide>
              ))}
            </Slider>
            <div className="flex items-center mt-8 lg:absolute right-20 bottom-3">
              <ButtonBack
                className="lg:cursor-pointer "
                role="button"
                aria-label="previous slide"
              >
                <Image
                  width={500}
                  height={500}
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg"
                  alt="previous"
                  className="h-auto w-auto"
                />
              </ButtonBack>

              <ButtonNext
                role="button"
                aria-label="next slide"
                className="lg:cursor-pointer ml-2"
              >
                <Image
                  width={500}
                  height={500}
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                  alt="next"
                  className="h-auto w-auto"
                />
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;

const sliderData = [
  {
    desc: "Ebitans is our preferred e-commerce website builder. We have used the platform to create coffee vendor stores, to sell downloads, and even to take payments for a local private investigator. The flexibility and great e-commerce features of the solution, combined with how easy it is to use for us and our customers, makes the Web Partner program perfect for our business.",
    name: "Ashiqur Rahman",
    occupation: "Product Designer",
    image: user1,
  },
  {
    desc: "Ebitans is our preferred e-commerce website builder. We have used the platform to create coffee vendor stores, to sell downloads, and even to take payments for a local private investigator.",
    name: "Humayon Kabir",
    occupation: "Web Developer",
    image: user1,
  },
];
