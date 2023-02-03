import React from "react";
import EmployeeIdProps1 from "./EmployeeIdProps-child";

// function EmployeeIdProps1 (props) {
//     return (
//         <div>
//         <h2> My employee id no is {props.id}</h2>
//         <h2> My employee name  is {props.name}</h2>
//         <h3> My skill {props.skill}</h3>

//         </div>
//     )
// }

class EmployeeIdProps extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: "state id 1",
            name: "state name 1",
            color: "red",
        }
    }

    onClick() {
        this.setState ({
            id: "state id 2",
            name: "state name 2",
            color: "blue",   
        })
    }

    render() {
        return(
            <div>
        <h2 style={{color: this.state.color}}> My employee id no is {this.props.id}</h2>
        <h2> My employee name  is {this.props.name}</h2>
        <button onClick={() => this.onClick()}>Click some were</button>
        <h2>id is {this.state.id}</h2>
        <h2>name is {this.state.name}</h2>

        <EmployeeIdProps1 name='jhajh' id = {54871} skill='Java Developer' otherSkills='Spring Boot'/>


        </div>
        )
    }
}

export default EmployeeIdProps;