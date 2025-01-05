"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react'
import styles from "../home.module.css"
import { fetchPseCategory } from '@/helper/api';
import { useRouter } from 'next/navigation';

const PseSearch = () => {
    const [searchTxt, setSearchTxt] = useState('');
    const [category, setCategory] = useState([])
    const router = useRouter();

    const allProductSlug = category?.find(item => item?.id === 33829)

    useEffect(() => {
        fetchPseCategory()
            .then(data => {
                setCategory(data)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [])

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            searchHandle();
        }
    }

    const searchHandle = () => {
        if (searchTxt) {
            router.push(`/product-khujo/category/${allProductSlug?.slug}/${searchTxt}`)
            setSearchTxt('')
        }
    }

    return (
        <>
            <div className='flex items-center gap-2 lg:gap-5 mt-8'>
                <input onChange={(e) => setSearchTxt(e.target.value)} onKeyPress={handleKeyPress} type="text" placeholder='Search your Products here' className={`lg:w-[260px] w-[200px] h-[34px] sm:h-[48px] text-[12px] lg:text-base shadow-2xl ${styles.archivo} placeholder:text-[#D3CDCB] border-[#D3CDCB] focus:border-[#D3CDCB] focus:outline-none focus:ring-0 rounded px-2`} />
                <button onClick={searchHandle} className={`group relative h-[34px] sm:h-[48px] lg:w-48 w-20 overflow-hidden rounded bg-[#F1593A] text-sm lg:text-lg shadow`}>
                    <div className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}></div>
                    <span className={`${styles.archivo} relative  text-white`}>Search</span>
                </button>
            </div>
        </>
    )
}

export default PseSearch