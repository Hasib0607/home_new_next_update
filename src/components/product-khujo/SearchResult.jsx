"use client"
import { insertImagesSide } from "@/lib/insertImagesSide";
import InfiniteScroll from "react-infinite-scroll-component";
import { ThreeDots } from "react-loader-spinner";
import CardTwo from "./CardTwo";
import { baseUrl } from "@/constants/baseUrl";
import { useEffect, useState } from "react";

const SearchResult = ({ category, setHasMore, setPage, setLoading, loading, page, hasMore, ip, catSlug, searchTxt }) => {
    const [data, setData] = useState([])
    const [total, setTotal] = useState(null)
    const [bannerAds, setBannerAds] = useState([])

    const categoryId = category.find(item => item?.slug === catSlug)
    // banner Ads 
    const itemsArray = [];
    bannerAds?.forEach(item => {
        if (item.category_slugs.includes(catSlug)) {
            const itemData = {
                link: item?.link,
                banner: item?.banner,
                type: item?.image_type
            };
            itemsArray.push(itemData);
        }
    });

    const fetchAds = async () => {
        fetch(`${baseUrl}/pse/ads?page=${page}`)
            .then(res => res.json())
            .then(res => {
                if (res?.results?.length > 0) {
                    if (res?.current_page === 1) {
                        setBannerAds(res?.results)
                    }
                    else {
                        setBannerAds([...bannerAds, ...res?.results])
                    }
                }
                else {
                    if (res?.current_page === 1) {
                        setBannerAds([])
                    }
                }
            })
    }
    useEffect(() => {
        setTimeout(() => {
            if (catSlug) {
                fetchCatData()
            }
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [catSlug, searchTxt])

    const fetchCatData = async () => {
        // if (!searchTxt && !data.length) {
        //     setLoading(true)
        // }
        if (categoryId?.id === 28619 || categoryId?.id === 28622) {
            fetch(`${baseUrl}/pse/products/category?name=${searchTxt}&slug=${catSlug}&page=${page}`)
                .then(res => res.json())
                .then(res => {
                    setTotal(res?.total)
                    if (res?.results?.length > 0) {
                        if (res?.current_page === 1) {
                            setData(res?.results)
                        }
                        else {
                            setData([...data, ...res?.results])
                        }
                        setPage(page + 1)
                        setLoading(false)
                    }
                    else {
                        if (res?.current_page === 1) {
                            setData([])
                        }
                        setHasMore(false);
                        setPage(1)
                        setLoading(false)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
        else if (categoryId?.id === 28629 && ip) {
            fetch(`${baseUrl}/pse/products/top-pik-products?ip=${ip}&name=${searchTxt}&page=${page}`)
                .then(res => res.json())
                .then((res) => {
                    setTotal(res?.total)
                    if (res?.results?.length > 0) {
                        if (res?.current_page === 1) {
                            setData(res?.results)
                        }
                        else {
                            setData([...data, ...res?.results])
                        }
                        setPage(page + 1)
                        setLoading(false)
                    }
                    else {
                        if (res?.current_page === 1) {
                            setData([])
                        }
                        setHasMore(false);
                        setPage(1)
                        setLoading(false)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
        else {
            fetch(`${baseUrl}/pse/products/product-by-category?name=${searchTxt}&slug=${catSlug}&page=${page}`)
                .then(res => res.json())
                .then(res => {
                    setTotal(res?.total)
                    if (res?.results?.length > 0) {
                        if (res?.current_page === 1) {
                            setData(res?.results)
                        }
                        else {
                            setData([...data, ...res?.results])
                        }
                        setPage(page + 1)
                        setLoading(false)
                    }
                    else {
                        if (res?.current_page === 1) {
                            setData([])
                        }
                        setHasMore(false);
                        setPage(1)
                        setLoading(false)
                    }
                })
        }

        await fetchAds();
    }

    const portrait = itemsArray?.filter(item => item?.type !== "Landscape")
    const landscape = itemsArray?.filter(item => item?.type === "Landscape")


    const insertImages = () => {
        const gridItems = [];
        const usedBannerIndexes = [];
        data?.forEach((product, index) => {
            gridItems.push(
                <div key={product.id} className="">
                    <CardTwo key={product?.id} item={product} ip={ip} />
                </div>
            );

            // Check if the current index is a multiple of 10 (excluding 0) and not the last product
            if ((index + 1) % 10 === 0 && index !== 0 && landscape?.length > 0) {
                const imageIndex = Math.floor(index / 10) % landscape?.length;
                if (imageIndex !== undefined && !usedBannerIndexes.includes(imageIndex)) {
                    gridItems.push(
                        <div key={`image${index}`} className="col-span-full w-full">
                            <a href={landscape[imageIndex]?.link} target="_blank" rel="noopener noreferrer">
                                <img src={landscape[imageIndex]?.banner} alt={`images`} className='min-w-full h-auto ' />
                            </a>
                        </div>
                    );
                    usedBannerIndexes.push(imageIndex); // Mark the banner index as used
                }
            }
        });

        if (data?.length < 10 && landscape[0]?.banner) {
            gridItems.push(
                <div key={`imageFallback`} className="grid-item image-after-10 col-span-full">
                    <a href={landscape[0]?.link} target="_blank" rel="noopener noreferrer"><img src={landscape[0]?.banner} alt={``} className='min-w-full h-auto' /></a>
                </div>
            );
        }

        return gridItems;
    };



    return (
        <>
            {/* search result all product  */}
            {loading ?
                <div className='text-center text-4xl font-bold text-gray-400 flex justify-center items-center'>Loading</div> :
                <div>
                    {data?.length === 0 ?
                        <div className="mt-20">
                            {searchTxt && <h1 className='pb-5'>{total} results for <span className='font-bold text-red-400'>"{searchTxt}"</span></h1>}
                            <p className='text-center text-4xl font-bold text-gray-400 flex justify-center items-center'>No Product Found</p>
                        </div> :
                        <div className='grid lg:grid-cols-4 grid-cols-3 gap-5'>
                            <div className='col-span-3'>
                                {searchTxt && <h1 className='pb-5'>{total} results for <span className='font-bold text-red-400'>"{searchTxt}"</span></h1>}
                                <InfiniteScroll style={{ height: 'auto', overflow: 'hidden' }}
                                    hasMore={hasMore}
                                    loader={<div className='flex justify-center'><ThreeDots height="80" width="80" radius="9" color="#f1593a" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true} /></div>}
                                    dataLength={data?.length}
                                    next={fetchCatData}
                                    endMessage={
                                        <>
                                            <p className='text-center mt-20 text-xl'>আমরা দুঃখিত আপনার কাঙ্খিত পণ্যটি খুঁজে পাচ্ছেন না বলে।</p>
                                            <p className='text-center text-xl font-bold pb-3'>কয়েকদিন পর আবার চেষ্টা করার জন্য অনুরোধ করা হলো।</p>
                                        </>
                                    }
                                >
                                    <div className='grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 grid-cols-2 sm:gap-5 gap-1 h-max'>
                                        {insertImages(data, landscape, ip)}
                                    </div>
                                </InfiniteScroll>
                            </div>
                            <div className='hidden lg:block lg:col-span-1'>
                                {insertImagesSide(data, portrait)}
                            </div>
                        </div>
                    }
                </div>}
        </>
    )
}

export default SearchResult