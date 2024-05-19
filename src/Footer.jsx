import React from "react";

export default function Footer(){
    return(
        <footer>
            <img onClick={ ()=> window.open("https://www.instagram.com/zaid_kasheer")} id="instagram" src="src/assets/Instagram Icon.png" alt="instagram icon"/>
            <img onClick={ ()=> window.open("https://github.com/zupandit")} id="github" src="src/assets/GitHub Icon.png" alt="github icon"/>
        </footer>
    )
}