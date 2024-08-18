import { FloatingIconButton } from "./Utility/FloatingIcon";
import { TitleCard } from "./Utility/TitleCard";

export const Task2 = () => {
  const card = [
    {
      date: "18 Mar",
      title: "Mar Beach Days, Long Hikes, And",
      subtitle:
        "Non libero hac commodo torquent finibus metus. Duis in nisi diam nunc habitasse lorem elit. Ante porta accumsan sociosqu faucibus",
      src: "https://themexriver.com/wp/goyto/wp-content/uploads/2024/03/blog-2-620x377.webp",
      commentBy: "by Emma Mark",
      commentNo: "1",
    },
    {
      date: "28 Mar",
      title: "Island Hopping And Weather Tips",
      subtitle:
        "Non libero hac commodo torquent finibus metus. Duis in nisi diam nunc habitasse lorem elit. Ante porta accumsan sociosqu faucibus",
      src: "https://themexriver.com/wp/goyto/wp-content/uploads/2024/03/blog-3-620x377.webp",
      commentBy: "by Emma Mark",
      commentNo: "0",
    },
  ];
  return (
    <>
      <section className="2xl:container lg:w-[90%] mx-auto min-h-screen">
        <div className="">
          <span className="flex flex-row items-center justify-center gap-2 pt-8">
            <img
              className="h-8"
              src="https://themexriver.com/wp/goyto/wp-content/uploads/2024/03/star.webp"
            />
            <h3 className="text-2xl font-medium text-[#4a4a4d]">
              Get Ready For New Experience
            </h3>
          </span>
          <span>
            <h1 className="text-center text-6xl font-extrabold text-[#363539]">
              Latest News & Articles
            </h1>
          </span>
        </div>
        {card.map((cardItem, index) => {
          const { date, title, subtitle, src, commentBy, commentNo } = cardItem;
          return (
            <TitleCard
              key={index + 1}
              order={index / 2 == 0 ? "" : "order-2"}
              date={date}
              title={title}
              subtitle={subtitle}
              src={src}
              commentBy={commentBy}
              commentNo={commentNo}
            />
          );
        })}
        <FloatingIconButton
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              className="h-6 font-extrabold"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
              />
            </svg>
          }
          size="md"
          position="bottom-right"
          bgColor="bg-gradient-to-r from-[#4d00eb] to-[#7400f9]"
        />
      </section>
    </>
  );
};
