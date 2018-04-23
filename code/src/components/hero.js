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
  </div>

)}
}

export default App
