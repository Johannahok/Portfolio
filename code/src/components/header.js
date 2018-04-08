import React from "react"
import Header from "./header.css"

class App extends React.Component {
  render() {
    return (<div className="header">

      <div className="info">
<h4>Johannas Portfolio</h4>

        <ul>
         <li>Projects</li>
          <li>About</li>

        </ul>

      </div>

      <div className="profil-pic"><img src={require(`../images/Johanna.jpg`)}/>
      </div>
    </div>)
  }
}

export default App;
