const Intro = () => {
  return (
    <div>
      <picture >
        <source
          media="(max-width: 767px)"
          srcSet="/image/header-image-3.webp"
          className="w-full h-full object-cover"
        />
        <img
          src="/image/header-image.webp"
          alt="Header"
          className="w-full h-full object-cover"
        />
      </picture>
    </div>
  );
};

export default Intro;
