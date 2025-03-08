import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  
const [name,setname] = useState();
const [email,setemail] = useState();
const [username,setusername] = useState();
const a = useParams()
console.log(a);
const getdata = async () => {
  let response  = await axios.get(`https://jsonplaceholder.typicode.com/users/${a.id}`,{})
  response = await response.data
  console.log(response)
  setname(response.name)
  setemail(response.email)
  setusername(response.username)
  }
  useEffect(() => {
    getdata()
  })
    return (
      <form>
        <input type="text" value={name}/><br/>
        <input type="email" value={email}/><br/>
        <input type="text" value={username}/><br/>

      </form>
    );
  }

export default Update 