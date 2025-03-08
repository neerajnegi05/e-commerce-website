import { Outlet } from "react-router-dom";
function Service(){
    return (
        <div>
           <h1> hello service </h1>
           <Outlet/>
        </div>
    )
}
export default Service;