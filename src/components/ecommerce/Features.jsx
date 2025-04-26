import LandingButton from "./LandingButton";



const Features = ({ scrollToRef }) => {
    const handleScroll = () => {
      if (scrollToRef?.current) {
        const topOffset = scrollToRef.current.getBoundingClientRect().top + window.pageYOffset;
        const offset = -200; // adjust this value to scroll a bit higher (try -80 to -150 as needed)
    
        window.scrollTo({
          top: topOffset + offset,
          behavior: "smooth",
        });
      }
    };

  return (
    <div className="border-b-2 border-black bg-red-100">

    
    <div className="container pb-5 lg:pb-10 pt-20">
      <h1 className="text-2xl md:text-3xl font-bold text-center px-2 md:px-10 py-4  bg-[#f1593a] text-white rounded-md shadow-lg shadow-slate-600">
        eBitans-এ স্বল্প খরচে ই-কমার্সের সকল সুবিধাসহ ওয়েবসাইট
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-5 ">
        <img src="/image/after-sales.webp" alt="" />
        <img src="/image/courier.webp" alt="" />
        <img src="/image/gtm.webp" alt="" />
        <img src="/image/mobile-app.webp" alt="" />
        <img src="/image/order-manegement.webp" alt="" />
        <img src="/image/payment-getway.webp" alt="" />
        <img src="/image/pixel.webp" alt="" />
        <img src="/image/pos.webp" alt="" />
        <img src="/image/customer.webp" alt="" />
        <img src="/image/order.webp" alt="" />
      </div>

      <div className="flex justify-center pt-8 md:pt-24 mb-8 md:mb-16">
          <LandingButton
            onClick={handleScroll}
            label="ওয়েবসাইট তৈরি করুন এখনই"
            heartbeat={true}
            className="mx-auto"
          />
        </div>

    </div>
    </div>
  );
};

export default Features;
