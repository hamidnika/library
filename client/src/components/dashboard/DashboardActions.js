import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
    return (
        <div class="dash-buttons p-2">
        <Link to="/edit-profile" class="btn purplle text-white">
            <i class="fas fa-user-circle text-warning"/> Update Profile
        </Link>
        <Link to="/add-experience" class="btn purplle text-white">
            <i class="fab fa-black-tie text-warning"/> Add Experience
        </Link>
        <Link to="/add-education" class="btn purplle text-white">
            <i class="fas fa-graduation-cap text-warning"/> Add Education
        </Link>
      </div>
    );
};

export default DashboardActions;
