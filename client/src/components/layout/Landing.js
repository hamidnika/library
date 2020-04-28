import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const Landing = ({ isAuthenticated }) => {
  if(isAuthenticated) {
    return <Redirect to='/dashboard' />
  } 

    return (
        <section className="landing rounded">
      <div className="dark-overlay mb-0">
        <div className="landing-inner">
        <h6 className="text-warning font-weight-bold handwrite">
            Welcome to BookLook
          </h6>
          <h5 className="text-white font-weight-bold">Become Member of Persian Associations</h5>
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