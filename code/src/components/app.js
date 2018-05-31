import React from "react"
import Header from "./header"
import About from "./about"
import Projects from "./projects"
import Hero from "./hero"
import Contact from "./contact"
import "./app.css"

import { HashRouter, Route, Link } from "react-router-dom"

class App extends React.Component {
  render() {
    return(
 <HashRouter>
    <div className="main-container">



<Route path="/" component={Header} />
<Route exact path="/" component={Hero} />
<Route path="/about" component={About} />
<Route path="/projects" component={Projects}/>

</div>
</HashRouter>

  )}
}

export default App;
