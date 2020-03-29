import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
      <ul className="nav navbar-collapse hii">
        
        <img src={require('./persian.jpg')} className="n" style={{height:60, width:350 }} alt="pic1"/>
         <li className="btn-outline-warning">
      <Link to="/home">Home</Link>
      </li>
      <li className="btn-outline-warning">
      <Link to="/posts">News</Link>
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
      <li className="btn-outline-warning" >
        <Link to="/about">About Us</Link>
      </li>
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
<img src={require('./persian.jpg')} className="n" style={{height:60, width:350 }} alt="pic1"/>
         <li className="btn-outline-warning">
      <Link to="/home">Home</Link>
      </li>
      <li className="btn-outline-warning">
      <Link to="/posts">News</Link>
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