import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
    return (
        <div class="dash-buttons">
        <Link to="/edit-profile" class="btn purplle text-white">
            <i class="fas fa-user-circle text-warning"/> Edit your Profile
        </Link>
        <Link to="/add-experience" class="btn purplle text-white">
            <i class="fab fa-black-tie text-warning"/> Add your Experience
        </Link>
        <Link to="/add-education" class="btn purplle text-white">
            <i class="fas fa-graduation-cap text-warning"/> Add your Education
        </Link>
      </div>
    );
};

export default DashboardActions;
