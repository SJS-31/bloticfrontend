import React  from "react";
import Navbar from '../Components/Navbar2';
import FooterSection from "../HomePage/FooterSection/footer";
import coin from "../../assets/coin.gif";
import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord_logo.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/githubicon.png";
import { getuser } from "../../helper/helper";
import  useState  from "react";
// const data2 = {
//   username: "luv",
//   password: "erer",
//   about: "LUADA LASSUN",
//   tagline: "bhak teri ....e",
//   coins: "1000",
// };

// const [username, setUsername] = useState();
// getuser(data2);

export default function Userprofile() {
  
  // setUsername(data2.username);

  return (
    <div>
      <Navbar />
      {/* Profile */}
      <div class="bg-gray-100">
        <div class="container mt-20 mx-auto py-8">
          <img src="" alt="" />
          <div class="grid grid-cols-4  sm:grid-cols-12 gap-6 px-4">
            <div class="col-span-4 sm:col-span-3">
              <div class="bg-white shadow rounded-lg p-6">
                <div class="flex flex-col items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/94.jpg"
                    class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  ></img>
                  <h1 class="text-xl font-bold">Jhon Doe</h1>
                  <p class="text-gray-600">Software Developer</p>
                  <div class="mt-6 flex flex-wrap gap-3 justify-center">
                    <img src={coin} alt="" />
                    <h1 className="font-bold text-2xl py-3 ">200</h1>
                  </div>
                </div>
                <hr class="my-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-25 dark:opacity-100" />

                <div class="flex flex-col">
                  <span class="text-blue-600 uppercase font-bold text-xl mb-2">
                    Skills
                  </span>
                  <ul className="pl-4 list-disc">
                    <li class="mb-2">JavaScript</li>
                    <li class="mb-2">React</li>
                    <li class="mb-2">Node.js</li>
                    <li class="mb-2">HTML/CSS</li>
                    <li class="mb-2">Tailwind Css</li>
                  </ul>
                </div>

                <div className="w-full pt-4 space-y-3">
                  {/* <p className="text-center text-xl text-cyan-500 font-medium">Follow us on</p> */}
                  <div className="flex justify-between w-full md:max-w-max  md:space-x-8 mx-auto">
                    <a target="_blank" href="https://twitter.com/Blotic_web3">
                      <img src={twitter} alt="twitter" className="w-6 h-6" />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/blotic/"
                    >
                      <img src={linkedin} alt="linkedin" className="w-6 h-6" />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/blotic_web3/"
                    >
                      <img
                        src={instagram}
                        alt="instagram"
                        className="w-6 h-6"
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://discord.com/channels/962557015975149580/962562037681111110"
                    >
                      <img src={discord} alt="discord" className="w-6 h-6" />
                    </a>
                    <a
                      target="_blank"
                      href="https://discord.com/channels/962557015975149580/962562037681111110"
                    >
                      <img src={github} alt="discord" className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-4 sm:col-span-9">
              <div class="bg-white shadow rounded-lg p-6">
                <div className="flex justify-between">
                <h2 class="text-xl font-bold text-blue-600 mb-4">About Me</h2>
                
                </div>
                <p class="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  finibus est vitae tortor ullamcorper, ut vestibulum velit
                  convallis. Aenean posuere risus non velit egestas suscipit.
                  Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis
                  in faucibus orci luctus et ultrices posuere cubilia Curae;
                  Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
                  luctus risus rhoncus id.
                </p>

                <hr class="my-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-25 dark:opacity-100" />

                <h2 class="text-xl font-bold text-blue-600 mt-6 mb-4">
                  Experience
                </h2>
                <div class="mb-6">
                  <div class="flex justify-between">
                    <span class="text-gray-600 font-bold">Web Developer</span>
                    <p>
                      <span class="text-gray-600 mr-2">at ABC Company</span>
                      <span class="text-gray-600">2017 - 2019</span>
                    </p>
                  </div>
                  <p class="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus est vitae tortor ullamcorper, ut vestibulum velit
                    convallis. Aenean posuere risus non velit egestas suscipit.
                  </p>
                </div>
                <div class="mb-6">
                  <div class="flex justify-between">
                    <span class="text-gray-600 font-bold">Web Developer</span>
                    <p>
                      <span class="text-gray-600 mr-2">at ABC Company</span>
                      <span class="text-gray-600">2017 - 2019</span>
                    </p>
                  </div>
                  <p class="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus est vitae tortor ullamcorper, ut vestibulum velit
                    convallis. Aenean posuere risus non velit egestas suscipit.
                  </p>
                </div>
                <div class="mb-6">
                  <div class="flex justify-between">
                    <span class="text-gray-600 font-bold">Web Developer</span>
                    <p>
                      <span class="text-gray-600 mr-2">at ABC Company</span>
                      <span class="text-gray-600">2017 - 2019</span>
                    </p>
                  </div>
                  <p class="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus est vitae tortor ullamcorper, ut vestibulum velit
                    convallis. Aenean posuere risus non velit egestas suscipit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
