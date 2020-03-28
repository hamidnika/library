import React, { Component } from 'react'
import Homepart from './Homepart';
import { Link } from 'react-router-dom';
import { FaRegSave, FaSearch } from 'react-icons/fa';

export default class Home extends Component {
    render() {
        return ( 
       
     
        <div className="row">
        <Homepart/>
          <div className="col-md-4 bg-secondary">
            <div className="card-body">
             
            <a href="http://hamid88.herokuapp.com/about.html"><h6 className="bg-secondary text-white p-2 text-center">Pictures and Videos of Persian Cultural Events in Germany</h6></a>
               <div className="pics">
              <img src={require('./images/tehra.jpg')} class="img-fluid p-2 col-md-4 pics" alt="pic"/>
              <img src={require('./images/tteh.jpg')} class="img-fluid p-2 col-md-4 pics" alt="pic1"/>
              <img src={require('./images/tehhr.jpg')} class="img-fluid p-2 col-md-4 pics" alt="pic2"/>
              <img src={require('./images/tehrran.jpg')} class="img-fluid p-2 col-md-4 pics" alt="pic3"/>
              <img src={require('./images/tehri.jpg')} class="img-fluid p-2 col-md-4 pics" alt="pic4"/>
              <img src={require('./images/tehran.jpg')} class="img-fluid p-2 col-md-4 pics" alt="pic5"/>
             
              </div>
              
            </div>
          </div>

      <div className="col-md-4">
<div className="card bg-secondary">
  <div className="card-body">
    <h6 className="bg-secondary p-2 text-white text-center">We Will have Here Live Streaming</h6>
   
    <iframe title="my video" className="img-fluid responsive" width="604" height="453" src="https://www.youtube.com/embed/s1-foVKep2k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   
  </div>
</div>
</div>

        <div className="col-md-4">
        	<div className="card bg-secondary text-white">
          <div className="card-body">
          <p className="card-text">Foundation looks at the state of global at the state of global development.</p>
          <h6 className="btn bg-dark p-2 text-center"><Link to="/search" className="btn bg-dark text-white">Search and save Books from GoogleBooks API <h3><FaSearch /></h3></Link></h6>
          <h6 className="btn bg-dark p-2 text-center"><Link to="/saved" className="btn bg-dark text-white">See the Saved Books by Users from GoogleBooks API <h3><FaRegSave /></h3></Link></h6>
                  
          </div>
				</div>
        </div>
      </div>
        )
    }
}

