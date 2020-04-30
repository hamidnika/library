import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FaRegSave, FaSearch } from 'react-icons/fa';
export default class Homepart extends Component {
    render() {
        return (
            <div>
              <div className="p-2 bg-secondary rounded">
                 <div className="row">
        <div className="col-md-3">
        <div className="card bg-secondary rounded">
          
            <div className="card-body pt-1 mt-1">
             
              <div> 
              <img src={require('./news.jpg')} className="img-fluid responsive rounded" alt="asso"/>
                </div> 
                <p className="card-text text-white pt-1">Persian Associations in Germany. Here members produce their own News to inform others.</p>
              <Link to="/bk" className="btn bg-secondary text-white p-0 m-0 font-smallnormal">Read more...</Link>
              
            </div>
          </div>
        </div>
      
        <div className="col-md-3">
          <div className="card bg-secondary rounded">
            <div className="card-body">

              <img src={require('./associations.jpg')} class="img-fluid responsive rounded" alt="asso"/>
              <p className="card-text text-white pt-2 m-0 font-weight-bold">Who Are We?</p>
              <p className="card-text text-white">We make network among Persians in Germany.</p>
              
              <Link to="/about" className="btn bg-secondary text-wraning text-white p-0 m-0 font-smallnormal">Read More...</Link>
            </div>
          </div>
          </div>
          
          <div className="col-md-3">
        	<div className="card bg-secondary rounded p-0 m-0">
          <div className="card-body pt-1 mt-1">
  
					<h1 className="card-title text-center font-weight-bold text-warning m-0 pt-0">Chat<a href="https://chattroooms.herokuapp.com/" className="btn btn-dark text-warning elem">Click and Enjoy</a></h1>
          <p className="text-center display-5"><span>&#128525;&#128512;&#128523;</span></p>
				  <p className="card-text text-white m-0 p-0 text-justify">Chat with others to make connection and naturally ask about your needs in Germany and share your experiences with others.</p>
          </div>
				</div>
        </div>
        <div className="col-md-3">
          <div className="card bg-secondary rounded">
            <div className="card-body pt-1 mt-1">

              <div> 
              <img src={require('./newss.jpg')} class="img-fluid responsive rounded" alt="asso"/>
                </div>
                <div>
                <p className="card-text text-white pt-1 pb-0">Access to News and latest Developments of Countries.</p>
                <p><a href="https://hamidnika.github.io/newsdaily/" className="btn bg-secondary text-white p-0 m-0 font-smallnormal">Read more...</a></p>
                </div>

              <a href="https://hamidnika.github.io/coronaintera/" className="btn font-small font-weight-bold bg-secondary text-warning rounded">Latest News of Corona</a>
              
            </div>
          </div>
        </div>
      </div>

      <div className="row">
          <div className="col-md-4">
        <div className="card bg-secondary rounded mt-2 container">
          
            <div className="card-body">
          
            <Link to="./gallery"><img src={require('../../img/gallery.jpg')} className="img-fluid resp rounded p-0" alt="pic"/>
              <p className="btn bg-secondary text-white font-weight-bold p-0">Gallery of Persian Events</p></Link>
            
              
            </div>
          </div>
        </div>
      <div className="col-md-4">
<div className="card bg-secondary rounded mt-2">
  <div className="card-body">
  <p className="bg-secondary p-2 text-white font-weight-bold text-center">We Will have Live Streaming <i class="fas fa-tv"></i></p>
    <iframe title="my video" className="img-fluid rounded" width="280" height="auto" src="https://www.youtube.com/embed/s1-foVKep2k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  </div>
</div>
</div>

        <div className="col-md-4">
        	<div className="card bg-secondary text-white mt-2">
          <div className="card-body">
          <p className="p-1"><Link to="/search" className="btn bg-dark text-white font-smallnormal font-weight-bold">Search and Save Books from GoogleBooks<h4><FaSearch /></h4></Link></p>
          <p className="p-1"><Link to="/saved" className="btn bg-dark text-white font-smallnormal font-weight-bold">See SavedBooks by Users from GoogleBooks<h4><FaRegSave /></h4></Link></p>
                  
          </div>
				</div>
        </div>
      </div>
      </div>
      </div>
        )
    }
}
