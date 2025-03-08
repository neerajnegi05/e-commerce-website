
// import React, { useEffect } from 'react'
// function First(){
    // fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
    //     result.json().then((resp)=>{
    //         console.warn("result ",resp)
   //     })
    // })
    
//     return (
//         <div>
//         <h1>get api call</h1>
//               </div>

//     );
// }
// export default First

// import axios from 'axios';
// function First(){
//    let data =  axios("https://jsonplaceholder.typicode.com/users")
//       data.then(Response => {
// console.log(Response)
//       })
//     return (
//         <div>
//         <h1>get api call</h1>
//         </div>

//     );
// }
// export default First



import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const URL = ("https://jsonplaceholder.typicode.com/users")

const Table = () =>{


const [userdata,setuserdata] = useState([]);
// const [storedata, setstoredata] = useState("");

const fetchdata = async () => {
    try{
const resp = await fetch(URL);
const data = await resp.json()
if(data.length>0){
    setuserdata(data);
}
console.log(data)
}catch (e){
    console.error(e);
}
}
useEffect (() => {
    fetchdata(URL);
},[])


function deleteUser(id){

    fetch(`https://jsonplaceholder.typicode.com/users/${id}` ,{
        method: 'DELETE'
         }).then((result) => {
            result.json().then((resp) =>{
                console.log("data deleted")
                })
         })
         fetchdata();

}

 
return (
    <div>
        <table border={2}>
          <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>address</th>
            <th>action</th>
            </tr>
          </thead>
<tbody>
{
   
   userdata.map((cur,ind) => {
    const {id,name,email} = cur
       const {city,street,zipcode} = cur.address

       return (

        <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{city}, {street}, {zipcode}</td>
        <td><button>
            {/* <Link to={`/update/${id}`} >Edit</Link> */}
            <Link to={`/put/${id}`} >Edit</Link>
            </button>
            <button onClick={() =>deleteUser(id)}>delete</button></td>
          </tr>
       );
          })
}
</tbody>
</table>
</div>
);
}

export default Table 



    

   
