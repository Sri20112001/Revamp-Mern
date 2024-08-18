import { useState } from "react";

/* eslint-disable react/prop-types */

export const UpButton = ({
  svg,
  initialTitle,
  hoverTitle,
  bgColor,
  height,
  width,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setTitle(hoverTitle);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTitle(initialTitle);
    setIsHovered(false);
  };

  return (
    <>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`group duration-400 fixed bottom-0 flex flex-col items-center justify-center ${bgColor} ${height} ${width} border border-white`}
      >
        {!isHovered && svg}
        <span className="text-xl font-extrabold text-white text-wrap text-center">
          <p className="group-hover:animate-in group-hover:slide-in-from-bottom transition duration-100">
            {title}
          </p>
        </span>
      </button>
    </>
  );
};
