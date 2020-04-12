import React, { Component } from 'react'
//import { Col } from 'react-bootstrap';
import './Posts.css';

export default class Gallery extends Component {
  render() {
    return (
  
        <div>
          <div className="pics">
    <iframe title="video" width="200" height="auto" src="https://www.youtube.com/embed/6xrJy-1_qS4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe title="video" width="200" height="auto" src="https://www.youtube.com/embed/9Auq9mYxFEE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe title="video1" width="200" height="auto" src="https://www.youtube.com/embed/TE5d4omulHg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe title="video2" width="200" height="auto" src="https://www.youtube.com/embed/TwfPb9rsDyY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe title="video3" width="200" height="auto" src="https://www.youtube.com/embed/6xrJy-1_qS4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe title="video4" width="200" height="auto" src="https://www.youtube.com/embed/fDhGPYWfKFU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe title="video5" width="200" height="auto" src="https://www.youtube.com/embed/a3bOL8j3ypQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe title="video6" width="200" height="auto" src="https://www.youtube.com/embed/Kyf85-yi7GI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe title="video7" width="200" height="auto" src="https://www.youtube.com/embed/V4niY5Uq95k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe title="video7" width="200" height="auto" src="https://www.youtube.com/embed/g6pcOZQhmq8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div> 
          <div className="pics">
              <img src={require('../layout/images/tehra.jpg')} class="img-fluid p-2 col-md-4 pics" alt="pic"/>
              <img src={require('../layout/images/tteh.jpg')} class="img-fluid p-2 col-md-4 pics" alt="pic1"/>
              <img src={require('../layout/images/tehhr.jpg')} class="img-fluid p-2 col-md-4 pics" alt="pic2"/>
              <img src={require('../layout/images/tehrran.jpg')} class="img-fluid p-2 col-md-4 pics" alt="pic3"/>
              <img src={require('../layout/images/tehri.jpg')} class="img-fluid p-2 col-md-4 pics" alt="pic4"/>
              <img src={require('../layout/images/tehran.jpg')} class="img-fluid p-2 col-md-4 pics" alt="pic5"/>
             
         </div>
        </div>
    )
  }
}