"use client"
import { baseUrl } from "@/constants/baseUrl";
import { Suspense, useEffect, useState } from "react";
import NewStoreProducts from "./NewStoreProducts";
import FeatureProducts from "./FeatureProducts";
import EbitansRecommend from "./EbitansRecommend";
import TopSelling from "./TopSelling";
import OfferDeal from "./OfferDeal";
import TopPick from "./TopPick";
// import FlashSale from "./FlashSale";

const PseCatProduct = ({ category, ip }) => {
    const [newStore, setNewStore] = useState([]);
    const [featureProducts, setFeatureProducts] = useState([]);
    const [ebitansRecommend, setEbitansRecommend] = useState([]);
    const [topSelling, setTopSelling] = useState([]);
    const [offerDeal, setOfferDeal] = useState([]);
    // const [flashSale, setFlashSale] = useState([]);
    const [topPick, setTopPick] = useState([]);

    useEffect(() => {
        if (ip) {
            fetch(`${baseUrl}/pse/products/top-pik-products?ip=${ip}`)
                .then(res => res.json())
                .then((res) => {
                    setTopPick(res?.results)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ip])

    useEffect(() => {
        const categorySlugs = category?.filter(item => item.id === 28620 || item.id === 28621 || item.id === 28628).map(item => item.slug);
        const categoryIds = category?.filter(item => item.id === 28620 || item.id === 28621 || item.id === 28628).map(item => item.id);
        const categorySlug = category?.filter(item => item.id === 28619 || item.id === 28622).map(item => item.slug);
        const categoryId = category?.filter(item => item.id === 28619 || item.id === 28622).map(item => item.id);
        const fetchDataSequentially = () => {
            for (const categorySlug of categorySlugs) {
                fetch(`${baseUrl}/pse/products/product-by-category?slug=${categorySlug}`, { next: { revalidate: 10 } })
                    .then(res => res.json())
                    .then((res) => {
                        for (const catId of categoryIds) {
                            if (catId === 28620) {
                                setFeatureProducts(res?.results)
                            }
                            else if (catId === 28621) {
                                setEbitansRecommend(res?.results)
                            }
                            else if (catId === 28628) {
                                setOfferDeal(res?.results)
                            }
                        }

                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
            for (const categorySlugss of categorySlug) {
                fetch(`${baseUrl}/pse/products/category?slug=${categorySlugss}`, { next: { revalidate: 10 } })
                    .then(res => res.json())
                    .then((res) => {
                        for (const catId of categoryId) {
                            if (catId === 28619) {
                                setNewStore(res?.results)
                            }
                            else if (catId === 28622) {
                                setTopSelling(res?.results)
                            }
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
        fetchDataSequentially();
    }, []);

    return (
        <div className='mb-20 lg:mb-60'>
            {category?.map(item =>
                <div key={item?.id} className=''>
                    {newStore?.length > 0 &&
                        <Suspense fallback={<div className="py-1 text-xl text-gray-500">Loading</div>}>
                            <NewStoreProducts item={item} newStore={newStore} ip={ip} />
                        </Suspense>
                    }
                    {featureProducts?.length > 0 &&
                        <Suspense fallback={<div className="py-1 text-xl text-gray-500">Loading</div>}>
                            <FeatureProducts item={item} featureProducts={featureProducts} ip={ip} />
                        </Suspense>
                    }
                    {ebitansRecommend?.length > 0 &&
                        <Suspense fallback={<div className="py-1 text-xl text-gray-500">Loading</div>}>
                            <EbitansRecommend item={item} ebitansRecommend={ebitansRecommend} ip={ip} />
                        </Suspense>
                    }
                    {topSelling?.length > 0 &&
                        <Suspense fallback={<div className="py-1 text-xl text-gray-500">Loading</div>}>
                            <TopSelling item={item} topSelling={topSelling} ip={ip} />
                        </Suspense>
                    }
                    {offerDeal?.length > 0 &&
                        <Suspense fallback={<div className="py-1 text-xl text-gray-500">Loading</div>}>
                            <OfferDeal item={item} offerDeal={offerDeal} ip={ip} />
                        </Suspense>
                    }
                    {topPick?.length > 0 &&
                        <Suspense fallback={<div className="py-1 text-xl text-gray-500">Loading</div>}>
                            <TopPick item={item} topPick={topPick} ip={ip} />
                        </Suspense>
                    }
                    {/* {flashSale?.length > 0 &&
                        <Suspense fallback={<div className="py-1 text-xl text-gray-500">Loading</div>}>
                            <FlashSale item={item} flashSale={flashSale} ip={ip} />
                        </Suspense>
                    } */}
                </div>
            )}
        </div>
    )
}

export default PseCatProduct