import React from "react"
import Header from "./header"
import Homepage from "./homepage"
import "./app.css"

class App extends React.Component {
  render() {
    return(
    <div className="main-container">

<Header />
<Homepage />
</div>
  )}
}

export default App;
