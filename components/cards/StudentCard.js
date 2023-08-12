import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BsFillTrash3Fill, BsFillPencilFill, BsFillEyeFill } from 'react-icons/bs';
import { deleteStudent } from '../../utils/data/studentData';

function StudentCard({ studentObj, onUpdate }) {
  const deleteThisStudent = () => {
    if (window.confirm(`Delete ${studentObj.student_full_name}?`)) {
      deleteStudent(studentObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', padding: '7px 5px', margin: '10px' }} className="card-design">
      <Card.Img
        variant="top"
        src={studentObj.image_url}
        alt={studentObj.student_full_name}
        style={{ height: '20vh', width: '100%', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{studentObj.student_full_name}</Card.Title>
        <Link href={`/student/${studentObj.id}`} passHref>
          <Button variant="primary" className="m-2"><BsFillEyeFill /></Button>
        </Link>
        <Link href={`/student/edit/${studentObj.id}`} passHref>
          <Button variant="info"><BsFillPencilFill /></Button>
        </Link>
        <Button variant="danger" onClick={deleteThisStudent} className="m-2">
          <BsFillTrash3Fill />
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
