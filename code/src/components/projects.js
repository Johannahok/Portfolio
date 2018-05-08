import React from "react"
import Projects from "./projects.css"
import { BrowserRouter, Route, Link } from "react-router-dom"


class App extends React.Component {
render() {
return (


<div className="main-box">

         {/* <div className="h4-header">
          <h4>These are my projects</h4>
        </div>   */}

  <div className="box">
  <h5>Classphoto of everyone at the bootcamp, build with flexbox </h5>
  <a href="https://johannahok.github.io/assignment-flexbox/" target="_blank">
   <img src={require(`../images/logo.png`)}/> </a>
  </div>

  <div className="box">
  <h5>They said, copy Google Documents website and so we did!</h5>
  <img src={require(`../images/bear.jpg`)}/>
  </div>

  <div className="box">
  <h5>Tictail wanted us to built a shoppingsite using there API</h5>
  <img src={require(`../images/stargaze.jpg`)}/>
  </div>

  <div className="box">
    <h5>I designed a weather app by fetching a API</h5>
    <a href="https://johannahok.github.io/assignment-weather/" target="_blank">
     <img src={require(`../images/api.png`)}/> </a>
</div>

  <div className="box">
   <h1>hej</h1>
  </div>

  <div className="box">
   <h1>hej</h1>
  </div>

</div>



   )}
  }


export default App
