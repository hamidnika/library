import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
      <ul className="navbar-collapse">
         <li className="btn-outline-warning">
      <Link to="/home">Home</Link>
      </li>
       
      <li>
        <Link to="/saved">
        <i className="fas fa-user" />{' '}
        <span className="hide-sm">Saved Books</span>
        </Link>
      </li>
      <li>
        <Link to="/search">
        <i className="fas fa-user" />{' '}
        <span className="hide-sm">Search Library</span>
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
        <i className="fas fa-user" />{' '}
        <span className="hide-sm">Dashboard</span>
        </Link>
      </li>

      <li>
        <a onClick={logout} href="#!">
         <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
    );

    const guestLinks = (
      <ul class="nav navbar-collapse">
         <li className="btn-outline-warning">
      <Link to="/home">Home</Link>
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
     
    </ul>
    );

    return (
    <nav className="navbar bg-info">
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