/* eslint-disable react/prop-types */

export const Card = ({ src, label, subtitle, price }) => {
  return (
    <>
      <div className="max-w-xs border border-gray-300 rounded-lg shadow-md my-4">
        <div className="h-48 overflow-hidden">
          <img className="w-full h-full object-cover" src={src} alt={label} />
        </div>
        <div className="flex justify-between p-4">
          <div className="flex-1 pr-2">
            <p className="font-semibold text-gray-800 text-base">{label}</p>
            <p className="font-light text-gray-500 text-xs">{subtitle}</p>
          </div>
          <p className="bg-gray-100 border border-gray-200 px-2 py-1 rounded-md font-medium text-sm text-gray-700 self-end">
            {price}
          </p>
        </div>
      </div>
    </>
  );
};
