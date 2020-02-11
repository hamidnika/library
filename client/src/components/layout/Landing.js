import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const Landing = ({ isAuthenticated }) => {
  if(isAuthenticated) {
    return <Redirect to='/dashboard' />
  } 

    return (
        <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h3 className="large text-warning">Become Member of Association</h3>
          <p className="lead text-warning">
            Welcome to Booklook
          </p>
          <div>
            <Link to="/register" className="btn bg-dark text-white">
              Register
            </Link>
            <Link to="/login" className="btn bg-dark text-white">Login</Link>
          </div>
        </div>
      </div>
    </section>
    )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);