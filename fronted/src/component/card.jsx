import React from 'react';

function Cards({ item }) {
  return (
    <div className="flex justify-center items-center p-3">
      <div
        className="
          card 
          bg-base-300 
          w-80 h-129  sm:w-72 md:w-80 lg:w-96 
          shadow-lg 
          border border-gray-400 
          rounded-lg 
          transform transition-transform duration-300 
          hover:scale-105 hover:shadow-2xl
          flex flex-col justify-between
        "
      >
        <figure className="overflow-hidden rounded-t-lg ">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full p-5 object-cover transform transition-transform duration-300 hover:scale-110"
          />
        </figure>

        <div className="card-body p-5">
          <h2 className="card-title text-lg font-extrabold flex items-center justify-between">
            <span>{item.name}</span>
            <div className="badge badge-secondary text-xs">{item.categry}</div>
          </h2>

          <h4 className="text-sm font-semibold  mb-1">
            {item.title}
          </h4>

          <p className="text-sm  mb-3 line-clamp-3">
            {item.desc}
          </p>

          <div className="card-actions justify-between items-center mt-auto">
            <div className="badge badge-outline hover:bg-green-400 hover:text-white transition-all">
              ₹{item.price}
            </div>
            <button className="cursor-pointer px-3 py-1 rounded-md border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-all">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
