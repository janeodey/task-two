import React from "react";
import LinkPage from "./LinkPage";
import SocialFonts from "./SocialFonts";
import SocialProfile from "./SocialProfile";



const Home = () =>{
    return(
        <div>
            <header >
          <p className="share" ></p>
        </header>
            <SocialProfile/>   
            <LinkPage/>
            <SocialFonts/>
        </div>
    )
}

export default Home