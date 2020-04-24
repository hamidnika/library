import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });
   
const { email, password } = formData;
const onChange = e => 
  setFormData({...formData, [e.target.name]: e.target.value });

const onSubmit = async e => {
  e.preventDefault();
  login(email, password);
};

if(isAuthenticated) {
   return <Redirect to="/dashboard" />
}
    return (
    <Fragment>
      <div className="purpllle dashboard">
      <h5 className="text-white pl-2">Login</h5>
      <p className="text-white pl-2">
        <i className="fas fa-user" /> Login Into Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group p-2">
          <input
          type="email" 
          placeholder="Email Address" 
          name="email"
          value={email} 
          onChange={e => onChange(e)}
          required
          />
        </div>
        <div className="form-group p-2">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn text-white purplle" value="Login" />
      </form>
      <p className="my-1 text-white pl-2">
        Don't have an account? <Link className="text-white purplle pl-2" to="/register">Register</Link>
      </p> 
      </div>
    </Fragment>
    )
    
};

login.PropTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps, 
  { login }
  )(Login);