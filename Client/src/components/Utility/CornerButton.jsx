/* eslint-disable react/prop-types */

export const CornerButton = ({ svg, bgColor, position, title, textColor, onClick }) => {

  const sizes = {
    xs: "w-1 h-1",
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  };

  return (
    <>
      <button
        onClick={onClick}
        className={`py-2 px-1 focus:outline-none flex items-center justify-center ${position} ${sizes[sizes]} ${bgColor}`}
      >
        <span
          className={`flex items-center gap-2 text-sm font-medium ${textColor}`}
        >
          {svg}
          <p className={``}>{title}</p>
        </span>
      </button>
    </>
  );
};
