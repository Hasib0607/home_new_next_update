'use client';

import { fetchPseSearch } from '@/helper/api';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const ProductSearch = ({ category }) => {
  // const searchParams = useSearchParams();
  // const queryCat = searchParams.get('slug') || 'all-products';
  // const queryText = searchParams.get('query') || '';
  // const queryPage = searchParams.get('page') || 1;
  // const minQuery = searchParams.get('minSearch') == false ? searchParams.get('minSearch') : true;
  // console.log("🚀 ~ ProductSearch ~ searchParams.get('minSearch') == false:", searchParams)
  

  const [data, setData] = useState([]);
  const [searchTxt, setSearchTxt] = useState('');
  const [selectedCat, setSelectedCat] = useState('all-products');
  const [page, setPage] = useState(1);

  const categorySlug = category?.find((item) => item?.slug === selectedCat);

  const router = useRouter();

  useEffect(() => {
    fetchPseSearch(searchTxt, categorySlug)
      .then((data) => {
        setPage(1);
        setData(data?.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [searchTxt,categorySlug]);


  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      setSelectedCat(event.target.value);
      searchHandle();
    }
  }

  const searchHandle = () => {
    if (searchTxt) {
      router.push(`/product-khujo/category?slug=${selectedCat}&minSearch=true&query=${searchTxt}&page=${page}`);
    }
  };

  function limitWords(inputString, maxWords) {
    // Split the string into an array of words
    const wordsArray = inputString?.split(/\s+/);
    // Slice the array to get the specified number of words
    const limitedWords = wordsArray?.slice(0, maxWords);
    // Join the array back into a string
    const resultString = limitedWords?.join(' ');
    // If there are more words in the original string, append "..."
    if (wordsArray?.length > maxWords) {
      return resultString + '...';
    }
    return resultString;
  }

  return (
    <div className="border border-black rounded-full md:w-[50%] sm:w-[85%] w-[95%] pl-10 py-1 flex items-center justify-between bg-white relative z-[2]">
      <input
        onChange={(e) => setSearchTxt(e.target.value)}
        onKeyPress={handleKeyPress}
        type="text"
        placeholder="Search"
        className="w-[95%] outline-none border-b border-gray-500 border-0 p-0 focus:ring-0 focus:outline-none focus:border-b focus:border-gray-500"
      />
      <div onClick={searchHandle} className="px-5 py-1 lg:cursor-pointer">
        <AiOutlineSearch className="text-3xl" />
      </div>
      {searchTxt && (
        <div
          className={`absolute top-12 flex flex-col gap-1 bg-white w-full left-0 p-5 rounded-xl ${
            (!data || data?.length === 0) && 'hidden'
          }`}
        >
          {data?.map((item) => (
            <p
              key={item?.id}
              onClick={searchHandle}
              className="text-sm font-semibold lg:cursor-pointer truncate my-1"
            >
              {limitWords(item?.name, 5)}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
