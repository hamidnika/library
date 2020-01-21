import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
      <ul>
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

      <li></li>
      <li>
        <a onClick={logout} href="#!">
         <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
    );

    const guestLinks = (
      <ul>
      {/* <li className="btn-outline-success">
        <a href="#!">Members</a>
      </li> */}
      <li className="btn-outline-warning">
        <Link to="/register">Register</Link>
      </li>
      <li className="btn-outline-warning">
        <Link to="/login">Login</Link>
      </li>
    </ul>
    );

    return (
    <nav className="navbar bg-info">
      <h1 className="btn-outline-warning">
        <Link to="/">
        Home
        </Link>
      </h1>
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