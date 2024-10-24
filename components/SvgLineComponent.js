const SvgLineComponent = () => {
  return (
    <svg
      className="hidden lg:block w-1/3 h-0.5" // Tailwind classes for sizing
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "30%", height: "2px" }} // Inline styles for precise control
    >
      <line
        x1="0"
        y1="1"
        x2="100%"
        y2="1"
        stroke="white" // Inline style for stroke color
        strokeWidth="1"
      />
    </svg>
  );
};
export default SvgLineComponent;
