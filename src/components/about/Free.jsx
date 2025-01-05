
const Free = () => {

    return (
        <div className='bg-[#ffdcd4] '>
            <div className='container px-5 lg:px-10 flex md:flex-row flex-col gap-5 md:justify-between justify-center py-32'>
            <div className='flex items-center justify-center text-center sm:text-left'>
                <h1> <span className='font-semibold lg:text-3xl text-xl sm:text-2xl'> Get your e-commerce today...!</span><br/>
                <span className='font-semibold lg:text-3xl text-xl sm:text-2xl'>Get started absolutely FREE.</span></h1>
            </div>
            <div className=''>
               <div className="mt-10 sm:mt-0">
                    <div className="flex justify-center md:justify-end">
                        <a href="https://admin.ebitans.com/register" className="bg-[#f1593a] text-white font-semibold text-sm sm:text-xl px-12 text-center hover:text-[#f1593a] border-2 border-[#f1593a] py-4 hover:bg-[#ffdcd4] rounded shadow-[3px_3px_1px_1px_black] hover:shadow-none duration-500">FREE REGISTER NOW</a>
                    </div>
                    <p className='text-center md:text-right mt-2'>To get FREE e-commerce website, no credit card or payemnt required.</p>
               </div>
            </div>
            </div>
       </div>
        );
    };


export default Free;