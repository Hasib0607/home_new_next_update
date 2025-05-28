import { forwardRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = (props, ref) => {
  return (
    <div
      className="flex justify-center w-full container sm:px-5 lg:px-10 bg-[#F9F7F6]"
      ref={ref}
    >
      <div className="border border-gray-400 rounded lg:rounded-full xl:w-[50%] sm:w-[85%] w-full flex items-center justify-between overflow-hidden bg-[#D9D9D9]">
        <div className="flex items-center lg:pl-5 pl-1 pr-1 relative">
          <select
            name=""
            id=""
            value={props.text.catSlug}
            onChange={props.handleSelect}
            className="bg-[#D9D9D9] border-0 focus:ring-0 focus:outline-none focus:border-0 w-full max-w-[250px] lg:cursor-pointer"
          >
            {props.category?.map((item) => (
              <option key={item?.id} value={item?.slug}>
                {item?.name}
              </option>
            ))}
          </select>
          <p className="absolute w-[1px] h-16 right-0 -top-2 bg-black"></p>
        </div>
        <input
          value={props.text.searchTxt}
          onChange={props.handleChange}
          autoFocus
          type="text"
          className="w-[95%] bg-[#D9D9D9] pl-5 outline-none border-gray-500 border-0 p-0 focus:ring-0 focus:outline-none focus:border-0 focus:border-gray-500"
        />

        <div className="px-5 py-1 lg:cursor-pointer">
          <AiOutlineSearch className="text-3xl" />
        </div>
      </div>
    </div>
  );
};


const ProductKhujoSearchBar = forwardRef(SearchBar);

export default ProductKhujoSearchBar