import Image from "next/image";
import { visitorData } from "@/helper/api";

const CardThree = ({ item, ip }) => {
  const fallBackImg = "https://www.dummyimage.com/600x4:3/bfbfbf/000000.png";

  const handleUserInfo = () => {
    visitorData(item, ip);
  };

  return (
    <a
      href={item?.url}
      onClick={handleUserInfo}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="sm:p-3 p-1 bg-white border border-gray-400 hover:border-[#F1593A] rounded-md w-full h-full hover:shadow-2xl duration-700">
        <div>
          <Image
            src={item?.image ?? fallBackImg}
            width={500}
            height={500}
            alt="product image"
            className="sm:h-64 h-52 min-w-full"
          />
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <h1 className="truncate">{item?.title}</h1>
          <div className="flex items-center flex-wrap gap-x-2 gap-y-1">
            <p>BDT {item?.price}</p>
            <p className="text-sm line-through text-gray-500">
              BDT {item?.original_price}
            </p>
          </div>
        </div>
        <div className="text-center mt-2 w-full bg-red-500 lg:hover:bg-transparent lg:hover:text-black border-2 border-transparent lg:hover:border-[#F1593A] duration-500 text-white rounded-sm">
          <p className=" w-full px-5 py-1 ">See Details</p>
        </div>
      </div>
    </a>
  );
};

export default CardThree;
