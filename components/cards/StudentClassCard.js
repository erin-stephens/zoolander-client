import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
// import Link from 'next/link';
// import { deleteStudent } from '../../utils/data/studentData';

function StudentClassCard({ studentClassObj }) {
  // const deleteThisStudent = () => {
  //   if (window.confirm(`Delete ${studentClassObj.student_full_name}?`)) {
  //     deleteStudent(studentClassObj.id).then(() => onUpdate());
  //   }
  // };

  return (
    <Card style={{ width: '18rem', margin: '10px' }} className="student-card">
      <Card.Img variant="top" src={studentClassObj.student.image_url} alt={studentClassObj.student.student_full_name} style={{ height: '200px' }} />
      <Card.Body>
        <Card.Title>{studentClassObj.student.student_full_name}</Card.Title>
        {/* <Link href={`/student/${studentClassObj.id}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/student/edit/${studentClassObj.id}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link> */}
        {/* <Button variant="danger" onClick={deleteThisStudent} className="m-2">
          DELETE
        </Button> */}
      </Card.Body>
    </Card>
  );
}

StudentClassCard.propTypes = {
  studentClassObj: PropTypes.shape({
    student: PropTypes.shape({
      image_url: PropTypes.string.isRequired,
      student_full_name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default StudentClassCard;
