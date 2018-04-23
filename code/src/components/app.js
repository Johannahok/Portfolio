import React from "react"
import Header from "./header"
import About from "./about"
import Projects from "./projects"
import Hero from "./hero"
import Contact from "./contact"
import "./app.css"

import { BrowserRouter, Route, Link } from "react-router-dom"

class App extends React.Component {
  render() {
    return(
 <BrowserRouter>
    <div className="main-container">

       <Header />
<Route path="/" component={Header} />
<Route exact path="/" component={Hero} />
<Route path="/about" component={About} />
<Route path="/projects" component={Projects}/>
<Contact />
</div>
 </BrowserRouter>

  )}
}

export default App;
