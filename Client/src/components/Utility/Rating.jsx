/* eslint-disable react/prop-types */

export const Rating = ({ ratingNo, no, noComments }) => {
  return (
    <>
      <div className="flex items-center">
        {Array.from({ length: no }).map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill="orange"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="yellow"
            className="h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        ))}
        <p className="ml-2 text-sm text-[#718092]">{ratingNo}</p>
        <p className="ml-1 text-sm text-[#718092]">({noComments} Ratings)</p>
      </div>
    </>
  );
};
