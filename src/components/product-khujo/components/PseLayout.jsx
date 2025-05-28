'use client';

import FilterByPrice from './FilterByPrice';

const PseLayout = ({ children, setData, fetchedData }) => {
  return (
    <div className="w-full min-h-96">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="hidden md:block col-span-2 space-y-6">
          <div className="rounded-xl h-max p-4 shadow-md bg-white">
            <FilterByPrice fetchedData={fetchedData} setData={setData} />
          </div>
        </div>
        <div className="col-span-1 md:col-span-10 flex flex-col h-full">{children}</div>
      </div>
    </div>
  );
};

export default PseLayout;
