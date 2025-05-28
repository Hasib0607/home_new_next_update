import Image from 'next/image';
import { extractDomainName, hasProtocol } from '@/helper/protocols';
import { numberParser } from '@/helper/numberParser';
import { addClassNames } from '../../../helper/utilities';
// import { visitorData } from "@/helper/api";

const fallBackImg = 'https://www.dummyimage.com/600x4:3/bfbfbf/000000.png';

const CardThree = ({ item }) => {
  const handleOpenSourceSite = (e, url) => {
    e.stopPropagation();

    const isWithProtocol = hasProtocol(url);
    const cleanedUrl = isWithProtocol ? url.trim() : `//${url.trim()}`;
    window.open(cleanedUrl, '_blank', 'noopener,noreferrer'); // Open with security features
  };

  const isEqualToPrice = numberParser(item?.price) === numberParser(item?.original_price);
  const isNullPrice = numberParser(item?.price) === 0 || numberParser(item?.original_price) === 0;

  let stock;

  if (numberParser(item?.in_stock) === 1) {
    stock = 'In Stock';
  } else if (numberParser(item?.in_stock) === 0) {
    stock = 'Out of stock';
  } else {
    stock = null;
  }

  return (
    <div onClick={(e) => handleOpenSourceSite(e, item?.url)} className="relative cursor-pointer">
      <div className="absolute top-3 right-3 flex">
        <button
          onClick={(e) => handleOpenSourceSite(e, item?.source_site)}
          className="px-2 py-[2px] rounded-2xl bg-[var(--primary-color)] text-xs text-white capitalize shadow-sm shadow-gray-600"
        >
          {extractDomainName(item?.source_site)}
        </button>
      </div>
      <div className="p-3 md:p-2 flex flex-col bg-white border border-gray-400 hover:border-[var(--primary-color)] rounded-md w-full h-full hover:shadow-2xl duration-700 gap-y-3">
        <div>
          <Image
            src={item?.image ?? fallBackImg}
            width={500}
            height={500}
            alt="product image"
            className="sm:h-64 h-52 min-w-full"
          />
        </div>
        <div className="flex flex-col gap-y-1 max-h-max">
          <h1 className="truncate">{item?.title}</h1>
          {!isNullPrice && (
            <div className="flex items-center flex-wrap gap-x-2 gap-y-1">
              <p>
                {item?.currency ?? 'BDT'}
                {item?.price}
              </p>
              {!isEqualToPrice && (
                <p className="text-sm line-through text-gray-500">
                  {item?.currency ?? 'BDT'} {item?.original_price}
                </p>
              )}
            </div>
          )}
        </div>
        <div className="flex">
          {stock !== null && (
            <p
              className={addClassNames(
                stock === 'In Stock' ? 'ring-green-500' : 'ring-[var(--primary-color)]',
                'text-xs px-2 py-[2px] ring-1 rounded-2xl shadow-sm shadow-gray-600'
              )}
            >
              {stock}
            </p>
          )}
        </div>
        <div className="text-center mt-auto bg-red-500 lg:hover:bg-transparent lg:hover:text-black border-2 border-transparent lg:hover:border-[#F1593A] duration-500 text-gray-50 rounded-sm">
          <p className=" w-full px-5 py-1 ">See Details</p>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
