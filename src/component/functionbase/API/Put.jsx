// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// function put() {
// const [name,setname] = useState();
// const [email,setemail] = useState();
// const [username,setusername] = useState();
// const a = useParams()
// console.log(a);
// const getdata = async () => {
//   // let response  = await axios.get(`https://jsonplaceholder.typicode.com/users/${a.id}`)
//   let response = await axios.put("https://jsonplaceholder.typicode.com/users",{name,email,username}) 
//   response = await response.data
//    setname(response.name)
//   setemail(response.email)
//   setusername(response.username)
//   console.log(response)
//   }
//   // useEffect(() => {
//   //   getdata()
//   // })
//     return (
//       <form>
//         <input type="text" value={name}/><br/>
//         <input type="email" value={email}/><br/>
//         <input type="text" value={username}/><br/>
// <button  onClick={() => {getdata()}}>Update</button>
//       </form>
//     );
//   }

// export default put 

import { useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
function Put() {
  
  const navigate =  useNavigate()
  const [name,setname] = useState();
const [email,setemail] = useState();
const [username,setusername] = useState();
  
    const a = useParams()
console.log(a);
    function fun(e) {
    setname(e.target.value);
  }
  function fun2(e) {
    setemail(e.target.value);
  }
  function fun3(e) {
    setusername(e.target.value);
  }

  function print() {
   
    // console.log(name, email, password);
    axios.put(`https://jsonplaceholder.typicode.com/users/${a.id}`,{name,email,username}).then(() => {
        console.log("data updated :",name,email,username);
    })
   navigate("/")
  }
  return (
    <div>
      Name:
      <input type="text" onChange={fun} value={name} />
      <br />
      Email:
      <input type="email" onChange={fun2} value={email} />
      <br />
      username:
      <input type="text" onChange={fun3} value={username} />
      <br />
      <button
        onClick={() => {
          print()
        }}
      >
        click
      </button>
    </div>
  );
}
export default Put;
