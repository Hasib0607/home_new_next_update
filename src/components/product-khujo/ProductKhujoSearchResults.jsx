"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ebitansColor } from "@/lib/ebitansColor";
import images from "@/lib/images";
import SearchResult from "./SearchResult";
import Loading from "@/app/[locale]/loading";
import { baseUrlV2 } from "@/constants/baseUrl";
import { useScrollData } from "../../hooks/useScrollData";

export default function ProductKhujoSearchResults({ category }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const scrollRef = useRef(null);
  const mySearchDiv = useRef(null);
  const scrollLock = useRef(false);

  // State initialization
  const [searchTxt, setSearchTxt] = useState(searchParams.get("query") || "");
  const [debouncedSearchTxt, setDebouncedSearchTxt] = useState(searchTxt);
  const [catSlug, setCatSlug] = useState(searchParams.get("slug") || "");
  const [data, setData] = useState([]);
  const [total, setTotal] = useState({ totalPage: 1, totalProduct: 0 });
  const [loading, setLoading] = useState(false);

  // Ref-based state for reliable tracking
  const currentState = useRef({
    page: 1,
    hasMore: true,
    isFetching: false,
    prevScrollHeight: 0,
    shouldAdjustScroll: false,
  });

  const { isIntersecting } = useScrollData(mySearchDiv);

  // Debounced search handler
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTxt(searchTxt);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchTxt]);

  // Reset state for new searches
  const resetSearch = useCallback(() => {
    currentState.current.page = 1;
    currentState.current.hasMore = true;
    setData([]);
    setTotal({ totalPage: 1, totalProduct: 0 });
    updateUrl();
  }, []);

  const handleSelect = (e) => {
    setCatSlug(e.target.value);
  };

  const handleChange = (e) => {
    setSearchTxt(e.target.value);
  };

  // Unified fetch function
  const fetchData = useCallback(async () => {
    if (currentState.current.isFetching || !currentState.current.hasMore)
      return;

    currentState.current.isFetching = true;
    currentState.current.shouldAdjustScroll = true;
    setLoading(true);

    try {
      const response = await fetch(
        `${baseUrlV2}/pse/product/search?slug=${catSlug}&query=${debouncedSearchTxt}&page=${currentState.current.page}`
      );
      const res = await response.json();

      if (res?.data?.products?.length > 0) {
        setData((prev) => {
          const newProducts =
            currentState.current.page === 1
              ? res.data.products
              : [
                  ...prev,
                  ...res.data.products.filter(
                    (p) => !prev.some((ep) => ep.source_url === p.source_url)
                  ),
                ];
          return newProducts;
        });

        setTotal({
          totalPage: res.data?.totalPage,
          totalProduct: res.data?.totalProduct,
        });

        currentState.current.hasMore =
          currentState.current.page < res.data.totalPage;
        currentState.current.page += 1;
      } else {
        currentState.current.hasMore = false;
      }
    } catch (err) {
      console.error("Fetch error:", err);
      currentState.current.hasMore = false;
    } finally {
      currentState.current.isFetching = false;
      setLoading(false);
      scrollLock.current = false;
      updateUrl();
    }
  }, [catSlug, debouncedSearchTxt]);

  // Scroll handler with proper debouncing
  const handleScroll = useCallback(() => {
    if (
      !scrollRef.current ||
      currentState.current.isFetching ||
      !currentState.current.hasMore ||
      scrollLock.current
    )
      return;

    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const bottomPos = scrollTop + clientHeight;

    if (scrollHeight - bottomPos < 100 && currentState.current.hasMore) {
      scrollLock.current = true;
      currentState.current.prevScrollHeight = bottomPos;
      fetchData();
    }
  }, [fetchData]);

  useEffect(() => {
    if (currentState.current.shouldAdjustScroll && scrollRef.current) {
      const container = scrollRef.current;
      const newScrollHeight = container.scrollHeight;

      // Calculate scroll position to maintain scroll
      const scrollDifference =
        newScrollHeight - currentState.current.prevScrollHeight;
      const targetPosition =
        container.scrollTop + scrollDifference - container.clientHeight * 0.5;

      // Smooth scroll to adjusted position
      container.scrollTo({
        top: targetPosition,
        behavior: "auto",
      });

      currentState.current.shouldAdjustScroll = false;
    }
  }); // Trigger when shouldAdjustScroll changes

  // Effect for initial load and search changes
  useEffect(() => {
    const isNewSearch =
      debouncedSearchTxt !== searchParams.get("query") ||
      catSlug !== searchParams.get("slug");

    if (isNewSearch) {
      resetSearch();
      fetchData();
    }
  }, [debouncedSearchTxt, catSlug]);

  // Update URL
  const updateUrl = useCallback(() => {
    const page =
      currentState.current.page == 1
        ? currentState.current.page
        : currentState.current.page - 1;
    router.push(
      `/product-khujo/category?slug=${catSlug}&query=${debouncedSearchTxt}&page=${page}`
    );
  }, [catSlug, debouncedSearchTxt]);

  console.log(data);

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      style={{
        marginTop: "85px",
        height: "calc(100vh - 85px)",
        overflowY: "auto",
        position: "relative",
      }}
    >
      <div className="shadow-lg fixed top-0 left-0 w-full bg-white z-10">
        <div className="lg:h-[85px] h-[50px] flex justify-between items-center container px-5 lg:px-10">
          <Link href="/product-khujo">
            <Image
              src={images?.darkPse}
              alt="ebitans image"
              className="lg:h-12 h-7 w-auto"
            />
          </Link>
          <div
            className={`${
              isIntersecting ? "translate-y-0" : "-translate-y-20"
            } hidden lg:flex duration-500 border border-gray-400 rounded md:w-[70%] sm:w-[85%] w-[95%]  justify-between overflow-hidden bg-white`}
          >
            <div className="flex items-center px-1 relative">
              <select
                name=""
                id=""
                value={catSlug}
                onChange={handleSelect}
                className="bg-white border-0 focus:ring-0 focus:outline-none focus:border-0 w-full max-w-[250px] lg:cursor-pointer"
              >
                {category?.map((item) => (
                  <option key={item?.id} value={item?.slug}>
                    {item?.name}
                  </option>
                ))}
              </select>
              {/* <IoMdArrowDropdown /> */}
              <p className="absolute w-[1px] h-16 right-0 -top-2 bg-black"></p>
            </div>
            <input
              value={searchTxt}
              onChange={handleChange}
              type="text"
              className="w-[95%] bg-white pl-5 outline-none border-gray-500 border-0 p-0 focus:ring-0 focus:outline-none focus:border-0 focus:border-gray-500"
            />

            <div className="px-5 py-1 lg:cursor-pointer">
              <AiOutlineSearch className="text-3xl" />
            </div>
          </div>
          <a href="https://admin.ebitans.com/register">
            <button
              className={`group relative overflow-hidden rounded bg-[${ebitansColor}] px-4 h-[37px] shadow`}
            >
              <div
                className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}
              ></div>
              <span className={`relative text-white`}>Registration</span>
            </button>
          </a>
        </div>
      </div>
      <div className="mb-10 min-h-screen z-10">
        <div className="mb-10">
          {category?.map((item) => (
            <div key={item?.id}>
              {item?.slug === catSlug && (
                <Image
                  src={item?.banner}
                  width={500}
                  height={500}
                  alt="ebitans image"
                  className="h-auto min-w-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
        <div
          className="flex justify-center sticky lg:relative z-[1] h-max top-[50px] lg:top-0 left-0 w-full container sm:px-5 lg:px-10 px-2 bg-[#F9F7F6] py-1"
          ref={mySearchDiv}
        >
          <div className="border border-gray-400 rounded lg:rounded-full xl:w-[50%] sm:w-[85%] w-full flex items-center justify-between overflow-hidden bg-[#D9D9D9]">
            <div className="flex items-center lg:pl-5 pl-1 pr-1 relative">
              <select
                name=""
                id=""
                value={catSlug}
                onChange={handleSelect}
                className="bg-[#D9D9D9] border-0 focus:ring-0 focus:outline-none focus:border-0 w-full max-w-[250px] lg:cursor-pointer"
              >
                {category?.map((item) => (
                  <option key={item?.id} value={item?.slug}>
                    {item?.name}
                  </option>
                ))}
              </select>
              <p className="absolute w-[1px] h-16 right-0 -top-2 bg-black"></p>
            </div>
            <input
              value={searchTxt}
              onChange={handleChange}
              autoFocus
              type="text"
              className="w-[95%] bg-[#D9D9D9] pl-5 outline-none border-gray-500 border-0 p-0 focus:ring-0 focus:outline-none focus:border-0 focus:border-gray-500"
            />

            <div className="px-5 py-1 lg:cursor-pointer">
              <AiOutlineSearch className="text-3xl" />
            </div>
          </div>
        </div>

        <div className="container px-5 lg:px-10 py-10">
          <div>
            {category?.map((item) => (
              <div key={item?.id}>
                {item?.slug === catSlug && (
                  <h1 className="pb-5 text-2xl text-gray-500">{item?.name}</h1>
                )}
              </div>
            ))}
          </div>
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <SearchResult
              data={data}
              total={total}
              loading={loading}
              currentState={currentState}
              searchTxt={searchTxt}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
