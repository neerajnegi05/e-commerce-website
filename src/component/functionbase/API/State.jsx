import { useState } from "react"

function State(){
    const [field,setfield] = useState(
        {
        name: '',password: ''
    }
    );
    return (
       
            <form>
          <input type="text" onChange={(e) => {setfield({...field,name:e.target.value})}}/>
          <input type="password" onChange={(e) => {setfield({...field,password:e.target.value})}}/>
<button onClick = {(e) => { 
    console.log(field.name,field.password)
}}>submit</button>
</form>
        
    )
}
export default State