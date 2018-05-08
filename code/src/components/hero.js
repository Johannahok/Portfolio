import React from "react"
import Hero from "./hero.css"

import { BrowserRouter, Route, Link } from "react-router-dom"

class App extends React.Component {
render() {

return(
  <div className="hero"><img src={require(`../images/plant2.jpg`)}/>
    <div className="hero-text">
      <h1>I want to work with you!</h1>
      </div>
     <button className="hero-button">
     <a className="hero-link">
    <Link to="/projects">View my work</Link>
  </a>
</button>

  </div>

)}
}

export default App
