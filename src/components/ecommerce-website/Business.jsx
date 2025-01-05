import Image from 'next/image'
import images from '@/lib/images'
import Testimonial from './Testimonial'

const Business = () => {
    return (
        <div className='lg:grid grid-cols-5 gap-x-5 pt-5 pb-5 lg:pt-10 lg:pb-20 container px-5 lg:px-10'>
            <div className='col-span-3 h-full lg:grid grid-cols-1 gap-10'>
                <div className=''>
                    <h1 className='lg:text-[40px] text-[30px] font-bold'>Make your website grow into a successful online business.</h1>
                    <p className='my-10 text-lg'>Transform your business into a brand. Sell globally Build locally.</p>
                    <div className='relative w-max'>
                        <a href='https://admin.ebitans.com/register'><p className={`py-3 px-6 font-medium tracking-widest text-white bg-[#f1593a] rounded border-2 border-[#f1593a] hover:text-[#f1593a] hover:bg-white lg:cursor-pointer shadow-[5px_5px_1px_1px_black] hover:shadow-none duration-500 w-full`}>Get Started Now</p></a>
                    </div>
                </div>
                <div>
                    <Image width={500} height={500} src={images?.business} alt="ebitans image" className='mx-auto lg:hidden mt-5 h-full w-full' />
                </div>
                <div className='grid sm:grid-cols-2 gap-x-5 gap-y-5 my-5 lg:my-0'>
                    <div className='px-8 pb-5 pt-5 sm:pt-40 bg-[#FAD8D1] bg-opacity-50'>
                        <h1 className='text-xl font-semibold mb-3'>Easy to create and maintain</h1>
                        <p>Transform your business into a brand. Sell globally Build locally.</p>
                    </div>
                    <div className='px-8 pb-5 pt-5 sm:pt-40 bg-[#FCF4E8] bg-opacity-50'>
                        <h1 className='text-xl font-semibold mb-3'>Features that help you to grow</h1>
                        <p>Transform your business into a brand. Sell globally Build locally.</p>
                    </div>
                </div>
            </div>

            <div className='w-full h-full col-span-2 grid grid-cols-1 place-items-end gap-3'>
                <Image width={500} height={500} src={images?.business} alt="ebitans image" className='mx-auto h-full w-full lg:block hidden' />
                <div className='bg-[#E8FCEF] h-max'>
                    <div className=''>
                        <Testimonial />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business