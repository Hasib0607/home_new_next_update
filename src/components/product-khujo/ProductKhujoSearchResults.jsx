"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { ebitansColor } from '@/lib/ebitansColor';
import images from '@/lib/images';
import SearchResult from './SearchResult';
import Loading from '@/app/[locale]/loading';
import { fetchIp } from '@/helper/api';
import { getFromSessionStorage, saveToSessionStorage } from '@/lib/sessionstorage';

const ProductKhujoSearchResults = ({ params, category }) => {

    const [searchTxt, setSearchTxt] = useState(params?.search || '');
    const [catSlug, setCatSlug] = useState(params?.category_slug);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [isDivVisible, setIsDivVisible] = useState(false);
    const [ip, setIp] = useState(getFromSessionStorage('ip'));
    const myDivRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        setCatSlug(params?.category_slug)
    }, [params?.category_slug])

    useEffect(() => {
        fetchIp()
            .then(data => {
                setIp(data)
                saveToSessionStorage("ip", data)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [])

    useEffect(() => {
        const options = {
            root: null, // use the viewport as the root
            rootMargin: '0px', // no margin around the viewport
            threshold: 0 // detect when the div is completely out of view
        };

        const observer = new IntersectionObserver(([entry]) => {
            setIsDivVisible(!entry.isIntersecting);
        }, options);

        const myDiv = myDivRef.current;
        if (myDiv) {
            observer.observe(myDiv);
        }

        return () => {
            if (myDiv) {
                observer.unobserve(myDiv);
            }
        };
    }, []);

    // category select option 
    const handleOptionChange = (event) => {
        router.push(`/product-khujo/category/${event.target.value}`)
        setCatSlug(event.target.value);
        setSearchTxt('')
        setPage(1)
        setHasMore(true)
        setLoading(true)
        setSearchTxt('')
    }

    // search text value 
    const handleChange = (event) => {
        router.push(`/product-khujo/category/${catSlug}/${event.target.value}`)
        setSearchTxt(event.target.value);
        setPage(1)
        setHasMore(true)
        setLoading(true)
    };

    return (
        <>
            <div className='shadow-lg fixed top-0 left-0 w-full bg-white z-10'>
                <div className='lg:h-[85px] h-[50px] flex justify-between items-center container px-5 lg:px-10'>
                    <Link href="/product-khujo"><Image src={images?.darkPse} alt="ebitans image" className='lg:h-12 h-7 w-auto' /></Link>
                    <div className={`${isDivVisible ? "translate-y-0" : "-translate-y-20"} hidden lg:flex duration-500 border border-gray-400 rounded md:w-[70%] sm:w-[85%] w-[95%]  justify-between overflow-hidden bg-white`}>
                        <div className='flex items-center px-1 relative'>
                            <select name="" id="" value={catSlug} onChange={handleOptionChange} className='bg-white border-0 focus:ring-0 focus:outline-none focus:border-0 w-full max-w-[250px] lg:cursor-pointer'>
                                {category?.map(item =>
                                    <option key={item?.id} value={item?.slug}>{item?.name}</option>
                                )}
                            </select>
                            {/* <IoMdArrowDropdown /> */}
                            <p className='absolute w-[1px] h-16 right-0 -top-2 bg-black'></p>
                        </div>
                        <input value={searchTxt} onChange={handleChange} type="text" className='w-[95%] bg-white pl-5 outline-none border-gray-500 border-0 p-0 focus:ring-0 focus:outline-none focus:border-0 focus:border-gray-500' />

                        <div className='px-5 py-1 lg:cursor-pointer'>
                            <AiOutlineSearch className='text-3xl' />
                        </div>
                    </div>
                    <a href="https://admin.ebitans.com/register">
                        <button className={`group relative overflow-hidden rounded bg-[${ebitansColor}] px-4 h-[37px] shadow`}>
                            <div className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}></div>
                            <span className={`relative text-white`}>Registration</span>
                        </button>
                    </a>
                </div>
            </div>
            <div className='lg:pt-[85px] pt-[50px] mb-10 min-h-screen'>
                <div className="mb-10">
                    {category?.map(item =>
                        <div key={item?.id}>
                            {(item?.slug === catSlug) && <Image src={item?.banner} width={500} height={500} alt="ebitans image" className='h-auto min-w-full object-cover' />}
                        </div>
                    )}
                </div>
                <div ref={myDivRef} className='flex justify-center sticky lg:relative z-[1] h-max top-[50px] lg:top-0 left-0 w-full container sm:px-5 lg:px-10 px-2 bg-[#F9F7F6] py-1'>
                    <div className='border border-gray-400 rounded lg:rounded-full xl:w-[50%] sm:w-[85%] w-full flex items-center justify-between overflow-hidden bg-[#D9D9D9]'>
                        <div className='flex items-center lg:pl-5 pl-1 pr-1 relative'>
                            <select name="" id="" value={catSlug} onChange={handleOptionChange} className='bg-[#D9D9D9] border-0 focus:ring-0 focus:outline-none focus:border-0 w-full max-w-[250px] lg:cursor-pointer'>
                                {category?.map(item =>
                                    <option key={item?.id} value={item?.slug}>{item?.name}</option>
                                )}
                            </select>
                            <p className='absolute w-[1px] h-16 right-0 -top-2 bg-black'></p>
                        </div>
                        <input value={searchTxt} onChange={handleChange} autoFocus type="text" className='w-[95%] bg-[#D9D9D9] pl-5 outline-none border-gray-500 border-0 p-0 focus:ring-0 focus:outline-none focus:border-0 focus:border-gray-500' />

                        <div className='px-5 py-1 lg:cursor-pointer'>
                            <AiOutlineSearch className='text-3xl' />
                        </div>
                    </div>
                </div>

                <div className='container px-5 lg:px-10 py-10'>
                    <div>
                        {category?.map(item =>
                            <div key={item?.id}>
                                {(item?.slug ===catSlug) && <h1 className='pb-5 text-2xl text-gray-500'>{item?.name}</h1>}
                            </div>
                        )}
                    </div>
                    <Suspense fallback={<div><Loading /></div>}>
                        <SearchResult category={category} setHasMore={setHasMore} setPage={setPage} setLoading={setLoading} loading={loading} page={page} hasMore={hasMore} ip={ip} catSlug={catSlug} searchTxt={searchTxt} />
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default ProductKhujoSearchResults