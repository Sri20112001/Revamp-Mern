import { useTask1Store } from "./State Management/Task1";
import { Card } from "./Utility/Card";

export const SideMenu = () => {
  const { toggleVisibility } = useTask1Store();

  const menu = [
    {
      label: "Carsten",
      subtitle: "Travel & Hotels",
      src: "https://previews.customer.envatousercontent.com/files/503758724/00_preview.__large_preview.png",
      price: "$89",
    },
    {
      label: "Wilder",
      subtitle: "Travel & Hotels",
      src: "https://previews.customer.envatousercontent.com/files/431898330/00_preview.__large_preview.jpg",
      price: "$89",
    },
    {
      label: "Richmond",
      subtitle: "Travel & Hotels",
      src: "https://previews.customer.envatousercontent.com/files/399340618/00_preview.__large_preview.png",
      price: "$89",
    },
    {
      label: "Chalet",
      subtitle: "Travel & Hotels",
      src: "https://previews.customer.envatousercontent.com/files/394043347/00_preview.__large_preview.png",
      price: "$89",
    },
    {
      label: "Seafarer",
      subtitle: "Travel & Hotels",
      src: "https://previews.customer.envatousercontent.com/files/465868404/Seafarer.__large_preview.jpg",
      price: "$89",
    },
    {
      label: "Kamperon",
      subtitle: "Travel & Hotels",
      src: "https://previews.customer.envatousercontent.com/files/354941098/00_preview.__large_preview.png",
      price: "$89",
    },
    {
      label: "Augustine",
      subtitle: "Travel & Hotels",
      src: "https://previews.customer.envatousercontent.com/files/327431833/00_preview.__large_preview.png",
      price: "$89",
    },
  ];
  return (
    <>
      <section
        className="absolute z-30 top-0 grid grid-cols-1 min-h-screen -right-[17%] animate-in slide-in-from-left
       bg-white max-w-sm rounded-lg shadow-lg p-4 overflow-auto"
      >
        <div className="relative">
          <div className="flex items-center gap-4 mb-6 border-gray-200">
            <svg className="h-8" viewBox="0 0 87 87" fill="#ef2853">
              <path
                d="M55.4,81.5c6.1-11.1,5.2-16.1-4.3-24.3c6.1-3.5,9.5-8.5,9.1-15.7c-0.5-8.2-7.7-14.7-16.3-14.6
           c-8.5,0.1-15.6,6.7-15.9,15c-0.3,8.5,5.9,15.8,14.3,16.6c1.4,0.1,2.8,0.2,4.2,0.5c5.9,1.2,10.2,6.7,9.8,12.6
           c-0.4,6.4-5.5,11.4-11.8,11.7C24.9,84.2,5.9,68.5,3.2,49.3C-0.1,26.9,14.4,6.8,36.4,2.8c22.3-4,43.4,10,48.1,32
           c4.3,20-8.6,41.2-28.4,46.7C55.9,81.5,55.6,81.5,55.4,81.5z"
              ></path>
            </svg>
            <h3 className="text-xl font-semibold text-gray-800">
              Qode Interactive
            </h3>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-700">
              Related Themes
            </h3>
          </div>
          <div className="space-y-4">
            {menu.map((menuItem, index) => {
              const { label, subtitle, src, price } = menuItem;
              return (
                <Card
                  key={index}
                  label={label}
                  subtitle={subtitle}
                  src={src}
                  price={price}
                />
              );
            })}
          </div>
        </div>
        <div className="fixed z-30 top-1/2 -mx-11">
          <button className="bg-[#ef2853]" onClick={toggleVisibility}>
            <svg className="h-10 p-2" viewBox="0 0 32 32" fill="white">
              <path d="M 4,15C 4,15.552, 4.448,16, 5,16l 19.586,0 l-4.292,4.292c-0.39,0.39-0.39,1.024,0,1.414 c 0.39,0.39, 1.024,0.39, 1.414,0l 6-6c 0.092-0.092, 0.166-0.202, 0.216-0.324C 27.972,15.26, 28,15.132, 28,15.004c0-0.002,0-0.002,0-0.004 l0,0c0-0.13-0.026-0.26-0.078-0.382c-0.050-0.122-0.124-0.232-0.216-0.324l-6-6c-0.39-0.39-1.024-0.39-1.414,0 c-0.39,0.39-0.39,1.024,0,1.414L 24.586,14L 5,14 C 4.448,14, 4,14.448, 4,15z"></path>
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};
