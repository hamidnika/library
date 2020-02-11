import React, { Fragment, useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
//import FileUpload from './FileUpload';

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({ 
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube:'',
    instagram: ''
    });

    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData;

    const onChange = e => 
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = e => {
      e.preventDefault();
      createProfile(formData, history);
    }

    return (
        <Fragment>
          <h3 className="text-warning bg-dark">
        Create Your Profile
      </h3>
      <p className="lead text-warning bg-dark">
        <i className="fas fa-user"></i> some information for your
        profile
      </p>
     
      <small className="text-white bg-dark">* = required field</small>
      <form className="form" onSubmit={e => onSubmit(e)}>

        <div className="form-group">
          <select name="status" value={status} onChange={e => onChange(e)}>
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text text-white bg-dark"
            >Status of Your Job or Education</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Company" name="company" value={company}
           onChange={e => onChange(e)}/>
          <small className="form-text text-white bg-dark"
            >Could be your own company or one you work for</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" name="website" value={website}
          onChange={e => onChange(e)}/>
          <small className="form-text text-white bg-dark"
            >Could be your own or a company website</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location}
           onChange={e => onChange(e)}/>
          <small className="form-text text-white bg-dark"
            >City & state suggested (eg. Boston, MA)</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Skills" name="skills" value={skills}
           onChange={e => onChange(e)}/>
          <small className="form-text text-white bg-dark"
            >Please use comma separated values (eg.
            HTML,CSS,JavaScript,PHP)</small
          >
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
           onChange={e => onChange(e)}
          />
          <small className="form-text text-white bg-dark">your
          Github username</small>
        </div>
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio" value={bio}
           onChange={e => onChange(e)}></textarea>
          <small class="form-text text-white bg-dark">Tell us a little about yourself</small>
        </div>

        <div>
          <button className="btn-dark text-warning my-2" onClick={() => toggleSocialInputs(!displaySocialInputs)} type="button">
          Add Social Network Links
          </button>
          <span className="text-white bg-dark">Optional</span>
        </div>
        {displaySocialInputs && <Fragment>
            <div className="form-group social-input">
          <i className="fab fa-twitter fa-2x"></i>
          <input type="text" placeholder="Twitter URL" name="twitter" value={twitter}
           onChange={e => onChange(e)}/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-facebook fa-2x"></i>
          <input type="text" placeholder="Facebook URL" name="facebook" value={facebook}
           onChange={e => onChange(e)}/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-youtube fa-2x"></i>
          <input type="text" placeholder="YouTube URL" name="youtube" value={youtube}
           onChange={e => onChange(e)}/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-linkedin fa-2x"></i>
          <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin}
           onChange={e => onChange(e)}/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-instagram fa-2x"></i>
          <input type="text" placeholder="Instagram URL" name="instagram" value={instagram}
           onChange={e => onChange(e)}/>
        </div> 
        
        </Fragment>}
        
        <input type="submit" className="btn btn-dark text-warning my-2" />
        <Link className="btn btn-dark my-1" to="/dashboard">
        Go Back
        </Link>
      </form>  
        </Fragment>
    )
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired  
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
