import React from "react"
import Header from "./header.css"
import { BrowserRouter, Route, Link } from "react-router-dom"

class App extends React.Component {
  render() {
    return (<div className="header">

      <button className="header-button">
        <a className="header-link">
          <Link to="/">Home</Link>
        </a>
      </button>

      <button className="header-button">
        <a className="header-link">
          <Link to="/about">About</Link>
        </a>
      </button>

      <button className="header-button">
        <a className="header-link">
          <Link to="/projects">Projects</Link>
        </a>
      </button>


    </div>
 )}
}

export default App
