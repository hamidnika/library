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
          <div className="purpllle p-4">
          <h4 className="text-white p-3">
        Create Profile
      </h4>
     
      <small className="text-white bg-dark">* = required</small>
      <form className="form" onSubmit={e => onSubmit(e)}>

      <div className="form-group">
          <input type="text" placeholder="Job" name="status" value={status} onChange={e => onChange(e)}/>
          <small className="purplle text-white pl-2">current job</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Company" name="company" value={company}
           onChange={e => onChange(e)}/>
          <small className="purplle text-white pl-2"
            >Name of Company </small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" name="website" value={website}
          onChange={e => onChange(e)}/>
          <small className="purplle text-white pl-2"
            >Company Website</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location}
           onChange={e => onChange(e)}/>
          <small className="purplle text-white pl-2"
            >City/State/Country</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Skills" name="skills" value={skills}
           onChange={e => onChange(e)}/>
          <small className="purplle text-white pl-2"
            >Skills</small
          >
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Github/Xing/Linkedin"
            name="githubusername"
            value={githubusername}
           onChange={e => onChange(e)}
          />
          <small className="purplle text-white pl-2">
          Github/Xing/Linkedin</small>
        </div>
        <div className="form-group">
          <textarea placeholder="about you" name="bio" value={bio}
           onChange={e => onChange(e)}></textarea>
          <small class="purplle text-white pl-2">Short Story about You</small>
        </div>

        <div>
          <button className="btn text-white purplle" onClick={() => toggleSocialInputs(!displaySocialInputs)} type="button">
          Social Networks
          </button>
          <span className="text-white">*Optional</span>
        </div>
        {displaySocialInputs && <Fragment>
            <div className="form-group social-input">
          <i className="fab fa-twitter fa-2x text-white"></i>
          <input type="text" placeholder="Twitter URL" name="twitter" value={twitter}
           onChange={e => onChange(e)}/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-facebook fa-2x text-white"></i>
          <input type="text" placeholder="Facebook URL" name="facebook" value={facebook}
           onChange={e => onChange(e)}/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-youtube fa-2x text-white"></i>
          <input type="text" placeholder="YouTube URL" name="youtube" value={youtube}
           onChange={e => onChange(e)}/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-linkedin fa-2x text-white"></i>
          <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin}
           onChange={e => onChange(e)}/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-instagram fa-2x text-white"></i>
          <input type="text" placeholder="Instagram URL" name="instagram" value={instagram}
           onChange={e => onChange(e)}/>
        </div> 
        
        </Fragment>}
        
        <input type="submit" className="btn purplle text-white my-1" />
        <Link className="btn text-warning purplle my-1" to="/dashboard">
        Back
        </Link>
      </form> 
      </div>
        </Fragment>
    )
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired  
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
