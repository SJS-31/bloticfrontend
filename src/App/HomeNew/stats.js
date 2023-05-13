import React from "react";
import statsimage from "../../assets/SolutionVec.png";

const StatsPage = () => {
  // Dummy data
  const students = 1500;
  const Events = 230;
  const revenue = 5000;

  return (
    <div className="p-8 md:p-20 bg-gradient-to-r from-blue-300 to-purple-400">
  <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 animate-pulse">Statistics</h1>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mx-auto max-w-7xl">
    <div className="p-6 md:p-10 shadow-lg h-72 w-full md:w-72 flex flex-col items-center justify-center rounded-3xl bg-white transition duration-300 transform hover:-translate-y-1 hover:shadow-xl">
      <img src={statsimage} className="h-50 w-50 mb-4 animate-bounce" alt="logo" />
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 my-2 text-center">students</h2>
      <p className="text-3xl md:text-4xl font-bold text-gray-700 text-center">{students}+</p>
    </div>
    <div className="p-6 md:p-10 shadow-lg h-72 w-full md:w-72 flex flex-col items-center justify-center rounded-3xl bg-white transition duration-300 transform hover:-translate-y-1 hover:shadow-xl">
      <img src={statsimage} className="h-50 w-50 mb-4 animate-bounce" alt="logo" />
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 my-2 text-center">Events</h2>
      <p className="text-3xl md:text-4xl font-bold text-gray-700 text-center">{Events}+</p>
    </div>
    <div className="p-6 md:p-10 shadow-lg h-72 w-full md:w-72 flex flex-col items-center justify-center rounded-3xl bg-white transition duration-300 transform hover:-translate-y-1 hover:shadow-xl">
      <img src={statsimage} className="h-50 w-50 mb-4 animate-bounce" alt="logo" />
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 my-2 text-center">Revenue</h2>
      <p className="text-3xl md:text-4xl font-bold text-gray-700 text-center">${revenue}</p>
    </div>
  </div>
</div>
  );
};

export default StatsPage;
