import React from "react"
import About from "./about.css"

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
Here I will present my projects which I did during a 12 week bootcamp in the spring of 2018. This page is bulit in React and the other projects is a mixtur of HTML, CSS, JavaScript and React. <br/>
But this is also a chance for me to introduce myself as a person. I worked and study a range of diffent things in my life, and the reason for that is because I'm curious and dedicated by nature.<br/>
My passions in life are: reading, sking and taking care of my plants.<br/>
Hope to hear from you!
</h4></div>



</div>
)}
}

export default App
