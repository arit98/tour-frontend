import React from "react";

const ServiceCard = ({ data }) => {
  return (
    <div className="w-[300px] flex items-start justify-center flex-col border-r-2 border-b-2 rounded-br-lg border-teal-400 p-6 gap-2">
      <div className="h-10 w-10 bg-teal-400 flex items-center justify-center text-2xl rounded-full">
        {data && <data.icon />}
      </div>
      <p className="text-lg font-semibold">{data.title}</p>
      <p className="text-sm">
        {data.text}
      </p>
    </div>
  );
};

export default ServiceCard;
