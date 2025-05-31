const ProductLoading = ({ count }) => {
  return (
    <div className="grid grid-cols-1 gap-8 mt-8 xl:grid-cols-4 xl:mt-2 xl:gap-16 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count ?? 8 }).map((_, index) => (
        <div key={index} className="w-full h-96">
          <div className="w-full h-72 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
          <p className="w-60 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-32 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        </div>
      ))}
    </div>
  );
};

export default ProductLoading;
