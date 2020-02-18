import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map(exp => (
    <tr className="bg-secondary text-white" key={exp._id}>
      <td className="col">{exp.company}</td>
      <td className="col">{exp.title}</td>
      <td className="col">
        <Moment format="YYYY/MM/DD">{moment.utc(exp.from)}</Moment> -{' '}
        {exp.to === null ? (
          ' Now'
        ) : (
          <Moment format="YYYY/MM/DD">{moment.utc(exp.to)}</Moment>
        )}
      </td>
      <td className="col">
        <button
          onClick={() => deleteExperience(exp._id)}
          className="btn bg-warning text-danger"
        ></button>
          Delete
      
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h4 className="my-2 bg-dark text-white">Experience Background</h4>
      <table className="table-responsive">
        <thead >
          <tr>
            <th className="bg-white col">Company</th>
            <th className="bg-white text-dark col">Title</th>
            <th className="bg-white text-dark col">Years</th>
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