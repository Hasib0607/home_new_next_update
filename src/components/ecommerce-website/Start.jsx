
const Start = () => {
    return (
        <div className='bg-[#FAD8D1] lg:pt-20 lg:pb-28 pb-10 pt-10'>
            <div className='container px-5 lg:px-10 relative z-[1] hidden lg:block'>
                <div className='flex justify-between items-center gap-x-10'>
                    <h1 className='xl:text-[130px] text-[100px] font-bold'>EASY TO</h1>
                    <div className='relative w-max'>
                        <a href='https://admin.ebitans.com/register'><p className={`py-3 px-6 font-medium tracking-widest text-white bg-[#f1593a] rounded border-2 border-[#f1593a] hover:text-[#f1593a] hover:bg-white lg:cursor-pointer shadow-[5px_5px_1px_1px_black] hover:shadow-none duration-500 w-full`}>Get Started Now</p></a>
                    </div>
                </div>
                <div>
                    <h1 className='xl:text-[130px] text-[100px] font-bold text-right'>MANUFACTURE</h1>
                </div>
                <div className='flex justify-between items-center gap-x-5'>
                    <h1 className='xl:text-[130px] text-[100px] font-bold w-full'>BEST FOR</h1>
                    <p className='xl:max-w-[350px] max-w-[250px]'>Become one of thousands of eBitans Affiliates and teach entrepreneurs how to build incredible businesses online with eBitans E-commerce.</p>
                </div>
                <div>
                    <h1 className='xl:text-[130px] text-[100px] font-bold text-right'>ENTREPRENEUR</h1>
                </div>
            </div>

            <div className='md:px-10 px-5 block lg:hidden '>
                <h1 className='text-[30px] font-bold'>EASY TO MANUFACTURE <br /> BEST FOR ENTREPRENEUR</h1>
                <p className='md:max-w-[350px] my-3'>Become one of thousands of eBitans Affiliates and teach entrepreneurs how to build incredible businesses online with eBitans E-commerce.</p>
                <div className='relative w-max'>
                    <a href='https://admin.ebitans.com/register'><p className={`py-3 px-6 font-medium tracking-widest text-white bg-[#f1593a] rounded border-2 border-[#f1593a] hover:text-[#f1593a] hover:bg-white lg:cursor-pointer shadow-[5px_5px_1px_1px_black] hover:shadow-none duration-500 w-full`}>Get Started Now</p></a>
                </div>
            </div>
        </div>
    )
}

export default Start