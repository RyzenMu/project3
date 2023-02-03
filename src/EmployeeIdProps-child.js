import React from "react";

const EmployeeIdProps1 = (props) => {
    return (
        <div>
        <h2 style={{color: "yellowgreen"}}> My employee id no is {props.id}</h2>
        <h2 style={{color: "brown"}}> My employee name  is {props.name}</h2>
        <h3 style={{color: "greenyellow"}}> My skill {props.skill}</h3>
        <h3 style={{color:"blue"}}> My other skills are {props.otherSkills}</h3>


        </div>
    )
}


export default EmployeeIdProps1;