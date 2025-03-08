// import { PureComponent, useState } from "react";

import { useState } from "react";

function Abc() {
const [name,setname] = useState("neeraj")
const [count,setcount] = useState(0)
function change(){
    setname("dinesh");
    setcount(count+1);
}


    return (
        <div>
<h1>{name}</h1>
<button onClick={change}>Update Count {count}</button>
        </div>
    )
}
export default Abc;