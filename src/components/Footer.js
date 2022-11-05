import React from "react";
import red from "../images/red.png"
import i4g from "../images/I4G.png"

const Footer = () =>{
    return(
        <footer>
        <div className="left" style={{display: "flex", flexDirection:"row"}}>
            <p>Zuri</p>
            <div><img src={red}alt="red" width="5px" height="5px" style={{marginTop: "10px"}}/> </div>
            <p>Intership</p>
        </div>
        <div className="middle"><p>HNG Internship 9 Frontend Task</p></div>
        <div className="ingression_logo">
            <img src={i4g} alt="ingression for good logo" style={{marginTop: "30px"}}/>
        </div>
    </footer> 
    )
}

export default Footer