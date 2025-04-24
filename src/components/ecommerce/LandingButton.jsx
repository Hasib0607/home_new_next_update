const LandingButton = ({ onClick, className = "", type = "button" }) => {
    return (
        <button
          type={type}
          onClick={onClick}
          className={`bg-black text-white px-10 md:px-16 py-4 md:py-6 rounded-md text-2xl font-bold shadow-lg hover:bg-[#f1593a] transition-all duration-300 ${className}`}
        >
          ওয়েবসাইট তৈরি করুন এখনই 
        </button>
      );
};

export default LandingButton;
