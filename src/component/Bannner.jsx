import React from "react";
import { Link } from "react-router-dom";

const Bannner = ({heading, description, buttonText, image, imgClassName}) => {
  return (
  
      <div className=" px-4 mt-20 md:mt-0 py-16">
       <div className=" grid md:grid-cols-2 items-center gap-10">
       <div className=" ">
          <h1 className="text-5xl sm:text-6xl font-bold font-rubik">
            {heading}
          </h1>
          <p className="text-md md:text-2xl mt-4 text-gray-400">
            {description}
          </p>
          <button className="mt-6 py-3 px-6 rounded-full bg-red-500 font-bold hover:bg-red-300 transition duration-300">
            <Link to="shop">{buttonText}</Link>
          </button>
        </div>

        <div className=" flex justify-center items-center">
          <img src={image} alt="img" className={`mt-14 md:ml-20 w-full max-w-[30%]${imgClassName}`}  />
        </div>
       </div>
        </div>
  );
};

export default Bannner;
