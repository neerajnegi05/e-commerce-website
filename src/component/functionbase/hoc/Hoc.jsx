
// import React,{useState} from 'react';

// function Hoc(){
//     return (
//         <div>
//         <h1>HOC</h1>
//         <HOC/>
//         </div>
//     );
// }

// function HOC() {
// return <h2> Red Counter</h2>
// }
// function Counter() {
//     const [count,setCount]=useState(0)
//     return 
//     <div>
//     <h3>{count}</h3>
//     <button onClick={()=>setCount(count+1)}>Update</button>
//     </div>
// }
// export default Hoc;



import React,{useState} from 'react';

function Hoc(){
    return (
        <div>
        <h1>HOC</h1>
        <HOCRed cmp = {Counter}/>
        <HOCGreen cmp = {Counter}/>
        </div>
    );
}

function HOCRed(props) {
return <h2 style={{backgroundColor:'red',width:100}}><props.cmp/></h2>
}
function HOCGreen(props) {
     return <h3 style = {{backgroundColor:'green',width:100}}><props.cmp/></h3>
   }
function Counter() {
        const [count,setCount]=useState(0)
        return (
        <div>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count+1)}>Update</button>
        </div>
        )
    }
export default Hoc;