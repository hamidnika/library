import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Homepart extends Component {
    render() {
        return (
            <div>
                 <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body bg-secondary text-white">
             
              <div> 
              <img src={require('./news.jpg')} class="img-fluid responsive" alt="asso"/>
                </div> 
                <h6 className="text-white bg-dark p-2 text-center ani">News of Persian Associations in Germany</h6>
              <Link to="/posts" className="btn buttnhome1 glow-on-hover">Read more ...</Link>
              
            </div>
          </div>
        </div>
      
        <div className="col-md-3">
          <div className="card bg-secondary">
            <div className="card-body">
              <h6 className="card-title bg-dark p-2 text-center text-3d">About our Associations</h6>
              <p className="card-text text-white"> pressure and producing results to tight deadlines.</p>
              <img src={require('./associations.jpg')} class="img-fluid responsive" alt="asso"/>
              
              <a href="http://hamid88.herokuapp.com/about.html" className="btn bg-secondary text-white"> Read More ...</a>
            </div>
          </div>
          </div>

      
          <div className="col-md-3">
        	<div className="card bg-secondary">
          <div className="card-body">
					<h1 className="card-title assotilte p-2 text-center text-3d">Chat <a href="http://hamid88.herokuapp.com/about.html" className="btn btn-dark text-warning elem">Click and Enjoy</a><span>&#128525;&#128512;&#128523;</span></h1>
				  <p className="card-text text-white"> of global development when the drugs don’t work and a post-antibiotic era sets in.The report show sreport shows how how antibiotic</p>
          </div>
				</div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body bg-secondary text-white">

              <div> 
              <img src={require('./newss.jpg')} class="img-fluid responsive" alt="asso"/>
                </div> 
                <h6 className="text-white bg-dark p-2 text-center ani">News of the World</h6>
              <Link to="/posts" className="btn glow-on-hover">Read more ...</Link>
              
            </div>
          </div>
        </div>
      </div>
      </div>
        )
    }
}
