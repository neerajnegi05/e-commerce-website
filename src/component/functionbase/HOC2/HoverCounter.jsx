import UpdatedComponent from "./withCounter"
function HoverCounter(r){
    console.log(r)
    const {count, incrementCount} = r;
    return (
        <div>
           <h1>hello</h1> 
           <button onMouseEnter={incrementCount}>Clicked {count} times</button>
            </div>
)
}
export default UpdatedComponent(HoverCounter)