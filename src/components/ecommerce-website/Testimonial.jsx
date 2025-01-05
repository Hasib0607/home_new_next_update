"use client"
import images from "@/lib/images";
import Image from "next/image";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Testimonial = () => {

    return (
        <div className='relative w-full p-5 lg:p-3 '>
            <div className='h-full w-full'>
                <div className="h-full w-full">
                    <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={sliderData.length}>
                        <Slider>
                            {
                                sliderData?.map((review, index) =>
                                    <Slide key={index} tabIndex="null">
                                        <div className="">
                                            <div className="lg:space-y-3 space-y-4">
                                                <div className="relative">
                                                    <Image src={review?.image} alt="ebitans image" className="h-auto w-10 object-fit object-cover rounded" />
                                                </div>

                                                <p className="text-sm text-gray-600">{review.desc}</p>

                                                <div className="md:mt-0 mt-8">
                                                    <p className="text-base font-bold leading-4 text-gray-900">{review.name}</p>
                                                    <p className="text-base leading-4 mt-2 mb-4 text-gray-600">{review.occupation}</p>
                                                </div>

                                            </div>
                                        </div>
                                    </Slide>)}

                        </Slider>
                        <div className="flex items-center mt-8 absolute right-20 bottom-7">
                            <ButtonBack className="lg:cursor-pointer " role="button" aria-label="previous slide">
                                <Image width={500} height={500} className="h-full w-full" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg" alt="previous" />
                            </ButtonBack>

                            <ButtonNext role="button" aria-label="next slide" className="lg:cursor-pointer ml-2">
                                <Image width={500} height={500} className="h-full w-full" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg" alt="next" />
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;

const sliderData = [
    {
        desc: 'Ebitans is our preferred e-commerce website builder. We have used the platform to create coffee vendor stores, to sell downloads, and even to take payments for a local private investigator.',
        name: 'Ashiqur Rahman',
        occupation: 'Product Designer',
        image: images?.user1
    },
    {
        desc: 'Ebitans is our preferred e-commerce website builder. We have used the platform to create coffee vendor stores, to sell downloads, and even to take payments for a local private investigator.',
        name: 'Humayon Kabir',
        occupation: 'Web Developer',
        image: images?.user1
    },
]