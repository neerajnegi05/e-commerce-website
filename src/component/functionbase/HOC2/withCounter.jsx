import React from "react";
const UpdatedComponent = OriginalComponent => {
    class NewComponent extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                count: 0
            }
            this.incrementCount = this.incrementCount.bind(this);
        }
        incrementCount = function() {
            this.setState(prevState => {
                return {count: prevState.count + 1}
            })
        }
        render(){
            return <OriginalComponent 
            count={this.state.count}
            incrementCount={this.incrementCount}/>
        }
    }
    return NewComponent
} 
export default UpdatedComponent;