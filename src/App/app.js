import React, { Component } from "react";
import {Route, Routes, Navigate} from "react-router-dom"
import ContactUs from "./ContactUs/Testbox";
import EventsPage from "./EventsPage/events";
import HomePage from "./HomePage/home";
import Learning from "./Learning.js/Learning";
import BountyDesc from './Learning.js/BountyDesc/bountydesc';
import UserProfile from './UserProfile/userprofile'
import Roadmap from './Roadmap/Roadmap'
import HomeNew from './HomeNew/Homemain'
import UserProfileform from './UserProfile/UserProfileform'
import Login from './LoginPage/Login'
import Signup from './LoginPage/Signup'

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
  appId: "1:1039707399775:web:655c25851cc21ab0989dea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
class App extends Component{
    render(){
        return(
            <Routes>
                <Route path="/" element={<HomeNew />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/BountyDesc" element={<BountyDesc />} />
                <Route path="/About" element={<ContactUs />} />
                <Route path="/web-3-hive" element={<Web3Hive />} />
                <Route path="/Bounty" element={<Learning />} />
                <Route path="/Profile" element={<UserProfile />} />
                <Route path="/Learning" element={<Roadmap />} />
                <Route path="/HomeNew" element={<HomeNew />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/UserProfileform" element={<UserProfileform />} />
            </Routes>
        )
    }
}

export default App