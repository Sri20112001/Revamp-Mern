/* eslint-disable react/prop-types */

export const SocialIcon = ({ icon, title }) => {
  return (
    <div className="inline-block space-y-4">
      <button className="flex items-center gap-2 bg-gray-200 text-white font-semibold rounded-full">
        <span>{icon}</span>
        {title ? <p className="text-lg">{title}</p> : null}
      </button>
    </div>
  );
};
