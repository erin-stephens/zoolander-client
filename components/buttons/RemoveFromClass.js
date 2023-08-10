import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { removeStudentFromClass } from '../../utils/data/studentData';

export default function RemoveFromClass({ studentClassObj }) {
  const removeStudent = () => {
    removeStudentFromClass(studentClassObj.studentId);
  };

  return (
    <Button onClick={removeStudent}>Remove</Button>
  );
}

RemoveFromClass.propTypes = {
  studentClassObj: PropTypes.shape({
    studentId: PropTypes.number,
  }).isRequired,
};
