import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import images from '@/lib/images'

const CompanyLogo = () => {
    const brands = [images.Bayezid, images.Kidz_Craze, images.comfy, images.gurushop, images.stylekit, images.tas_logo, images.wafashion]
    const styleCss = `
    .logo-scroll::-webkit-scrollbar {
        display: none;
      }
  `
    return (
        <section className='lg:pt-[60px] lg:pb-40 py-10 lg:py-0'>
            <style>{styleCss}</style>
            <Marquee gradient={false} speed={30} className='logo-scroll !overflow-hidden'>
                {
                    brands?.map((items, id)=>
                        <div key={id} className='company-image relative mx-10 lg:mx-24 group h-20 lg:h-32'>
                            <Image placeholder='blur' src={items} alt="ebitans image" className='h-16 w-auto grayscale group-hover:grayscale-0' />
                            <Image placeholder='blur' src={items} alt="ebitans image" className='h-16 w-auto absolute top-[50%] left-0 scale-y-[-1] opacity-10 grayscale group-hover:grayscale-0' />
                            <div className='absolute left-0 top-[50%] w-full h-full bg-gradient-to-t from-[#F9F7F6] to-transparent'></div>
                        </div>
                    )
                }

            </Marquee>
        </section>
    )
}

export default CompanyLogo