import React, { useState } from "react";
import "./contactStyle.css"

const Contact = () =>{
    const [formData, setformData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        message:"",
        isChecked:false
    })
    
    function handleChange(event){
        const {name, value,type, checked} = event.target
        setformData((prevState)=>{
            return {...prevState,
            [name] : type === "checkbox" ? checked : value}
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    
    return(
        <div className="contactContent">
            <form onSubmit={handleSubmit}  className="contactBody">
                <h1>Contact Me</h1>
                <p>Hello there, contact me to ask me about anything you have in mind.</p>
                <div className="names">
                    <div>
                    <label htmlFor="first_name">First Name</label><br/>
                    <input 
                        type="text"
                        id="first_name"
                        placeholder="Enter your first name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                        <label htmlFor="last_name">Last Name</label><br/>
                        <input 
                            text="text"
                            id="last_name"
                            placeholder="Enter your last name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email">Email</label> <br/>
                    <input 
                        id="email"
                        placeholder="yourname@email.com"
                        text="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label> <br/>
                
                    <textarea 
                        placeholder="send me a message and i will reply as soon as possible..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        id="message"
                    />
                </div>
                <div>
                    
                    <input 
                        type="checkbox"
                        checked={formData.isChecked}
                        name="isChecked"
                        id="box"
                        onChange={handleChange}
                    />
                    <label htmlFor="box" className="checkMessage">You agree to providing your data to jane who may contact you</label>
                </div>
                <button id="btn__submit">Send message</button>
            </form>
        </div>
    )
}

export default Contact