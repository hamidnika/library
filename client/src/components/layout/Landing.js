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
      <div className="dark-overlay mb-0">
        <div className="landing-inner">
          <h3 className="text-warning">Become Member of Persian Associations</h3>
          <p className="lead text-warning">
            Welcome to BookLook
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