import React from "react"
import Header from "./header.css"
import { BrowserRouter, Route, Link } from "react-router-dom"

class App extends React.Component {
  render() {
    return (<div className="header">

      <button>
        <a>
          <Link to="/">Home</Link>
        </a>
      </button>

      <button>
        <a>
          <Link to="/about">About</Link>
        </a>
      </button>

      <button>
        <a>
          <Link to="/projects">Projects</Link>
        </a>
      </button>


    </div>
 )}
}

export default App
