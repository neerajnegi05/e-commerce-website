import { Outlet } from "react-router-dom";
function ServiceOne(){
    return (
        <div>
        <h2>hello service one...</h2>
        <Outlet/>
        </div>
    )
}
export default ServiceOne;