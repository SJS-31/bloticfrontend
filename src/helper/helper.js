import axios from "axios";
import jwtDecode from "jwt-decode";

// import dotenv from "dotenv"
// dotenv.config();
//   const finduser = async (data)=>{
//      await axios.post('http://192.168.0.107:8080/api/finduser', data)
//     .then(response => {
//       console.log('Response:', response.data);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
//   }

//   const getuser = async (data)=>{
//     await axios.post('http://192.168.0.107:8080/api/getuser', data)
//    .then(response => {
//      console.log('Response:', response.data);
//    })
//    .catch(error => {
//      console.error('Error:', error);
//    });
//  }
//   export  {finduser , getuser}

//sending data form signup to http://localhost:8080/api/signup
const senddata = async (username, email, password) => {
  const data = { username, email, password };
  console.log(data);
  // const  url = `${process.env.REACT_APP_MONGOURL}\api\signup`
  const result = await axios.post("http://192.168.0.107:8080/api/signup", data);
  // console.log(result);
  localStorage.setItem("username", result.data.user);
  console.log("username form  local storage", localStorage.getItem("usernamesign"));
  window.location.reload()
  return result;
};



const sendlogin = async (email, password) => {
  const data = {  email, password };
  console.log(data);
  // const  url = `${process.env.REACT_APP_MONGOURL}\api\signup`
  const result = await axios.post("http://192.168.107:8080/api/login", data);
  // console.log(result.data);
  const decoded  = jwtDecode(result.data);
  console.log("decoded :  " , decoded) 
  localStorage.setItem("token", result.data);
  localStorage.setItem("username", decoded.u);
  console.log("useremail form  local storage form helper", localStorage.getItem("username"));
  console.log("token form  local storage helper", localStorage.getItem("token"));
  return result.data;
};

const getuser = async (username) => {
  const data = { username} ;
  console.log(data);
  // const  url = `${process.env.REACT_APP_MONGOURL}\api\signup`
  const result = await axios.post("http://192.168.0.107:8080/api/finduser", data);
  // console.log("resul from api : ",result);
  // console.log("username form  local storage getuser helper", localStorage.getItem("username"));
  return result;
};




const sendformdata =async (data)=>{
 
 delete data.username
 data={...data , username : localStorage.getItem("username")}
 console.log("data from sendfrom daata" ,data) 
 const result = await axios.post("http://192.168.0.107:8080/api/getuser", data)
 return result

}



export { senddata , sendlogin , getuser , sendformdata };
