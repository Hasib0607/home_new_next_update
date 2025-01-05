
const CreateWebsite = () => {
    return (
        <div className='container px-5 lg:px-10 lg:py-20 py-5'>
            <div className='bg-[#F1593A] lg:px-10 px-5 lg:py-20 py-14 rounded-lg'>
                <div className='grid lg:grid-cols-2 gap-5 place-items-center'>
                    <div className='text-white'>
                        <h1 className='lg:text-[65px] text-[40px] font-bold leading-[45px] lg:leading-[70px] mb-5'>Take steps to grow your business faster</h1>
                        <p>Transform your business into a brand. Sell globally Build locally.</p>
                    </div>
                    <div>
                        <div className='relative w-max'>
                            <a href='https://admin.ebitans.com/register'><p className={`py-4 px-6 font-semibold tracking-widest text-[#f1593a] bg-[#F6E8E5] rounded border-2 border-[#F6E8E5] hover:text-[#f1593a] hover:bg-white lg:cursor-pointer shadow-[5px_5px_1px_1px_black] hover:shadow-none duration-500 w-full`}>Let’s Create a Website</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateWebsite