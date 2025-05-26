const { default: Image } = require("next/image");

const Banner = ({ category, text }) => {

  return (
    <div className="mb-10">
      {category?.map((item) => (
        <div key={item?.id}>
          {item?.slug === text.catSlug && (
            <Image
              src={item?.banner}
              width={500}
              height={500}
              alt="ebitans image"
              className="h-auto min-w-full object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
};


export default Banner