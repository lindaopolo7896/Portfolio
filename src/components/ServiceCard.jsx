import React from "react";

function ServiceCard({ service }) {
  return (
    <div
      key={service.id}
      className="bg-white/7 p-4 md:w-full lg:w-1/3 border border-white/60 rounded-xl flex flex-col gap-5 shadow-lg shadow-[#14B8A6]/25 hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-white/66">{service.name}</h1>
        <img src={service.icon} alt={service.name} className="h-[40px]" />
      </div>
      <p className="text-white/80 text-lg ">{service.description}</p>
      <button className="bg-[#14B8A6] w-1/2 p-2 text-lg font-bold rounded-full hover:bg-transparent hover:text-[#14B8A6] hover:border border-[#14B8A6] transition-all duration-300 ease-in-out">
        {service.button}
      </button>
    </div>
  );
}

export default ServiceCard;
