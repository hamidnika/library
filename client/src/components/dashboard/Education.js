import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map(edu => (
    <tr className="bg-secondary text-white" key={edu._id}>
      <td className="col-md-3">{edu.school}</td>
      <td className="col-md-3">{edu.degree}</td>
      <td className="col-md-3">
        <Moment format="YYYY/MM/DD">{moment.utc(edu.from)}</Moment> -{' '}
        {edu.to === null ? (
          ' Now'
        ) : (
          <Moment format="YYYY/MM/DD">{moment.utc(edu.to)}</Moment>
        )}
      </td>
      <td scope="col">
        <button 
          onClick={() => deleteEducation(edu._id)}
          className="btn bg-dark text-warning p-0 m-0"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h6 className="text-white">Education Background</h6>
      <table className="table-responsive">
        <thead>
          <tr>
            <th scope="row" className="bg-white">University</th>
            <th scope="row" className="bg-white text-dark">Degree</th>
            <th scope="row" className="bg-white text-dark">Years</th>
            <th scope="row" className="bg-white text-dark"></th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);