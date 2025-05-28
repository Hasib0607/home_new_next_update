'use client';

import { useState } from 'react';
import styles from '../home.module.css';
import { useRouter } from 'next/navigation';

const PseSearch = ({ category }) => {
  const [searchTxt, setSearchTxt] = useState('');

  const router = useRouter();

  const cat = category?.find((item) => item?.id === 33829);

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      searchHandle();
    }
  }

  const searchHandle = () => {
    if (searchTxt) {
      router.push(`/product-khujo/category?slug=${cat?.slug}&query=${searchTxt}&page=1`);
      setSearchTxt('');
    }
  };

  return (
    <div className="flex items-center gap-2 lg:gap-5 mt-8">
      <input
        onChange={(e) => setSearchTxt(e.target.value)}
        onKeyPress={handleKeyPress}
        type="text"
        placeholder="Search your Products here"
        className={`lg:w-[260px] w-[200px] h-[34px] sm:h-[48px] text-[12px] lg:text-base shadow-2xl ${styles.archivo} placeholder:text-[#D3CDCB] border-[#D3CDCB] focus:border-[#D3CDCB] focus:outline-none focus:ring-0 rounded px-2`}
      />
      <button
        onClick={searchHandle}
        className={`group relative h-[34px] sm:h-[48px] lg:w-48 w-20 overflow-hidden rounded bg-[#F1593A] text-sm lg:text-lg shadow`}
      >
        <div
          className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}
        ></div>
        <span className={`${styles.archivo} relative  text-white`}>Search</span>
      </button>
    </div>
  );
};

export default PseSearch;
