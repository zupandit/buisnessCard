import React from "react";
import myPhoto from "./assets/zaid.jpg"
import emailLogo from "./assets/Mail.png"
import linkedInLogo from "./assets/linkedin.png"
export default function Info(){
    const email = "zaid.nissar@ucalgary.ca"
    const subject = ""
    const body = ""
    const linkedInURL = 'https://www.linkedin.com/in/zaid-nissar-04aa18302'
    const handleEmailClick = () => {
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      };
    
      const handleLinkedInClick = () => {
        window.open(linkedInURL);
      };
    return(
        <main>
            <img id="portrait" src={myPhoto}/>
            <h1>Zaid Nissar</h1>
            <h3>Computer Scientist</h3>
            <small>My Buisness Card</small>
            <div id="btn-container">
                <button onClick={handleEmailClick} id="mail"><img src={emailLogo}/>Email</button>
                <button onClick={handleLinkedInClick} id="linkedin"><img src={linkedInLogo}/>Linkedin</button>
            </div>
        </main>
    )
}