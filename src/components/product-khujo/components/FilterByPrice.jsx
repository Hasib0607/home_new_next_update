'use client';

import { filterByPrice } from '@/helper/filter';
import { useEffect, useRef, useState } from 'react';

const FilterByPrice = ({ fetchedData, setData }) => {
  const minPrice = 0;
  const maxPrice = 500000;

  const [priceRange, setPriceRange] = useState({
    minPrice,
    maxPrice,
  });

  const dataRef = useRef([]);

  useEffect(() => {
    if (fetchedData.length > 0) {
      dataRef.current = [...fetchedData];
      setData(fetchedData);
      setPriceRange({
        minPrice,
        maxPrice,
      });
    } else {
      setData([]);
      setPriceRange({
        minPrice,
        maxPrice,
      });
    }
  }, [fetchedData.length]);

  const rangeRef = useRef(null);

  const setFilterData = (min, max) => {
    const filtered = filterByPrice(dataRef.current, min, max);
    if (priceRange.maxPrice < maxPrice || priceRange.minPrice > minPrice) {
      setData(filtered);
      return;
    }
    setData(dataRef.current);
  };

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), priceRange.maxPrice - 100);
    setPriceRange({ ...priceRange, minPrice: value });
    setFilterData(value, priceRange.maxPrice);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), priceRange.minPrice + 100);
    setPriceRange({ ...priceRange, maxPrice: value });
    setFilterData(priceRange.minPrice, value);
  };

  useEffect(() => {
    const percentMin = ((priceRange.minPrice - minPrice) / (maxPrice - minPrice)) * 100;
    const percentMax = ((priceRange.maxPrice - minPrice) / (maxPrice - minPrice)) * 100;

    if (rangeRef.current) {
      rangeRef.current.style.left = `${percentMin}%`;
      rangeRef.current.style.width = `${percentMax - percentMin}%`;
    }
  }, [priceRange.minPrice, priceRange.maxPrice]);

  const inputStyle =
    'range-thumb absolute mt-[6px] top-0 left-0 w-full appearance-none bg-transparent z-10 pointer-events-none cursor-grab hover:cursor-grabbing duration-150 transition-all';

  return (
    <>
      <h1 className="font-medium text-gray-500 text-md pb-3">Filter by Price</h1>
      <div className="flex justify-between items-center text-sm font-semibold">
        <label htmlFor="range">BDT {priceRange.minPrice}</label>
        <label htmlFor="range">BDT {priceRange.maxPrice}</label>
      </div>

      <div className="w-full max-w-md mx-auto mt-8 relative">
        {/* Track background */}
        <div className="relative h-2 bg-gray-300 rounded">
          <div ref={rangeRef} className="absolute h-2 bg-[var(--primary-color)] rounded" />
        </div>

        {/* Min range */}
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={priceRange.minPrice}
          onChange={handleMinChange}
          step={100}
          className={inputStyle}
        />

        {/* Max range */}
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={priceRange.maxPrice}
          onChange={handleMaxChange}
          step={100}
          className={inputStyle}
        />

        {/* Tailwind-compatible custom thumb styling */}
        <style jsx>{`
          input[type='range'].range-thumb::-webkit-slider-thumb {
            appearance: none;
            pointer-events: all;
            height: 16px;
            width: 16px;
            background-color: var(--primary-color);
            border-radius: 9999px;
            margin-top: -7px;
          }

          input[type='range'].range-thumb::-moz-range-thumb {
            appearance: none;
            pointer-events: all;
            height: 16px;
            width: 16px;
            background-color: var(--primary-color);
            border-radius: 9999px;
          }

          input[type='range'].range-thumb {
            -webkit-appearance: none;
            height: 2px;
          }
        `}</style>
      </div>
    </>
  );
};

export default FilterByPrice;
