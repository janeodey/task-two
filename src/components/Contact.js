import React, { useState } from "react";
import Footer from "./Footer";

const Contact = () =>{
    const [formData, setformData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        message:"",
        isChecked:true
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
    // console.log(formData.firstName)
    return(
        <div>
            <form onSubmit={handleSubmit}  className="contactBody">
            <h1>Contact Me</h1>
            <p>Hello there, contact me to ask me about anything you have in mind.</p>
           <div>
                <label htmlFor="first_name">First Name</label>
                <input 
                    type="text"
                    id="first_name"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
           
                <label htmlFor="last_name">Last Name</label>
                <input 
                    text="text"
                    id="last_name"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
           </div>
           <div>
                <label htmlFor="email">Email</label>
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
                
                <textarea 
                    placeholder="send me a message and i will reply as soon as possible"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
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
                <label htmlFor="box">You agree to providing your data to jane who may contact you</label>
           </div>
           <button>Submit</button>
        </form>
        <Footer/>
        </div>
    )
}

export default Contact