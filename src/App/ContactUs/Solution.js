import React from "react";
import solimg from "../../assets/SolutionVec.png";

export default function Solution() {
  return (
    <div className="flex flex-col  justify-between bg-gradient-to-r from-white to-blue-100 py-10 px-12 lg:py-18 lg:px-80 ">
      <h1 className="text-6xl lg:text-8xl">Solution </h1>
      <p className="text-3xl lg:text-5xl text-gray-500">by <span className='text-blue-500'>Blotic</span></p>
      <div className="lg:flex lg:flex-row justify-between">
        <div className="lg:w-3/5 lg:p-5">
          <p className="text-sm lg:text-lg mb-10 text-justify">
            Lorem ipsum dolor, sit amet{" "}
            <span className="text-blue-500">consectetur</span> adipisicing elit.
            Ad minima placeat illum enim esse quisquam nesciunt, repellendus
            dolorem totam. Saepe quos eveniet, provident{" "}
            <span className="text-blue-500">consectetur</span> vitae cum neque
            nesciunt aspernatur voluptate quisquam nesciunt, repellendus dolorem
            totam. Saepe quos eveniet, provident vitae cum neque nesciunt
            aspernatur voluptate voluptas.
          </p>
          <p className="text-sm lg:text-lg mb-10 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad minima
            placeat illum enim esse quisquam{" "}
            <span className="text-blue-500">consectetur</span> nesciunt,
            repellendus dolorem totam. Saepe quos eveniet, provident vitae cum
            neque nesciunt aspernatur voluptate quisquam nesciunt, repellendus{" "}
            <span className="text-blue-500">consectetur</span> dolorem totam.
            Saepe quos eveniet, provident vitae cum neque nesciunt aspernatur
            voluptate voluptas.
          </p>
        </div>
        <div className="lg:w-2/5 lg:p-5 items-center place-content-center">
          <img src={solimg} alt="" />
        </div>
      </div>
    </div>
  );
}
