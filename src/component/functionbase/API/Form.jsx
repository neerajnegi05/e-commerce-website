import { useState } from "react";
import axios from 'axios';
function Form() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  function fun(e) {
    setname(e.target.value);
  }
  function fun2(e) {
    setemail(e.target.value);
  }
  function fun3(e) {
    setpassword(e.target.value);
  }

  function print() {
    // console.log(name, email, password);
    axios.post("https://jsonplaceholder.typicode.com/users",{name,email,password}).then(Response => {
        console.log(Response);
    })
  }
  return (
    <div>
      Name:
      <input type="text" onChange={fun} />
      <br />
      Email:
      <input type="email" onChange={fun2} />
      <br />
      Password:
      <input type="password" onChange={fun3} />
      <br />
      <button
        onClick={() => {
          print();
        }}
      >
        click
      </button>
    </div>
  );
}
export default Form;
