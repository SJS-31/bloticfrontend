import axios from "axios";

  const finduser = async (data)=>{
     await axios.post('http://192.168.0.107:8080/api/finduser', data)
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  const getuser = async (data)=>{
    await axios.post('http://192.168.0.107:8080/api/getuser', data)
   .then(response => {
     console.log('Response:', response.data);
   })
   .catch(error => {
     console.error('Error:', error);
   });
 }
  export  {finduser , getuser}