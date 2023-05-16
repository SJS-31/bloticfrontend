import React, { Component, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import ContactUs from "./ContactUs/Testbox";
import EventsPage from "./EventsPage/events";
import HomePage from "./HomePage/home";
import Learning from "./Learning.js/Learning";
import BountyDesc from "./Learning.js/BountyDesc/bountydesc";
import UserProfile from "./UserProfile/userprofile";
import Roadmap from "./Roadmap/Roadmap";
import HomeNew from "./HomeNew/Homemain";
import UserProfileform from "./UserProfile/UserProfileform";
import Login from "./LoginPage/Login";
import Signup from "./LoginPage/Signup";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Web3Hive from "./Web3Hive/web3hive";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWFPDTdqjzq_bgM2PDDOaq-izB0sY7ELA",
  authDomain: "bloticdemo.firebaseapp.com",
  projectId: "bloticdemo",
  storageBucket: "bloticdemo.appspot.com",
  messagingSenderId: "1039707399775",
  appId: "1:1039707399775:web:655c25851cc21ab0989dea",
};

let username = "";
let token = "";
const chklocaluser = () => {
  username = localStorage.getItem("username");
  token = localStorage.getItem("token");
  console.log("local username formm app.js ", username);
  console.log("local token formm app.js ", token);
};

chklocaluser();
// Initialize Firebase\

const app = initializeApp(firebaseConfig);

const App = () => {
  useEffect(chklocaluser, []);

  return (
    <Routes>
      <Route path="/" element={<HomeNew />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/BountyDesc" element={<BountyDesc />} />
      <Route path="/About" element={<ContactUs />} />
      <Route path="/web-3-hive" element={<Web3Hive />} />
      <Route path="/Bounty" element={(username )?<Learning />:<Login />} />

      {chklocaluser()}
      <Route path="/Profile" element={(username )?<UserProfile/>:<Login />} />
      <Route path="/Learning" element={(username )?<Roadmap />:<Login />} />
      <Route path="/HomeNew" element={<HomeNew />} />
      <Route path="/Log" element={(username )?<HomeNew />:<Login />}/>
      <Route path="/Signup" element={(username )?<HomeNew/>:<Signup />} />
      <Route path="/UserProfileform" element={(username )?<UserProfileform/>:<Login />} />
    </Routes>
  );
};

export default App;
