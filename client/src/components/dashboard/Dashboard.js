import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="purpllle rounded p-3">
        <div className="pb-5">
      <h5 className='text-white pl-2 pt-3'>Information about Members</h5>
      <h6 className='text-white pl-2'>
       Welcome <span className="text-success h3">{user && user.name}</span> to <span className="text-warning handwrit">BookLook</span>
      </h6>
      </div>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
         <div className="p-2"><Experience experience={profile.experience}/></div>
         <div className="p-2"><Education education={profile.education} /></div>

          <div className='my-3 p-2'>
            <button className='btn purplle text-warning p-2' onClick={() => deleteAccount()}>
              <i/> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p className="text-warning m-2">Create Profile and Add Personal Information</p>
          <Link to='/create-profile' className='btn btn-dark text-white pl-2'>
            Create Profile
          </Link>
        </Fragment>
      )}
      <div className="dashboar"></div>
      </div>
      
    </Fragment>
     
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);