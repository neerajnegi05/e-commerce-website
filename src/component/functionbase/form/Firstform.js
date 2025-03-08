// 15 ***

// function Firstform(){
//     function fun(e){
//     console(e.target.value)

// }
//     return (
// <div>
//   NAME: <input type="text" onChange={fun} placeholder="enter name"/>
//  </div>
//     );
// }
// export default Firstform;

// import { useState } from "react";

// function Firstform() {
//   const [data, setdata] = useState(null);
//   const [data2, setdata2] = useState(null);
//   const [print, setprint] = useState(null);
//   function fun(e) {
//     setdata(e.target.value);
//   }
//   function fun2(e) {
//     setdata2(e.target.value);
//   }

//   return (
//     <div>
//       {print ? (
//         <h1>
//           {data} {data2}
//         </h1>
//       ) : null}
//       NAME: <input type="text" onChange={fun} placeholder="enter name" />
//       EMAIL: <input type="email" onChange={fun2} placeholder=" enter email" />
//      {!print ? <button onClick={function () {  setprint(!print); }}> show </button> : <button onClick={function () {  setprint(!print); }}> hide </button>}
//          </div>
//   );
// }
// export default Firstform;

// import { useState } from "react";

// function Firstform() {
//   const [data, setdata] = useState(null);
//   const [data2, setdata2] = useState(null);
//   const [data3, setdata3] = useState(null);
//   const [data4, setdata4] = useState(null);
//   const [print, setprint] = useState(false);
//   function fun(e) {
//     setdata(e.target.value);
//   }
//   function fun2(e) {
//     setdata2(e.target.value);
//   }
//   function fun3(e) {
//     setdata3(e.target.value);
//   }
//   function fun4(e) {
//     setdata4(e.target.value);
//   }
//    return (
//     <div>

//       NAME: <input type="text" onChange={fun} placeholder="enter name" /><br/>
//       PASSWORD: <input type="password" onChange={fun2} placeholder=" enter email" /><br/>
//       GENDER:<br/>
//       Male<input value="male" type="radio" name="nn" onChange={fun3}/>
//       Female<input value="female" type="radio" name="nn" onChange={fun3}/><br/>
//      CHECKBOX:<br/>
//       English<input value = "English" type="checkbox"  onChange={fun4}/><br/>
//        <button onClick={function () {  setprint(true)}}>SUBMIT</button>

//        {print ? (
//        console.log(data, data2, data3, data4 )
//       ) : null}
//       </div>
//   );
// }
// export default Firstform;

// import { useState } from "react";
// function Firstform() {
//   const [username, setusername] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault(); //stopped default refress behaviour of form
//     console.log(username);
//     setusername("");
//   };
//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           submitHandler(e);
//         }}
//       >
//         username:
//         <input
//           type="text"
//           onChange={(e) => {
//             setusername(e.target.value);
//           }}
//           value={username}
//         />
//         <br />
//         <button>SUBMIT</button>
//       </form>
//     </div>
//   );
// }
// export default Firstform;

import { useState } from "react";

function Firstform() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  const [print, setprint] = useState(null);

  const [nameError, setnameError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const [mobileError, setmobileError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault(); //stopped default refress behaviour of form
         };

  function validateForm() {
    // Check if the First Name is an Empty string or not.

    if (name.length <= 2) {
      setnameError(true);
      return;
    }
    
    if (email.length == 0) {
      setemailError(true);
      return;
    }

    if (mobile.length == 0) {
      setmobileError(true);
      return;
    }
    if (mobile.length < 10) {
      setmobileError(true);
      return;
    }
    if (mobile.length > 10) {
      setmobileError(true);
      return;
    }
    if (!mobile.match("[0-9]{10}")) {
      setmobileError(true);
    }

    if (password.length < 8) {
      setpasswordError(true);
      return;
    }

    // variable to count upper case characters in the password.
    let countUpperCase = 0;
    // variable to count lowercase characters in the password.
    let countLowerCase = 0;
    // variable to count digit characters in the password.
    let countDigit = 0;
    // variable to count special characters in the password.
    let countSpecialCharacters = 0;

    for (let i = 0; i < password.length; i++) {
      const specialChars = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "_",
        "-",
        "+",
        "=",
        "[",
        "{",
        "]",
        "}",
        ":",
        ";",
        "<",
        ">",
      ];

      if (specialChars.includes(password[i])) {
        // this means that the character is special, so increment countSpecialCharacters
        countSpecialCharacters++;
      } else if (!isNaN(password[i] * 1)) {
        // this means that the character is a digit, so increment countDigit
        countDigit++;
      } else {
        if (password[i] == password[i].toUpperCase()) {
          // this means that the character is an upper case character, so increment countUpperCase
          countUpperCase++;
        }
        if (password[i] == password[i].toLowerCase()) {
          // this means that the character is lowercase, so increment countUpperCase
          countLowerCase++;
        }
      }
    }

    if (countLowerCase == 0) {
      setpasswordError(true);
      return;
    }

    if (countUpperCase == 0) {
      setpasswordError(true);
      return;
    }

    if (countDigit == 0) {
      setpasswordError(true);
      return;
    }

    if (countSpecialCharacters == 0) {
      setpasswordError(true);
      return;
    }
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        name:
        <input
          type="text"
          onChange={(e) => {
            setname(e.target.value);
          }}
          value={name}
          />
        <br /> {nameError && <p>invalid name</p>}
        
        EMAIL:
        <input
          type="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
          value={email}
        />
      
        <br /> {emailError && <p>invalid email</p>}
        MOBILE:
        <input
          type="phone"
          onChange={(e) => {
            setmobile(e.target.value);
          }}
          value={mobile}
        />
        
        <br />{mobileError && <p>invalid mobile</p>}
        PASSWORD:
        <input
          type="text"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          value={password}
        />
       
        <br />{passwordError && <p>invalid password</p>}
        <button onClick={() => validateForm()}>SUBMIT</button>
      </form>
    </div>
  );
}

export default Firstform;
