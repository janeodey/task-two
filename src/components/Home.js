import React from "react";
import LinkPage from "./LinkPage";
import SocialFonts from "./SocialFonts";
import SocialProfile from "./SocialProfile";



const Home = () =>{
    return(
        <div>
            <SocialProfile/>   
            <LinkPage/>
            <SocialFonts/>
        </div>
    )
}

export default Home