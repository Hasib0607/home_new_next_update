'use client';

import CardThree from './CardThree';
import { ThreeDots } from 'react-loader-spinner';

const SearchResult = (props) => {
  return (
    <div>
      {props?.data?.length === 0 ? (
        <div className="mt-20">
          {props.text.searchTxt && (
            <h1 className="pb-5">
              {props.data.length} results for{' '}
              <span className="font-bold text-red-400">"{props.text.searchTxt}"</span>
            </h1>
          )}
          <p className="text-center text-4xl font-bold text-gray-400 flex justify-center items-center">
            No Product Found
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 grid-cols-3 gap-5">
          <div className="col-span-3">
            {props.text.searchTxt && (
              <h1 className="pb-5">
                {props.data.length} results for{' '}
                <span className="font-bold text-red-400">"{props.text.searchTxt}"</span>
              </h1>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 sm:gap-5 gap-1 h-max">
              {props.data?.map((product, index) => (
                <CardThree key={index} item={product} />
              ))}
            </div>
            {props.loadState.loading && <InfifityLoader />}
            {!props.loadState.hasMore ||
              (props.data.length === 0 && (
                <p className="text-center text-4xl font-bold text-gray-400 flex justify-center items-center py-4">
                  No more products to load
                </p>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default SearchResult;

const InfifityLoader = () => {
  return (
    <div className="flex justify-center">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#f1593a"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
