"use client";
import LandingButton from "./LandingButton";

const Youtube = ({ scrollToRef }) => {
  const handleScroll = () => {
    if (scrollToRef?.current) {
      const topOffset =
        scrollToRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offset = -160;

      window.scrollTo({
        top: topOffset + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="">
      <div className="container pb-5 lg:pb-10 pt-20">
        <h1 className="text-2xl md:text-3xl font-bold text-center px-2 md:px-10 py-4  bg-[#f1593a] text-white rounded-md shadow-lg shadow-slate-600">
          'Admin Panel'-এর ডেমো দেখুন 
        </h1>
        <div>
          <h2 className="font-bold text-2xl md:text-4xl text-center my-10"></h2>
          <div className="container flex justify-center my-10">
            <div className="w-full md:w-2/3 aspect-w-16 aspect-h-9 border-[#f1593a] border-8 rounded-2xl">
              <iframe
                className="w-full h-[50vh] md:h-[60vh] rounded-lg shadow-lg "
                src="https://www.youtube.com/embed/0slp9mpW-vw?rel=0"
                // title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-24 mb-16">
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

export default Youtube;
