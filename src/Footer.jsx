import React from "react";
import instagramIcon from '../src/assets/Instagram Icon.png';
import githubIcon from '../src/assets/GitHub Icon.png';

export default function Footer(){
    return(
        <footer>
            <img onClick={ ()=> window.open("https://www.instagram.com/zaid_kasheer")} id="instagram" src={instagramIcon} alt="instagram icon"/>
            <img onClick={ ()=> window.open("https://github.com/zupandit")} id="github" src={githubIcon} alt="github icon"/>
        </footer>
    )
}