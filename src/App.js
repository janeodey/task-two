import React from "react";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"


function App(){
    return(
      <div className="bodyContent">
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      
        
  
      </div>
    )
  }

export default App;
