import React from "react"
import Projects from "./projects.css"
import { BrowserRouter, Route, Link } from "react-router-dom"


class App extends React.Component {
render() {
return (


<div className="main-box">



  <div className="first-row">
    <h5>This is my final project. This project was possible to build by first creating a server, where all the plants where stored.<br/>
      The codebase is React and Node.js, and for styling I used SASS.
    </h5>
    <a href="https://johannahok.github.io/Un-pickyplants/#/" target="_blank">
      <img src={require(`../images/unpickyplants.png`)}/>
    </a>
  </div>



  <div className="first-row">
    <h5>We designed a store for Tictail by fetching their API, and the we build diffrent components for each category in the store. By rendering and mapping we got the right info for right category. </h5>
    <a href="https://johannahok.github.io/online-shop/#/" target="_blank">
      <img src={require(`../images/tictail.png`)}/>
    </a>

  </div>

  <div className="first-row">
    <h5>I designed a weather app by fetching a API of the current weather in Stockholm.</h5>
    <a href="https://johannahok.github.io/assignment-weather/" target="_blank">
      <img src={require(`../images/api.png`)}/>
    </a>
  </div>


  <div className="box">
   <h5>More content on the way.</h5>
  </div>
  <div className="box">
   <h5>More content on the way.</h5>
  </div>

  <div className="box">
   <h5>More content on the way.</h5>
  </div>

</div>



   )}
  }


export default App
