import React from "react";
import './style.css';
function Stylesheet(props){
    let className = props.primary ? 'primary' : ''
    // console.log(props)
    return (
        <div>
            <h1 className={className}>Stylesheeets</h1>
        </div>
    )
}
export default Stylesheet;