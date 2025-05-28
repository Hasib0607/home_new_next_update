const { default: Image } = require('next/image');

const Banner = ({ category, text }) => {
  return (
    <>
      {category?.map((item) => (
        <div key={item?.id}>
          {item?.slug === text.catSlug && (
            <Image
              src={item?.banner}
              width={500}
              height={500}
              alt="ebitans image"
              className="h-96 min-w-full object-cover"
            />
          )}
        </div>
      ))}
    </>
  );
};

export default Banner;
