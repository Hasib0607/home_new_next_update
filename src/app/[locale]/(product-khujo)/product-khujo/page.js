import Image from "next/image"
import ProductSearch from "@/components/product-khujo/ProductSearch"
import PseCategory from "@/components/product-khujo/PseCategory"
import images from "@/lib/images"
import Link from "next/link"
import { ebitansColor } from "@/lib/ebitansColor"
import Registration from "@/components/pricing/Registration"
import { fetchPseCategory } from "@/helper/api"

export const metadata = {
    title: "Product খুঁজো",
    description: "The Ebitans product খুঁজো page makes it easy to find exactly what you're looking for in your online shopping journey. Whether you have a specific product in mind or are browsing different categories, our intuitive search features help you refine your results and find the best deals in Bangladesh.",
  };


const ProductKhujo = async () => {

    const category = (await fetchPseCategory()) ?? []

    return (
        <>
            <div className='shadow-lg fixed z-[9] top-0 left-0 w-full bg-white lg:h-[85px] h-[50px] flex items-center'>
                <div className='h-14 lg:h-16 flex justify-between items-center container px-5 lg:px-10'>
                    <Link href="/product-khujo"><Image src={images?.darkPse} alt="ebitans image" className='lg:h-12 h-7 w-auto' /></Link>
                    <a href="https://admin.ebitans.com/register">
                        <button className={`group relative overflow-hidden rounded bg-[${ebitansColor}] px-4 h-[37px] shadow`}>
                            <div className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}></div>
                            <span className={`relative text-white`}>Registration</span>
                        </button>
                    </a>
                </div>
            </div>
            <div className="sm:pt-[85px] pt-[50px]">
                <div className='border border-black'>
                    <div className="relative">
                        <Image src={images?.PseImgBanner} alt="ebitans image" className='h-auto min-h-[400px] min-w-full object-cover' />
                        <div className='flex flex-col items-center justify-center gap-5 sm:gap-10 absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <div>
                                <Image src={images?.darkPse} alt="ebitans image" className='h-20 sm:h-28 w-auto' />
                            </div>
                            <div>
                                <h1 className='text-2xl sm:text-4xl font-bold tracking-widest text-center w-full'>Products Search Engine</h1>
                            </div>
                            <ProductSearch />
                        </div>
                    </div>
                </div>
                <PseCategory category={category} />
                <div className='container px-5 lg:px-10'>
                    <Registration />
                </div>
            </div>
        </>
    )
}

export default ProductKhujo