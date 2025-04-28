import "./landingButton.css";

const LandingButton = ({
  onClick,
  label,
  className = "",
  type = "button",
  heartbeat = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-black border-[6px] border-[#f1593a] text-[#f1593a] px-10 md:px-16 py-4 md:py-6 rounded-md text-2xl font-bold shadow-lg hover:bg-[#f1593a] hover:border-[#000] hover:text-[#000] transition-all duration-300 ${
        heartbeat ? "heartbeat" : ""
      } ${className}`}
    >
      {label}
    </button>
  );
};

export default LandingButton;
