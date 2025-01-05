import images from '@/lib/images';
import Image from 'next/image';
import styles from "./home.module.css"
import Testimonial from './Testimonial';

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Elena Mehjabin",
            company: "Hungry Bazar",
            image: images?.user1,
            rating: 5,
            video: "",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        },
        {
            id: 2,
            name: "Elena Mehjabin",
            company: "Hungry Bazar",
            image: images?.user1,
            rating: 5,
            video: "https://www.youtube.com/embed/6XRokTR92Ik?si=zg84ssT_ohlAv9-U",
            text: "",
        },
        {
            id: 3,
            name: "Elena Mehjabin",
            company: "Hungry Bazar",
            image: images?.user1,
            rating: 5,
            video: "",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        },
        {
            id: 4,
            name: "Elena Mehjabin",
            company: "Hungry Bazar",
            image: images?.user1,
            rating: 5,
            video: "https://www.youtube.com/embed/6XRokTR92Ik?si=zg84ssT_ohlAv9-U",
            text: "",
        },
        {
            id: 5,
            name: "Elena Mehjabin",
            company: "Hungry Bazar",
            image: images?.user1,
            rating: 5,
            video: "",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        },
        {
            id: 6,
            name: "Elena Mehjabin",
            company: "Hungry Bazar",
            image: images?.user1,
            rating: 5,
            video: "https://www.youtube.com/embed/6XRokTR92Ik?si=zg84ssT_ohlAv9-U",
            text: "",
        },
    ];

    return (
        <section className='relative overflow-hidden'>
            <div className={`absolute -right-32 lg:-right-20 top-14 lg:top-20 z-[5] w-[345px] h-[345px] bg-[#F3BEB3] bg-opacity-50 blur-3xl rounded-full`}></div>
            <div className='container px-5 lg:px-10'>
                <div className='relative'>
                    <div className='relative lg:pt-40 pt-20'>
                        <h2 className={`${styles.power} ${styles.headerOne} text-center`}>TESTIMONIALS</h2>
                        <div className='-mt-5 lg:-mt-16 relative z-[1] text-center'>
                            <p className={`${styles.archivo} ${styles.paragraph} tracking-[5px] lg:tracking-[10px] text-base`}>PEOPLE WHO BELIEVE</p>
                            <h2 className={`${styles.archivo} ${styles.headerTwo}`}>Real Stories from Real Customers</h2>
                        </div>
                        <div className='absolute bg-gradient-to-t from-[#F9F7F6] top-0 left-0 w-full h-full'></div>
                        <Image src={images?.user1} alt="ebitans image" className='absolute h-4 lg:h-auto w-auto top-14 lg:top-20 left-[62%]' />
                        <Image src={images?.user2} alt="ebitans image" className='absolute h-4 lg:h-auto w-auto bottom-5 lg:bottom-0 left-[80%]' />
                        <Image src={images?.user3} alt="ebitans image" className='absolute h-4 lg:h-auto w-auto left-[15%] bottom-0 lg:-bottom-5' />
                        <Image src={images?.user4} alt="ebitans image" className='absolute h-4 lg:h-auto w-auto left-[45%] -bottom-10 lg:-bottom-32' />
                    </div>
                </div>
            </div>

            <div>
                {testimonials?.length > 0 ?
                    <Testimonial testimonials={testimonials} />
                    :
                    <p>Loading testimonials...</p>
                }
            </div>
        </section>
    );
}
