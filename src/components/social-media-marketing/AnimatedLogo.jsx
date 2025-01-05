"use client"
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Logo1 from '@/assets/images/Logo-1.jpg'
import Logo2 from '@/assets/images/Logo-2.jpg'
import Logo3 from '@/assets/images/Logo-3.jpg'
import Logo4 from '@/assets/images/Logo-4.png'
import Logo5 from '@/assets/images/Logo-5.png'
import Logo6 from '@/assets/images/Logo-6.jpg'
import Logo7 from '@/assets/images/Logo-7.png'


const AnimatedLogo = () => {
    return (
        <div className='py-3 bg-white'>
            <Marquee>
                <Image src={Logo2} alt="" className='h-40 w-auto px-10' />
                <Image src={Logo3} alt="" className='h-40 w-auto px-10' />
                <Image src={Logo4} alt="" className='h-28 w-auto px-10' />
                <Image src={Logo5} alt="" className='h-32 w-auto px-10' />
                <Image src={Logo1} alt="" className='h-40 w-auto px-10' />
                <Image src={Logo6} alt="" className='h-40 w-auto px-10' />
                <Image src={Logo7} alt="" className='h-48 w-auto px-10' />
            </Marquee>
        </div>
    )
}

export default AnimatedLogo