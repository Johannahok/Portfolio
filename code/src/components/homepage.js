import React from "react"
import  "./homepage.css"

class Homepage extends React.Component {
render() {
  return (
<div>

<div>
  <h4>These are my projects</h4>
</div>
    <div className="main-box">



<div className="box">
<h5>Record Union wanted a egghunting game using JavaScript</h5>
<img src={require(`../images/thumb.jpg`)}/>

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

</div>

<div className="box">

</div>

<div className="box">

</div>



</div>

</div>

 )}
}

export default Homepage
