import React from "react";

export default function Cards({ id, name, image, status, gender, character }) {
  return (
    <>
      <div className=" ">
        <div className=" shadow-md border rounded-lg   bg-gray-800  border-gray-700">
          <img className="rounded-t-md w-full h-full" src={image} alt={name} />

          <div className="px-3 pt-2">
            <h1 className="text-white">#{id}</h1>

            <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2 dark:text-white">
              {name}
            </h5>

            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
              State : {status}
            </p>
            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
              Gender : {gender}
            </p>
            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
              Character : {character}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
