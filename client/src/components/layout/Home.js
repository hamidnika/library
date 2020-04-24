import React, { Component } from 'react'
import Homepart from './Homepart';
import { Link } from 'react-router-dom';
import { FaRegSave, FaSearch } from 'react-icons/fa';

export default class Home extends Component {
    render() {
        return ( 
       
     
        <div className="row">
        <Homepart/>
          <div className="col-md-4">
        <div className="card bg-secondary rounded">
          
            <div className="card-body">
             
              <div> 
              <img src={require('../../img/gallery.jpg')} className="img-fluid resp rounded" alt="pic"/>
                </div> 
                <Link to="./gallery"><h6 className="btn bg-secondary text-white font-weight-bold text-center m-0">Gallery of Persian Events</h6></Link>
              
            </div>
          </div>
        </div>
      <div className="col-md-4">
<div className="card bg-secondary mt-2">
  <div className="card-body">
  <h6 className="bg-secondary p-2 text-white font-weight-bold text-center">We Will have Live Streaming <i class="fas fa-tv"></i></h6>
    <iframe title="my video" className="img-fluid" width="280" height="auto" src="https://www.youtube.com/embed/s1-foVKep2k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  </div>
</div>
</div>

        <div className="col-md-4">
        	<div className="card bg-secondary text-white mt-2">
          <div className="card-body">
          <h6 className="p-2"><Link to="/search" className="btn bg-dark text-white">Search and save Books from GoogleBooks API <h3><FaSearch /></h3></Link></h6>
          <h6 className="p-2"><Link to="/saved" className="btn bg-dark text-white">See SavedBooks by Users from GoogleBooks API <h3><FaRegSave /></h3></Link></h6>
                  
          </div>
				</div>
        </div>
      </div>
        )
    }
}

