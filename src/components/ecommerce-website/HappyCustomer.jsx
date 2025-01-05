"use client"
import images from '@/lib/images';
import Image from 'next/image';
import { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const HappyCustomer = () => {

    const [counter, setCounter] = useState(false)

    const styleCss = `
    .bg-color-happy{
        background: linear-gradient(to bottom right, rgba(246, 207, 199, 1) 0%, rgba(255, 255, 255, 1) 100%);
    }
  `

    return (
        <div className='container px-5 lg:px-10 lg:py-20 py-5'>
            <style>{styleCss}</style>
            <div className='grid lg:grid-cols-2 gap-5'>
                <div className=''>
                </div>
                <div className=''>
                    <h1 className='lg:text-[40px] text-[30px] font-bold'>Maximum integration at a minimum cost</h1>
                    <p className='my-10 text-lg'>Sign up for a free affiliate program link. And whenever a new merchant upgrades to an eBitans paid plan through your link,  you’ll receive a 20% commission for the life of their store. Plus, you’ll get access to our affiliate dashboard to track all your referrals, and watch your earnings grow.</p>
                </div>
            </div>
            <div className=''>
                <Image width={500} height={500} src={images?.pc} alt="ebitans image" className='lg:hidden mx-auto h-full w-full' />
            </div>
            <ScrollTrigger onEnter={() => setCounter(true)}>
                <div className='bg-[#F1593A] px-5 py-10 grid lg:grid-cols-2 rounded-lg mt-5'>
                    <div className='relative'>
                        <Image width={500} height={500} src={images?.pc} alt="ebitans image" className='lg:absolute hidden lg:block lg:-top-[400px] left-0 h-auto w-auto' />
                    </div>
                    <div className='flex gap-5 justify-around'>
                        <div>
                            <div className='sm:text-[50px] md:text-[65px] font-bold text-white'>
                                {counter && <CountUp start={0} end={1700} delay={0.5} />}
                                <span>+</span>
                            </div>
                            <p className='text-white sm:text-2xl'>Happy Customer</p>
                        </div>
                        <div>
                            <div className='sm:text-[50px] md:text-[65px] font-bold text-white'>
                                {counter && <CountUp start={0} end={240} delay={0.5} />}
                                <span>k+</span>
                            </div>
                            <p className='text-white sm:text-2xl'>Social Reach</p>
                        </div>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    )
}

export default HappyCustomer
