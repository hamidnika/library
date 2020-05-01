import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
      <ul className="nav navbar-collapse hii">
        
     <img src={require('./logoo.jpg')} className="n" style={{height:'auto', width:245 }} alt="pic1"/> 
        {/* <p className="handwrite text-warning p-2 pl-4 m-0" style={{height:'auto', width:300 }}>BookLook</p> */}
         <li className="btn-outline-warning">
      <Link to="/home">Home</Link>
      </li>
     {/*  <li className="btn-outline-warning">
      <Link to="/posts">News</Link>
      </li> */}
      <li className="btn-outline-warning">
      <Link to="/bk">Persian News</Link>
      </li>
      <li className="btn-outline-warning">
        <Link to="/saved">
        <span>Saved Books</span>
        </Link>
      </li>
      <li className="btn-outline-warning">
        <Link to="/search">
        <span>Search Library</span>
        </Link>
      </li>
      <li className="btn-outline-warning" >
        <Link to="/dashboard">
        <i className="fas fa-user" />
        <span>Dashboard</span>
        </Link>
      </li>
      <li className="btn-outline-warning" >
        <Link to="/gallery">Gallery</Link>
      </li>
      <li className="btn-outline-warning" >
        <Link to="/about">About Us</Link>
      </li>
      <li className="btn-outline-warning">
        <Link onClick={logout} to="/home">
         <i className="fas fa-sign-out-alt" />
          <span>Logout</span>
        </Link>
      </li>
    </ul>
    );

    const guestLinks = (

      <ul className="nav navbar-collapse hii">
 <img src={require('./logoo.jpg')} className="n" style={{height:'auto', width:245}} alt="pic1"/> 
{/* <p className="handwrite text-warning pl-4 p-2 m-0" style={{height:'auto', width:300 }}>BookLook</p> */}
         <li className="btn-outline-warning">
      <Link to="/home">Home</Link>
      </li>
     {/*  <li className="btn-outline-warning">
      <Link to="/posts">News</Link>
      </li> */}
      <li className="btn-outline-warning">
      <Link to="/bk">Persian News</Link>
      </li>
      <li className="btn-outline-warning">
        <Link to="/register">Register</Link>
      </li>
      <li className="btn-outline-warning">
        <Link to="/login">Login</Link>
      </li>
      <li className="btn-outline-warning">
      <Link to="/">Welcome Page</Link>
      </li>
      <li className="btn-outline-warning" >
        <Link to="/gallery">Gallery</Link>
      </li>
      <li className="btn-outline-warning" >
        <Link to="/about">About Us</Link>
      </li>
    </ul>
    );

    return (
    <nav className="navbar bg-dark">
    { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks } </Fragment>) } 
    </nav>
    )
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logout })(Navbar);