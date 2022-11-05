import React from "react";
import Footer from "./components/Footer";
import LinkPage from "./components/LinkPage";
import SocialFonts from "./components/SocialFonts";
import SocialProfile from "./components/SocialProfile";
import Contact from "./components/Contact";
import {Routes, Route} from "react-router-dom"



function App(){
  return(
    <div className="bodyContent">
      <header >
        <p className="share" ></p>
      </header>
      <SocialProfile/>   
      <LinkPage/>
      <SocialFonts/>
      <Footer/>
      {/* <Routes>
      <Route path="/contact" element={<Contact/>}/>
      </Routes> */}
      

    </div>
  )
}


export default App;
