import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteStudent } from '../../utils/data/studentData';

function StudentCard({ studentObj, onUpdate }) {
  const deleteThisStudent = () => {
    if (window.confirm(`Delete ${studentObj.student_full_name}?`)) {
      deleteStudent(studentObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }} className="student-card">
      <Card.Img variant="top" src={studentObj.image_url} alt={studentObj.student_full_name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{studentObj.student_full_name}</Card.Title>
        <Link href={`/student/${studentObj.id}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        <Link href={`/student/edit/${studentObj.id}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisStudent} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

StudentCard.propTypes = {
  studentObj: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    student_full_name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default StudentCard;
