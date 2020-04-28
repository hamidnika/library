import React, { Component } from 'react'
//import { Col } from 'react-bootstrap';
import './Posts.css';

export default class Gallery extends Component {
  render() {
    return (
  
        <div className="p-0">
          <div className="p-2 pt-0">
            <div className="row">
    <iframe className="col-md-3 p-1" title="video" width="200" height="auto" src="https://www.youtube.com/embed/01_L4tQ7F3I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="col-md-3 p-1" title="video" width="200" height="auto" src="https://www.youtube.com/embed/9Auq9mYxFEE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="col-md-3 p-1" title="video1" width="200" height="auto" src="https://www.youtube.com/embed/TE5d4omulHg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="col-md-3 p-1" title="video2" width="200" height="auto" src="https://www.youtube.com/embed/TwfPb9rsDyY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className="row">
    <iframe className="col-md-3 p-1" title="video3" width="200" height="auto" src="https://www.youtube.com/embed/6xrJy-1_qS4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="col-md-3 p-1" title="video4" width="200" height="auto" src="https://www.youtube.com/embed/fDhGPYWfKFU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="col-md-3 p-1" title="video5" width="200" height="auto" src="https://www.youtube.com/embed/a3bOL8j3ypQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe className="col-md-3 p-1" title="video6" width="200" height="auto" src="https://www.youtube.com/embed/Kyf85-yi7GI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div> 
          <div className="pics">
            <div className="row m-2">
              <img src={require('../layout/images/tehra.jpg')} class="img-fluid p-2 col-md-2" alt="pic"/>
              <img src={require('../layout/images/tteh.jpg')} class="img-fluid p-2 col-md-2" alt="pic1"/>
              <img src={require('../layout/images/tehhr.jpg')} class="img-fluid p-2 col-md-2" alt="pic2"/>
              <img src={require('../layout/images/tehrran.jpg')} class="img-fluid p-2 col-md-2" alt="pic3"/>
              <img src={require('../layout/images/tehri.jpg')} class="img-fluid p-2 col-md-2" alt="pic4"/>
              <img src={require('../layout/images/tehran.jpg')} class="img-fluid p-2 col-md-2" alt="pic5"/>
              </div>
         </div>
        </div>
    )
  }
}