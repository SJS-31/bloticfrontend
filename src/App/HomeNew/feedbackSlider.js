// import React from "react";
// import SwiperCore, { Autoplay, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";

// SwiperCore.use([Autoplay, Pagination]);

// const feedbacks = [
//   {
//     id: 1,
//     name: "John Doe",
//     feedback:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     avatar: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
//   {
//     id: 2,
//     name: "Jane Doe",
//     feedback:
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     avatar: "https://randomuser.me/api/portraits/women/1.jpg",
//   },
//   {
//     id: 3,
//     name: "Bob Smith",
//     feedback:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     avatar: "https://randomuser.me/api/portraits/men/2.jpg",
//   },

//   {
//     id: 4,
//     name: "Bob Smith",
//     feedback:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     avatar: "https://randomuser.me/api/portraits/men/2.jpg",
//   },

//   {
//     id: 5,
//     name: "Bob Smith",
//     feedback:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     avatar: "https://randomuser.me/api/portraits/men/2.jpg",
//   },

//   {
//     id: 6,
//     name: "Bob Smith",
//     feedback:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     avatar: "https://randomuser.me/api/portraits/men/2.jpg",
//   },
// ];

// const FeedbackSlider = () => {
//   return (
//     <Swiper
//     autoplay={{ delay: 2000 }}
//     pagination={{ clickable: true }}
//     className="my-16"
//     slidesPerView={3}
//     breakpoints={{
//       // when window width is >= 640px
//       300: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       // when window width is >= 768px
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 30,
//       },
//       // when window width is >= 1024px
//       1024: {
//         slidesPerView: 3,
//         spaceBetween: 40,
//       },
//     }}
//   >
//     {feedbacks.map((feedback) => (
//       <SwiperSlide key={feedback.id} className="p-4">
//   <div className="max-w-lg mx-auto pb-8">
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden h-72 transform hover:scale-105 transition duration-500">
//       <div className="px-6 py-8 sm:p-10">
//         <div className="flex items-center">
//           <img
//             src={feedback.avatar}
//             alt="Avatar"
//             className="h-16 w-16 rounded-full mr-4 border-4 border-white shadow-md"
//           />
//           <div>
//             <h4 className="text-2xl font-semibold text-gray-800 mb-2">
//               {feedback.name}
//             </h4>
//             <p className="text-gray-600 text-lg">{feedback.feedback}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </SwiperSlide>

//     ))}
//   </Swiper>

//   );
// };

// export default FeedbackSlider;

import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay, Pagination]);

const feedbacks = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Doe",
    feedback:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 3,
    name: "Bob Smith",
    feedback:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },

  {
    id: 4,
    name: "Bob Smith",
    feedback:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },

  {
    id: 5,
    name: "Bob Smith",
    feedback:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },

  {
    id: 6,
    name: "Bob Smith",
    feedback:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const FeedbackSlider = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl mt-20 font-bold text-white text-center mb-12 animate-pulse">
        Testimonials
      </h1>{" "}
      <Swiper
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        className="my-16"
        slidesPerView={3}
        breakpoints={{
          // when window width is >= 640px
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {feedbacks.map((feedback) => (
          <SwiperSlide key={feedback.id} className="p-4">
            <div className="max-w-lg mx-auto pb-8 pr-4 pl-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-72 transform hover:scale-105 transition duration-500 mb-10">
                <div className="px-6 py-8 sm:p-10">
                  <div className="flex items-center">
                    <img
                      src={feedback.avatar}
                      alt="Avatar"
                      className="h-16 w-16 rounded-full mr-4 border-4 border-white shadow-md"
                    />
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                        {feedback.name}
                      </h4>
                      <p className="text-gray-600 text-lg">
                        {feedback.feedback}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedbackSlider;
