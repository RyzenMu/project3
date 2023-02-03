import React from "react";

class ButtonCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleClick(){
        this.setState({
            count: this.state.count +1
        })
    }

    render(){

        return (
        <div>
            {this.state.count}<br></br>
            <button onClick={() => this.handleClick()}>click skahd </button>
        </div>
        
        )
    }

}

export default ButtonCounter;