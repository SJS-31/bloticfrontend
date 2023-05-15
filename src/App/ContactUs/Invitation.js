import React from "react";

export default function Invitation() {
  return (
    <div className="  justify-between  py-10 px-12 lg:py-20 lg:px-80 ">
      <h1 className="text-6xl lg:text-8xl text-white">Invitation</h1>
      <p className="text-3xl lg:text-5xl text-gray-500 ">
        to the <span className="text-blue-500">Future</span>
      </p>

      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8  py-5">
        <div className="bg-gradient-to-r lg:w-1/2 from-cyan-600 to-blue-700 opacity-90 p-3 rounded-xl shadow-md lg:p-5">
          <h1 className="lg:text-4xl text-3xl text-white">Blotic Points</h1>

          <p className="text-sm lg:text-lg mt-2 text-white text-justify">
            Are you passionate about Web3 and eager to make a difference? Join
            Blotic College Chapters and be a part of the Web3 revolution in
            India! Our college chapters provide a unique platform for students
            to showcase their skills, learn about cutting-edge technology, and
            connect with like-minded individuals. Through events, workshops, and
            competitions, you will get hands-on experience with blockchain
            technology and gain a deeper understanding of how it is transforming
            the world.
          </p>
          {/* <p className="text-sm lg:text-lg mt-2 text-white text-justify">
            At Blotic College Chapters, we focus on three key areas for
            students: Education, Employment, and Start-ups. Our aim is to equip
            you with the skills and knowledge you need to succeed in the Web3
            industry, whether you're interested in pursuing a career in tech or
            starting your own Web3-based startup. So why wait? Join us today and
            become a pioneer of the Web3 movement in India! Click the call to
            action button now to open a college chapter in your college and take
            the first step towards a successful future.
          </p> */}
        </div>
        <div className="p-3 lg:w-1/2 lg:p-5">
          <h1 className="lg:text-4xl text-3xl  text-blue-500">
            College Chpater
          </h1>

          <p className="text-sm lg:text-lg mt-2 text-white text-justify">
          At Blotic College Chapters, we focus on three key areas for
            students: Education, Employment, and Start-ups. Our aim is to equip
            you with the skills and knowledge you need to succeed in the Web3
            industry, whether you're interested in pursuing a career in tech or
            starting your own Web3-based startup. So why wait? Join us today and
            become a pioneer of the Web3 movement in India! Click the call to
            action button now to open a college chapter in your college and take
            the first step towards a successful future.
          </p>
          {/* <p className="text-sm lg:text-lg mt-2 text-white text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            facere quisquam accusantium ipsam, corporis maiores corrupti
            perferendis impedit, nihil consequuntur reiciendis.
          </p> */}
          <button class="bg-sky-600 hover:bg-gradient-to-r from-cyan-500 to-blue-500  text-white font-bold w-full mt-5 py-2 px-4 rounded shadow hover:shadow-lg transition duration-500 transform hover:-translate-y-1 hover:scale-10">
            <a href="">Apply</a>
          </button>
        </div>
      </div>
    </div>
  );
}
