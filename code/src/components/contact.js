import React  from "react"
import Contact from "./contact.css"


class App extends React.Component {
render() {
return(
  <div className="contact-about">
    <footer>
    <p className="mail-about"><a className="link" href="mailto:johannahokstrand@gmail.com?body=Hi">email me here!</a></p>

  <a href="https://www.linkedin.com/in/johanna-h%C3%B6kstrand-24b24215a" target="_blank">
   <img className="linkedin-about" src={require(`../images/linkedin-logo.png`)}/> </a>

</footer>
  </div>


)}
}

export default App
