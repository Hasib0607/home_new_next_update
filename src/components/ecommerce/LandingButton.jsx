const LandingButton = ({ onClick, className = "", type = "button" }) => {
    return (
        <button
          type={type}
          onClick={onClick}
          className={`bg-black text-white px-9 py-3 rounded-md text-2xl font-bold shadow-lg hover:bg-[#f1593a] transition-all duration-300 ${className}`}
        >
          ওয়েবসাইট তৈরি করুন এখনই 
        </button>
      );
};

export default LandingButton;
