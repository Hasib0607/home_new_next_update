"use client";

import Loading from "@/app/[locale]/loading";
import { baseUrlV2 } from "@/constants/baseUrl";
import { numberParser } from "@/helper/numberParser";
import { useRouter } from "next/navigation";
import { useScrollData } from "../../hooks/useScrollData";
import SearchResult from "./components/SearchResult";
import SlugTitle from "./components/SlugTitle";
import Banner from "./components/Banner";
import PseLayout from "./components/PseLayout";
import ProductKhujoSearchBar from "./components/SearchBar";
import PhoductKhujoHeader from "./components/PhoductKhujoHeader";
import { useCallback, useEffect, useRef, useState } from "react";

export default function ProductKhujoSearchResults({
  category,
  searchParams,
  locale,
}) {
  const router = useRouter();
  const scrollRef = useRef(null);
  const mySearchDiv = useRef(null);
  const scrollLock = useRef(false);

  // State initialization
  const [text, setText] = useState(() => {
    const currentQuery = searchParams.query || "";
    return {
      searchTxt: currentQuery,
      debouncedSearchTxt: currentQuery,
      catSlug: searchParams.slug || "",
    };
  });

  const [fetchedData, setFetchedData] = useState([]);
  const [data, setData] = useState([]);

  const [total, setTotal] = useState({
    currentPage: 1,
    totalPage: 1,
    totalProduct: 0,
  });
  const [loadState, setLoadState] = useState({ loading: false, hasMore: true });

  // Ref-based state for reliable tracking
  const currentState = useRef({
    page: numberParser(searchParams.page) || 1,
    isFetching: false,
    prevScrollHeight: 0,
    shouldAdjustScroll: false,
  });

  const { isIntersecting } = useScrollData(mySearchDiv);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setText({
        ...text,
        debouncedSearchTxt: text.searchTxt,
      });
    }, 500);
    return function () {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
    };
  }, [text.searchTxt]);

  // Reset state for new searches
  const resetSearch = useCallback(() => {
    setTotal({ currentPage: 1, totalPage: 1, totalProduct: 0 });
    setLoadState({ loading: false, hasMore: true });
    currentState.current.isFetching = true;
    currentState.current.page = 1;
    updateUrl(1);
    setFetchedData([]);
  }, []);

  const handleSelect = (e) => {
    currentState.current.isFetching = true;
    setText({
      ...text,
      catSlug: e.target.value,
    });
  };

  // filter by search
  const handleChange = (e) => {
    setText({
      ...text,
      searchTxt: e?.target?.value,
    });
  };

  // Unified fetch function
  const fetchData = useCallback(
    async (increment) => {
      if (loadState.loading || !loadState.hasMore) return;
      setLoadState({ ...loadState, loading: true });
      increment ? (currentState.current.shouldAdjustScroll = true) : null;
      let res;

      try {
        const response = await fetch(
          `${baseUrlV2}/pse/product/search?slug=${text.catSlug}&query=${text.debouncedSearchTxt}&page=${currentState.current.page}`
        );
        res = await response.json();

        if (res?.data?.products?.length > 0) {
          setFetchedData((prev) => {
            const newProducts =
              currentState.current.page === 1
                ? res.data.products
                : [
                    ...prev,
                    ...res?.data?.products?.filter(
                      (p) => !prev?.some((ep) => ep?.source_url === p?.source_url)
                    ),
                  ];
            return newProducts;
          });

          setTotal({
            currentPage: res?.data?.page,
            totalPage: res?.data?.totalPage,
            totalProduct: res?.data?.totalProduct,
          });
          setLoadState({
            ...loadState,
            hasMore: currentState.current.page < res?.data?.totalPage,
          });
          increment
            ? (currentState.current.page += 1)
            : (currentState.current.page = res?.data?.page);
        } else {
          setLoadState({ ...loadState, hasMore: false });
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        currentState.current.isFetching = false;
        setLoadState({ ...loadState, loading: false });
        scrollLock.current = false;
        updateUrl(res?.data?.page);
      }
    },
    [text]
  );

  // Scroll handler with proper debouncing
  const handleScroll = useCallback(() => {
    if (
      !scrollRef.current ||
      loadState.loading ||
      !loadState.hasMore ||
      scrollLock.current
    )
      return;

    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const bottomPos = scrollTop + clientHeight;

    if (scrollHeight - bottomPos < 100 && loadState.hasMore) {
      scrollLock.current = true;
      currentState.current.prevScrollHeight = bottomPos;
      fetchData(true);
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
    // const isNewSearch =
    //   text.debouncedSearchTxt !== searchParams.query ||
    //   text.catSlug !== searchParams.slug;

    // if (isNewSearch) {
    resetSearch();
    fetchData();
    // }
  }, [text.debouncedSearchTxt]);

  // Update URL
  const updateUrl = useCallback(
    (page) => {
      router.push(
        `/product-khujo/category?slug=${text.catSlug}&query=${text.debouncedSearchTxt}&page=${page}`
      );
    },
    [text]
  );

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      style={{
        height: "calc(100vh - 85px)",
        overflowY: "auto",
        position: "relative",
      }}
      className="mt-12 md:mt-[85px]"
    >
      <div className="shadow-lg fixed top-0 left-0 w-full bg-white z-10">
        <PhoductKhujoHeader
          isIntersecting={isIntersecting}
          text={text}
          handleChange={handleChange}
          handleSelect={handleSelect}
          category={category}
          locale={locale}
        />
      </div>
      <div className="mb-5">
        <Banner category={category} text={text} />
      </div>
      <div className="container min-w-9xl">
        <div className="space-y-5">
          <div className="sticky md:static top-0 z-10">
            <ProductKhujoSearchBar
              text={text}
              handleChange={handleChange}
              handleSelect={handleSelect}
              category={category}
              ref={mySearchDiv}
            />
          </div>
          <div className="min-w-screen-2xl">
            <PseLayout setData={setData} fetchedData={fetchedData}>
              <SlugTitle text={text} category={category} />
              {currentState.current.isFetching ? (
                <div>
                  <Loading />
                </div>
              ) : (
                <SearchResult
                  data={data}
                  loadState={loadState}
                  text={text}
                  total={total}
                />
              )}
            </PseLayout>
          </div>
          <div className="h-12 p-10"></div>
        </div>
      </div>
    </div>
  );
}
