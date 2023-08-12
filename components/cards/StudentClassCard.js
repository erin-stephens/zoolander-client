import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { removeStudentFromClass } from '../../utils/data/studentData';

function StudentClassCard({ studentClassObj, onUpdate }) {
  const classroomId = studentClassObj.classroom.id;
  const studentId = studentClassObj.student.id;
  const removeStudent = () => {
    removeStudentFromClass(studentId, classroomId).then(() => onUpdate());
    console.warn(classroomId);
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }} className="card-design">
      <Card.Img variant="top" src={studentClassObj.student.image_url} alt={studentClassObj.student.student_full_name} style={{ height: '200px' }} />
      <Card.Body>
        <Card.Title>{studentClassObj.student.student_full_name}</Card.Title>
        <Button onClick={removeStudent}>Remove</Button>
      </Card.Body>
    </Card>
  );
}

StudentClassCard.propTypes = {
  id: PropTypes.number.isRequired,
  studentClassObj: PropTypes.shape({
    student: PropTypes.shape({
      image_url: PropTypes.string.isRequired,
      student_full_name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
    classroom: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default StudentClassCard;
