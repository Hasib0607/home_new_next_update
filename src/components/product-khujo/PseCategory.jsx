'use client';
import { fetchIp } from '@/helper/api';
import Image from 'next/image';
import Link from 'next/link';
import PseCatProduct from './PseCatProduct';
import { useEffect, useState } from 'react';
import { getFromSessionStorage, saveToSessionStorage } from '@/lib/sessionstorage';
import { useRouter } from 'next/navigation';

const PseCategory = async ({ category }) => {
  const [ip, setIp] = useState(getFromSessionStorage('ip'));
  const router = useRouter();
  useEffect(() => {
    fetchIp()
      .then((data) => {
        setIp(data);
        saveToSessionStorage('ip', data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleClick = (slug) => {
    router.push(`/product-khujo/category?slug=${slug}`);
  };

  return (
    <div className="container px-5 lg:px-10 relative z-[1] mb-10">
      <div className="py-10 sm:py-[95px]">
        <div>
          <h1 className="text-2xl sm:text-[35px] font-bold text-center sm:text-left">
            Browse items by category
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-y-10 gap-x-5 pt-10 ">
          {category?.map((item) => (
            <>
              {item?.status === 1 && (
                <div key={item?.id}>
                  <div
                    className="flex items-center gap-2 lg:cursor-pointer"
                    onClick={() => handleClick(item?.slug)}
                  >
                    <Image
                      width={500}
                      height={500}
                      src={item?.icon}
                      alt="ebitans image"
                      className="h-12 w-auto"
                    />
                    <div>
                      <h1 className="font-semibold text-lg">{item?.name}</h1>
                      <p className="text-sm font-medium">{item?.total_products} Products</p>
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
      <PseCatProduct category={category} ip={ip} />
    </div>
  );
};

export default PseCategory;
