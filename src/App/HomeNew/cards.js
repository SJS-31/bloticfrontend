import { useState } from "react";

import logo1 from "../../assets/Contact.jpg";

const Cards = () => {
  const [cards] = useState([
    {
      id: 1,
      title: "Education-1",
      text: "Our vision is that anyone, everywhere in the world, will be able to use blockchain as a vehicle to create wealth for themselves andWe serve our students by providing an abundance of resources such as Crypto Taxes, Intro to Virtual Land, DeFi and many more. We empower students to host workshops at their universities, and build their network while cultivating communities and creating career opportunities",
    },
    {
      id: 2,
      title: "Education-2",
      text: "Our vision is that anyone, everywhere in the world, will be able to use blockchain as a vehicle to create wealth for themselves andWe serve our students by providing an abundance of resources such as Crypto Taxes, Intro to Virtual Land, DeFi and many more. We empower students to host workshops at their universities, and build their network while cultivating communities and creating career opportunities",
    },

    {
      id: 3,
      title: "Education-3",
      text: "Our vision is that anyone, everywhere in the world, will be able to use blockchain as a vehicle to create wealth for themselves andWe serve our students by providing an abundance of resources such as Crypto Taxes, Intro to Virtual Land, DeFi and many more. We empower students to host workshops at their universities, and build their network while cultivating communities and creating career opportunities",
    },

    {
      id: 4,
      title: "Education-4",
      text: "Our vision is that anyone, everywhere in the world, will be able to use blockchain as a vehicle to create wealth for themselves andWe serve our students by providing an abundance of resources such as Crypto Taxes, Intro to Virtual Land, DeFi and many more. We empower students to host workshops at their universities, and build their network while cultivating communities and creating career opportunities",
    },
  ]);
  return (
    <div className="container w-full md:w-1/2 flex flex-wrap items-center justify-center mt-20 md:mt-0">
      {cards.map((card, id) => {
        return (
          <div
            key={id}
            className="max-w-xs overflow-hidden shadow-md m-1 mb-6 items-center justify-center rounded-3xl bg-gray-50 px-4 py-8 text-center"
          >
            <img src={logo1} className="w-1/2 mx-auto mb-4" alt="logo" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600 h-20 overflow-hidden">{card.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
