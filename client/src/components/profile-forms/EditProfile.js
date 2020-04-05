import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
//import FileUpload from './FileUpload';


const EditProfile = ({ 
    profile: { profile, loading },
    createProfile, 
    getCurrentProfile, 
    history 
  }) => {
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
    
    useEffect(() => {
        getCurrentProfile();
        
        setFormData({
            company: loading || !profile.company ? '' : profile.company,
            website: loading || !profile.website ? '' : profile.website,
            location: loading || !profile.location ? '' : profile.location,
            status: loading || !profile.status ? '' : profile.status,
            skills: loading || !profile.skills ? '' : profile.skills.join(','),
            githubusername:
              loading || !profile.githubusername ? '' : profile.githubusername,
            bio: loading || !profile.bio ? '' : profile.bio,
            twitter: loading || !profile.social ? '' : profile.social.twitter,
            facebook: loading || !profile.social ? '' : profile.social.facebook,
            linkedin: loading || !profile.social ? '' : profile.social.linkedin,
            youtube: loading || !profile.social ? '' : profile.social.youtube,
            instagram: loading || !profile.social ? '' : profile.social.instagram
          });
        }, [loading, getCurrentProfile]);

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
      createProfile(formData, history, true);
    }

    return (
        <Fragment>
  <div className="purpllle rounded">
          <h5 className="text-white pl-2 pt-2 purpllle">
        Edit your Profile
      </h5>

      <small className="purplle pl-2 text-white">* = required field</small>
      <form className="form" onSubmit={e => onSubmit(e)}>
  
        <div className="form-group">
          <input type="text" placeholder="Job" name="status" value={status} onChange={e => onChange(e)}/>
          <small className="purplle text-white pl-2">your current job</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Company" name="company" value={company} onChange={e => onChange(e)}/>
          <small className="purplle text-white pl-2"
            >your own company or the one you work for</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" name="website" value={website}
          onChange={e => onChange(e)}/>
          <small className="purplle text-white pl-2"
            >your own or a company website</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location}
           onChange={e => onChange(e)}/>
          <small className="purplle text-white pl-2"
            >City/Country </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Skills" name="skills" value={skills}
           onChange={e => onChange(e)}/>
          <small className="purplle text-white pl-2"
            >Skills (Please use comma to separate skills)</small
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
          <small className="purplle text-white pl-2"
            >If you want your latest repos and a Github link</small
          >
        </div>
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio" value={bio}
           onChange={e => onChange(e)}></textarea>
          <small class="purplle text-white pl-2">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button onClick={() => toggleSocialInputs(!displaySocialInputs)} type="button" className="btn text-white purplle">
            Add Social Network Links
          </button>
          <span className="text-white">*Optional</span>
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
        
        <input type="submit" className="btn purplle text-white my-1" />
        <Link className="btn text-warning purplle my-1" to="/dashboard">
        Go Back
        </Link>
      </form>
      </div>
    </Fragment>
    )
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired  
};

const mapStateToProps = state => ({
   profile: state.profile
});

export default connect(
  mapStateToProps, 
  { createProfile, getCurrentProfile }
  )(withRouter(EditProfile));
