import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FaRegSave, FaSearch } from 'react-icons/fa';
export default class Homepart extends Component {
    render() {
        return (
            <div className="bg-secondary">
              
                 <div className="row">
        <div className="col-md-3">
        <div className="card bg-secondary rounded">
          
            <div className="card-body pt-1 mt-1">
             
              <div> 
              <img src={require('./news.jpg')} className="img-fluid responsive rounded" alt="asso"/>
                </div> 
                <h6 className="card-title text-white p-2">Persian Associations in Germany. Here members to produce their own News to inform others.</h6>
              <Link to="/bk" className="btn bg-secondary text-white font-weight-bold">Read more ...</Link>
              
            </div>
          </div>
        </div>
      
        <div className="col-md-3">
          <div className="card bg-secondary rounded">
            <div className="card-body">

              <img src={require('./associations.jpg')} class="img-fluid responsive" alt="asso"/>
              <p className="card-text text-white pt-2 m-0 font-weight-bold">Who Are We?</p>
              <p className="card-text text-white">We make network among Persians in Germany.</p>
              
              <Link to="/about" className="btn bg-secondary text-wraning text-white font-weight-bold"> Read More ...</Link>
            </div>
          </div>
          </div>
          
          <div className="col-md-3">
        	<div className="card bg-secondary rounded p-0 m-0">
          <div className="card-body pt-1 mt-1">
  
					<h1 className="card-title text-center font-weight-bold text-warning m-0 pt-0">Chat<a href="https://rocky-shelf-85720.herokuapp.com/" className="btn btn-dark text-warning elem">Click and Enjoy</a></h1>
          <p className="text-center display-5"><span>&#128525;&#128512;&#128523;</span></p>
				  <p className="card-text text-white m-0 p-0">Chat with others to make connection and naturally ask about your needs in Germany and share your experiences with others.</p>
          </div>
				</div>
        </div>
        <div className="col-md-3">
          <div className="card bg-secondary rounded">
            <div className="card-body pt-1 mt-1">

              <div> 
              <img src={require('./newss.jpg')} class="img-fluid responsive rounded" alt="asso"/>
                </div>
                <p className="card-text text-white">Access to News and latest developments of countries.</p>
                <a href="https://hamidnika.github.io/newsdaily/" className="btn bg-secondary text-white font-weight-bold">Read more ...</a>
              <a href="https://hamidnika.github.io/coronaintera/" className="btn bg-secondary text-warning font-weight-bold rounded">Latest News of Corona in the world</a>
              
            </div>
          </div>
        </div>
      </div>

      <div className="row">
          <div className="col-md-4">
        <div className="card bg-secondary rounded mt-2">
          
            <div className="card-body">
             
              <div> 
              <img src={require('../../img/gallery.jpg')} className="img-fluid resp rounded" alt="pic"/>
                </div> 
                <Link to="./gallery"><h6 className="btn bg-secondary text-white font-weight-bold text-center m-0">Gallery of Persian Events</h6></Link>
              
            </div>
          </div>
        </div>
      <div className="col-md-4">
<div className="card bg-secondary rounded mt-2">
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
      </div>
        )
    }
}
