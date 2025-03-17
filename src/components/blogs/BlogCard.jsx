import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const BlogCard = ({ item }) => {
  const permalink =
  item?.permalink && item?.permalink !== "" ? item?.permalink : item?.slug;

  if (item?.website !== 1) {
    return null; 
  }

  return (
    <>
      <Link
        href={`/resources/blogs/${permalink}`}
        className="border rounded-lg pb-5 group hover:shadow-[12px_12px_1px_1px_gray] hover:scale-[.95] duration-1000"
      >
        <div className="relative rounded-lg overflow-hidden">
          <Image
            width={500}
            height={500}
            src={item?.thumbnail}
            alt="blogImage"
            className="h-auto min-w-full"
          />
          <p className="absolute top-0 left-0 right-0 group-hover:bottom-0 duration-1000 group-hover:bg-black group-hover:bg-opacity-75 z-[1]"></p>
        </div>
        <div className="px-5">
          <div className="flex justify-between items-center gap-2">
            <h3 className="text-2xl font-semibold py-7 w-full">
              {item?.title}
            </h3>
            <div className="w-max">
              <FiArrowUpRight className="text-4xl" />
            </div>
          </div>
          <p className="">
            {item?.sub_title?.slice(0, 200)}
            {item?.sub_title?.length > 200 && "..."}
          </p>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
