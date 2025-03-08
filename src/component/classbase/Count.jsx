// import React from "react";
// class Count extends React.Component {
//     constructor() {
//         super();
//         this.state={
//             count:1
//         }
//     }
//     render(){
//         console.warn("check-rerending")
//         return (
//             <div>
//                 <h1>Pure component in React {this.state.count}</h1>
//                 <button onClick={()=>this.setState({count:1})}>Upadate Count</button>
//             </div>
//         )
//     }
// }
// export default Count;


// import React, {PureComponent} from "react";
// class Count extends PureComponent {
//     constructor() {
//         super();
//         this.state={
//             count:1
//         }
//     }
//     render(){
//         console.warn("check-rerending")
//         return (
//             <div>
//                 <h1>Pure component in React {this.state.count}</h1>
//                 <button onClick={()=>this.setState({count:1})}>Upadate Count</button>
//             </div>
//         )
//     }
// }
// export default Count;


// import React from "react";
// class Count extends React.Component {
//     constructor() {
//         super();
//         this.state={
//             count:1
//         }
//     }
//     render(){
//         console.warn("check-rerending")
//         return (
//             <div>
//                 <h1>Pure component in React {this.state.count}</h1>
//                 <button onClick={()=>this.setState({count:this.state.count+1})}>Upadate Count</button>
//             </div>
//         )
//     }
// }
// export default Count;



// import React, {PureComponent} from "react";
// class Count extends PureComponent {
//     constructor() {
//         super();
//         this.state={
//             count:1
//         }
//     }
//     render(){
//         console.warn("check-rerending")
//         return (
//             <div>
//                 <h1>Pure component in React {this.state.count}</h1>
//                 <button onClick={()=>this.setState({count:this.state.count+1})}>Upadate Count</button>
//             </div>
//         )
//     }
// }
// export default Count;


// refernece demo
// import React, {Component} from "react";
// import { useLinkClickHandler } from "react-router-dom";
// class Count extends Component {
//     constructor(props) {
//         super(props);
//         this.inputRef = React.createRef()
//         this.getval = this.getval.bind(this);
//         // this.clickHandler = this.clickHandler.bind(this);
//         }
//         componentDidMount(){
//            this.inputRef.current.focus()
//            console.log(this.inputRef)
//         }
//         getval(){
//             console.warn(this.inputRef.current.value)
//             this.inputRef.current.style.color="red"
//         }
//         // clickHandler = () => {
//         //     alert(this.inputRef.current.value)
//         // }
//     render(){
        
//         return (
//             <div>
//               <input type="text" ref={this.inputRef} />
//               {/* <input type="text" ref={this.inputRef} onChange={this.clickHandler}/> */}
//               <button onClick={()=>this.getval()}>check ref</button>
//             </div>
//         )
//     }
// }

// export default Count;

