import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Homepart extends Component {
    render() {
        return (
            <div>
                 <div className="row">
        <div className="col-md-3 rounded">
          <div className="card">
            <div className="card-body bg-secondary text-white">
             
              <div> 
              <img src={require('./news.jpg')} class="img-fluid responsive" alt="asso"/>
                </div> 
                <h6 className="text-white bg-dark p-2 text-center ani">News of Persian Associations in Germany</h6>
              <Link to="/bk" className="btn buttnhome1 glow-on-hover">Read more ...</Link>
              
            </div>
          </div>
        </div>
      
        <div className="col-md-3">
          <div className="card bg-secondary">
            <div className="card-body">
              <h6 className="card-title bg-dark p-2 text-center text-3d">About Persian Associations</h6>
              <p className="card-text text-white">We make network among Persians in Germany.</p>
              <img src={require('./associations.jpg')} class="img-fluid responsive" alt="asso"/>
              
              <Link to="/about" className="btn bg-secondary text-white"> Read More ...</Link>
            </div>
          </div>
          </div>
          
          <div className="col-md-3">
        	<div className="card bg-secondary">
          <div className="card-body">
  
					<h1 className="card-title assotilte p-2 text-center text-3d">Chat <a href="https://rocky-shelf-85720.herokuapp.com/" className="btn btn-dark text-warning elem">Click and Enjoy</a><span>&#128525;&#128512;&#128523;</span></h1>
				  <p className="card-text text-white">You can chat with others to make connection and also naturally you can ask about your needs in Germany and share your experiences with others.</p>
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
                <a href="https://hamidnika.github.io/newsdaily/" className="btn btn-dark text-warning elem">Read more ...</a>
                <p className="card-text text-white">access to News and latest developments of countries.</p>
              <a href="https://hamidnika.github.io/coronaintera/" className="btn btn-dark text-warning elem">Latest News of Corona in the world</a>
              
            </div>
          </div>
        </div>
      </div>
      </div>
        )
    }
}
