import React from "react";

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
            <img id="portrait" src="src/assets/zaid.jpg"/>
            <h1>Zaid Nissar</h1>
            <h3>Computer Scientist</h3>
            <small>My Buisness Card</small>
            <div id="btn-container">
                <button onClick={handleEmailClick} id="mail"><img src="src/assets/Mail.png"/>Email</button>
                <button onClick={handleLinkedInClick} id="linkedin"><img src="src/assets/linkedin.png"/>Linkedin</button>
            </div>
        </main>
    )
}