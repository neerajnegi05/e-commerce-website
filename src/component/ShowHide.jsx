import { useState } from "react";

function ShowHide() {
  let [password, setpassword] = useState(null);
  let [print, setprint] = useState('');
  function show(e) {
    setpassword(e.target.value);
  }
  
  return (
    <div>
   {print ? <input type="text" onChange={show} value={password} placeholder="enter pass.." /> : <input type="password" onChange={show} value={password} placeholder="enter pass.." />}
      <button
        onClick={function () {
          setprint(!print);
        }}
      >
        show
      </button>
    </div>
  );
}

export default ShowHide;
