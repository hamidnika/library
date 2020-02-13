import React, { Component } from 'react'
import Homepart from './Homepart';


export default class Home extends Component {
    render() {
        return ( 
        <div> 
        <Homepart/>
        <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body row respons aboutasso">
              <div className="p-4 m-4 bg-warning pics">
               <h6>Gallery of Associations in Germany's Cities</h6>
              <img src={require('./images/tehra.jpg')} class="img-fluid p-2 col-md-4 pics" alt="pic"/>
              <img src={require('./images/tteh.jpg')} class="img-fluid p-2 col-md-4 pics" alt="pic1"/>
              <img src={require('./images/tehhr.jpg')} class="img-fluid p-2 col-md-4 pics" alt="pic2"/>
              <img src={require('./images/tehrran.jpg')} class="img-fluid p-2 col-md-4 pics" alt="pic3"/>
              <img src={require('./images/tehri.jpg')} class="img-fluid p-2 col-md-4 pics" alt="pic4"/>
              <img src={require('./images/tehran.jpg')} class="img-fluid p-2 col-md-4 pics" alt="pic5"/>
            
              <a href="http://hamid88.herokuapp.com/about.html" className="btn assotilte">See more pictures and movies</a>
              </div>
              
            </div>
          </div>
        </div>

      <div className="col-md-6">
<div className="card bg-secondary">
  <div className="card-body">
  <a href="http://hamid88.herokuapp.com/about.html" className="btn btn-dark text-warning">Go to Chatrooms</a>
    <h5 className="card-title bg-secondary text-warning">We Will have Here Live Streaming</h5>
   
    <iframe title="my video" className="img-fluid responsive" width="604" height="453" src="https://www.youtube.com/embed/s1-foVKep2k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   
  </div>
</div>
</div>
      </div>
      </div>
        )
    }
}

