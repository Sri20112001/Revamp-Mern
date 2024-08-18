import { SideMenu } from "./SideMenu";
import { CornerButton } from "./Utility/CornerButton";
import { UpButton } from "./Utility/UpButton";
import { useTask1Store } from "./State Management/Task1";

export const Task1 = () => {
  const { visible, toggleVisibility } = useTask1Store();
  return (
    <>
      <section className="2xl:container relative lg:w-[75%] mx-auto grid grid-cols-1 border min-h-screen bg-white">
        <div className="text-center mt-16">
          <h3 className="text-[#ff681a] text-2xl font-extrabold font-playfair">
            Modern & Beautiful
          </h3>
          <h1 className="text-[#303030] font-bold text-6xl">
            Explore the World For Yourself
          </h1>
        </div>

        <div className="relative flex flex-col items-center justify-center mt-8">
          <img
            className="w-full max-w-[600px]"
            src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-11-slider-2-image-1.png"
            alt="World Map"
          />
          <img
            className="absolute top-[35%] right-[35%]"
            src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-11-slieder-opener-1.png"
            alt="Numbers"
          />
          <img
            className="absolute top-[32%] right-[48%]"
            src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-11-slieder-opener-2.png"
            alt="Numbers"
          />
          <img
            className="absolute top-[45%] right-[45%]"
            src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-11-slieder-opener-3.png"
            alt="Numbers"
          />
          <img
            className="absolute top-[30%] left-[32%]"
            src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-11-slieder-opener-4.png"
            alt="Numbers"
          />
          <img
            className="absolute bottom-[40%] left-[38%]"
            src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-11-slieder-opener-5.png"
            alt="Numbers"
          />
          <img
            className="absolute bottom-[36%] right-[30%]"
            src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-11-slieder-opener-6.png"
            alt="Numbers"
          />
        </div>

        <div className="text-center mt-16">
          <h3 className="text-[#ff681a] text-2xl font-extrabold font-playfair">
            Modern & Beautiful
          </h3>
          <h1 className="text-[#303030] mb-8 font-bold text-4xl">
            Most Popular Adventures We Have
          </h1>
          <p className="max-w-screen-lg text-center px-8 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            posuere tempor mauris, nec imperdiet mi rutrum eget. Donec quis
            ligula in tellus dictum consequat.
          </p>
        </div>

        <div className="fixed flex flex-col right-0 bottom-1/2 gap-2">
          <CornerButton
            onClick={toggleVisibility}
            svg={
              <svg className="h-6" viewBox="0 0 87 87" fill="white">
                <path
                  d="M55.4,81.5c6.1-11.1,5.2-16.1-4.3-24.3c6.1-3.5,9.5-8.5,9.1-15.7c-0.5-8.2-7.7-14.7-16.3-14.6
            c-8.5,0.1-15.6,6.7-15.9,15c-0.3,8.5,5.9,15.8,14.3,16.6c1.4,0.1,2.8,0.2,4.2,0.5c5.9,1.2,10.2,6.7,9.8,12.6
            c-0.4,6.4-5.5,11.4-11.8,11.7C24.9,84.2,5.9,68.5,3.2,49.3C-0.1,26.9,14.4,6.8,36.4,2.8c22.3-4,43.4,10,48.1,32
            c4.3,20-8.6,41.2-28.4,46.7C55.9,81.5,55.6,81.5,55.4,81.5z"
                ></path>
              </svg>
            }
            bgColor="bg-[#ef2853]"
            size="sm"
            title={"Related"}
            textColor="text-[#ffff]"
            className="transition-opacity duration-500 delay-150 opacity-0 hover:opacity-100"
          />
          <CornerButton
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill=""
                viewBox="0 0 24 24"
                strokeWidth="1.0"
                stroke="currentColor"
                className="h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            }
            bgColor="bg-[#ffff]"
            size="sm"
            title={"Buy Now"}
            textColor="text-black"
            className="transition-opacity duration-500 delay-300 opacity-0 hover:opacity-100"
          />
        </div>

        <div className="absolute bottom-0 right-0 transform translate-x-[175px] translate-y-[75px]">
          <UpButton
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            }
            initialTitle=""
            hoverTitle="GO Up"
            bgColor={"bg-[#ff681a]"}
            width="w-14"
            height="h-[75px]"
          />
        </div>

        {visible && <SideMenu />}
      </section>
    </>
  );
};
