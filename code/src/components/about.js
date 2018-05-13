import React from "react"
import About from "./about.css"
import Contact from "./contact"

import { BrowserRouter, Route, Link } from "react-router-dom"


class App extends React.Component {
render() {
return(

<div className="main-container">



<div className="profil-pic"><img src={require(`../images/Johanna.jpg`)}/>
</div>

<div className="welcome-text"><h2>Johanna Hökstrands portfolio</h2>
 </div>
 <div className="info"><h4>Welcome to my portfolio!<br/>
 <br/>
Here are my projects which I did during a 12 week bootcamp in the spring of 2018. This page is built in React, and the other projects are a mixture of HTML, CSS, JavaScript and React. <br/>
<br/>
This is also a chance for me to introduce myself as a person. I have worked with and studied a range of diffent things in my life, and the reason for this is that I am a curious and dedicated person by nature.<br/>
My passions in life are: reading, skiing, and taking care of my plants.<br/>
<br/>
I hope to hear from you!
</h4></div>
<Contact />



</div>
)}
}

export default App
