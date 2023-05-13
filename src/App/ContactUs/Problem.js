import React from "react";
import img from "../../assets/MIT4.jpeg";

export default function Problem() {
  return (
    <div className="  justify-between mt-10 py-10 px-12 bg-gradient-to-r from-white to-blue-100 lg:py-20 lg:px-80 ">
      <h1 className="text-6xl lg:text-8xl">Problems </h1>
      <p className="text-3xl lg:text-5xl text-gray-500">in the  <span className='text-blue-500'>Industry</span></p>

      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 py-5">
        <div className=" p-3 bg-gray-50 rounded-xl shadow-md lg:p-5">
          <h1 className="lg:text-4xl text-3xl text-blue-500">Community</h1>
          <ul className="pl-4 pt-2 list-disc">
            <li>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                sint, ducimus distinctio, repudiandae fugiat aliquam quam
                voluptas expedita ullam harum ea? .
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                sint, ducimus distinctio, repudiandae fugiat aliquam quam
                voluptas expedita ullam harum ea?.
              </p>
            </li>
          </ul>
        </div>
        <div className=" p-3 bg-gray-50 rounded-xl shadow-md lg:p-5">
          <h1 className="lg:text-4xl text-3xl text-blue-500">Jobs</h1>
          <ul className="pl-4 pt-2 list-disc">
            <li>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                sint, ducimus distinctio, repudiandae fugiat aliquam quam
                voluptas expedita ullam harum ea?
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                sint, ducimus distinctio, repudiandae fugiat aliquam quam
                voluptas expedita ullam harum ea?.
              </p>
            </li>
          </ul>
        </div>
        
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 py-5">
        <div className=" p-3 bg-gray-50 rounded-xl shadow-md lg:p-5">
          <h1 className="lg:text-4xl text-3xl text-blue-500">Students</h1>
          <ul className="pl-4 pt-2 list-disc">
            <li>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                sint, ducimus distinctio, repudiandae fugiat aliquam quam
                voluptas expedita ullam harum ea? .
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                sint, ducimus distinctio, repudiandae fugiat aliquam quam
                voluptas expedita ullam harum ea?.
              </p>
            </li>
          </ul>
        </div>
        <div className=" p-3 bg-gray-50 rounded-xl shadow-md lg:p-5">
          <h1 className="lg:text-4xl text-3xl text-blue-500">Meetups</h1>
          <ul className="pl-4 pt-2 list-disc">
            <li>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                sint, ducimus distinctio, repudiandae fugiat aliquam quam
                voluptas expedita ullam harum ea?
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                sint, ducimus distinctio, repudiandae fugiat aliquam quam
                voluptas expedita ullam harum ea?.
              </p>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}
