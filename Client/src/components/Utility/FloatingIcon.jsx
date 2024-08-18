/* eslint-disable react/prop-types */

export const FloatingIconButton = ({
  icon,
  onClick,
  bgColor,
  size,
  position
}) => {
  const positions = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "top-center": "top-4 left-1/2 transform -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
    "middle-right": "top-1/2 right-4 transform -translate-y-1/2",
    "middle-left": "top-1/2 left-4 transform -translate-y-1/2",
    "middle-center":
      "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  };

  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  };

  return (
    <button
      onClick={onClick}
      className={`fixed ${positions[position]} ${sizes[size]} ${bgColor} text-white rounded-full shadow-xl focus:outline-none flex items-center justify-center`}
    >
      {icon}
    </button>
  );
};
