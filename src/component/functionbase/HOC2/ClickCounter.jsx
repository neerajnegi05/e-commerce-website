import UpdatedComponent from "./withCounter"
function ClickCounter(r){
    console.log(r)
    const {count, incrementCount} = r;
    return (
        <div>
           <h1>hello</h1> 
           <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
)
}
export default UpdatedComponent(ClickCounter)
