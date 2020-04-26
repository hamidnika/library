import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map(exp => (
    <tr className="bg-secondary text-white" key={exp._id}>
      <td className="col-md-3">{exp.company}</td>
      <td className="col-md-3">{exp.title}</td>
      <td className="col-md-3">
        <Moment format="YYYY/MM/DD">{moment.utc(exp.from)}</Moment> -{' '}
        {exp.to === null ? (
          ' Now'
        ) : (
          <Moment format="YYYY/MM/DD">{moment.utc(exp.to)}</Moment>
        )}
      </td>
      <td scope="col" >
        <button
          onClick={() => deleteExperience(exp._id)}
          className="btn bg-dark text-warning p-0 m-0"
        >Delete</button>
      
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h6 className="text-white">Experience Background</h6>
      <table className="table-responsive">
        <thead >
          <tr>
            <th scope="row" className="bg-white">Company</th>
            <th scope="row" className="bg-white text-dark">Title</th>
            <th scope="row" className="bg-white text-dark">Years</th>
            <th scope="row" className="bg-white text-dark"></th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);