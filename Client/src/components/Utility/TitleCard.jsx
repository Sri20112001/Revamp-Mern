/* eslint-disable react/prop-types */

export const TitleCard = ({
  order,
  date,
  title,
  subtitle,
  src,
  commentBy,
  commentNo,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-[80%] mx-auto py-6 border-b-2 border-[#ededed]">
        <span className={`${order}`}>
          <img
            className="shadow-md rounded-xl lg:w-full lg:h-full object-cover  hover:scale-105 transition-all duration-300"
            src={src}
          />
        </span>

        <span className="flex flex-col justify-around items-start">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="bg-gradient-to-r from-[#4d00eb] to-[#7400f9]  px-3 py-3 rounded-full text-xl text-white text-center font-bold">
              {date}
            </h2>
            <h2 className="text-4xl text-start font-extrabold text-wrap">
              {title}
            </h2>
          </div>
          <div className="w-[325px] bg-[#e6f0ff] py-2 rounded-full flex items-center justify-around">
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <p className="font-bold">{commentBy}</p>
            </span>
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                />
              </svg>
              <p className="font-bold">{commentNo} Comment</p>
            </span>
          </div>
          <p className="font-medium my-5 text-lg text-left leading-relaxed">
            {subtitle}
          </p>
          <button className="text-white font-bold bg-gradient-to-r from-[#4d00eb] to-[#7400f9] rounded-full px-12 py-4 relative overflow-hidden">
            <span className="relative z-10">Read More</span>
            <span className="absolute inset-0 bg-black opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </span>
      </div>
    </>
  );
};
