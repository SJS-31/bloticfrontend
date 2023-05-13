import { Outlet } from "react-router-dom";
import logo from "../../assets/astronaut-in-tea-break.gif";
// import Button from "../../components/button/button.component";
import Home2 from "./home2";
import StatsPage from "./stats";
import FeedbackSlider from "./feedbackSlider";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-white to-blue-100  ">
        <div class="flex flex-col md:flex-row items-center justify-around bg-gradient-to-r from-white to-blue-100 min-h-screeny">
        <div class="w-full md:w-3/4 md:content md:pl-12">
          <h1 class="h-52 md:h-auto font-bold mb-6 not-italic text-5xl md:text-6xl leading-16 md:leading-20 text-center md:text-left ">
            ENTRY GATEWAY FOR ANY WEB3 <span class="text-blue-500">ENTHUSIAST</span>
          </h1>
          <p class="not-italic font-normal text-3xl md:text-4xl leading-10 md:leading-12 pb-6 md:pb-12 text-center md:text-left">
            An ecosystem to acquire Web3 knowledge with practical expertise. A way to unlock your quest for blockchain
          </p>
          <div class="btn-box text-center md:text-left">
            <button class="bg-indigo-500 px-3 mt-2 inline-block py-3 shadow-lg text-white uppercase tracking-wider font-semibold text-sm hover:bg-indigo-400 hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-50 transition transform space-x-2 rounded-3xl">Explore here</button>
          </div>
        </div>
      
        <div class="w-full md:w-auto md:ml-6 ">
          <img src={logo} class="App-logo mx-auto md:mx-0" alt="logo" />
        </div>
      </div>

      <Home2 />
      <StatsPage />

      <FeedbackSlider />

      <Outlet />
    </div>
  );
};

export default Home;
