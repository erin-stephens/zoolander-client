import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function ClassStudentCard({ classStudentObj }) {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{classStudentObj.student.student_full_name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

ClassStudentCard.propTypes = {
  classStudentObj: PropTypes.shape({
    student: PropTypes.shape({
      student_full_name: PropTypes.string,
    }),
  }).isRequired,
};
