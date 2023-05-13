import Cards from "./cards";

const Home2 = () => {
  return (
    <div className="home2  bg-gradient-to-r from-white to-blue-100  pb-24">
      <h1 className="flex items-center pb-24 justify-center lg:justify-around not-italic font-semibold text-5xl md:text-6xl lg:text-7xl pt-7 leading-16 lg:flex-row">
        WHO WE ARE
      </h1>
      <div className="flex flex-col md:flex-row ">
        <div className="content2 w-full md:w-1/2 justify-around pt-0">
          <p className="font-normal not-italic leading-8 md:leading-10 lg:text-2xl mb-8 lg:p-20 mt-8 md:mt-24 text-center">
            "BLOTIC" is an early-stage Web3 startup that serves as a gateway for
            all newbies to explore Web3 and build their future there. At BLOTIC,
            we are creating a pan-Indian community of blockchain enthusiasts.
          </p>
          <div className="flex justify-center">
            <button className="bg-indigo-500 px-6 py-3 shadow-lg text-white uppercase tracking-wider font-semibold text-sm hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-50 transition rounded-full items-center">
              Explore here
            </button>
          </div>
        </div>

        <Cards />
      </div>
    </div>
  );
};

export default Home2;
