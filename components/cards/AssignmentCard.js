import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteAssignment } from '../../utils/data/assignmentData';

function AssignmentCard({ assignmentObj, onUpdate }) {
  const deleteThisAssignment = () => {
    if (window.confirm(`Delete ${assignmentObj.title}?`)) {
      deleteAssignment(assignmentObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={assignmentObj.image_url} alt={assignmentObj.title} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{assignmentObj.title}</Card.Title>
        <br />
        <Link href={`/assignment/${assignmentObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/assignment/edit/${assignmentObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisAssignment} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

AssignmentCard.propTypes = {
  assignmentObj: PropTypes.shape({
    title: PropTypes.string,
    image_url: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AssignmentCard;
