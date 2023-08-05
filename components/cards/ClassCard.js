import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleClassroom } from '../../utils/data/classroomData';

function ClassCard({ classObj, onUpdate }) {
  const deleteThisClass = () => {
    if (window.confirm(`Delete ${classObj.class_name}?`)) {
      deleteSingleClassroom(classObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{classObj.class_name}</Card.Title>
        <Card.Title>{classObj.description}</Card.Title>
        <Link href={`/class/${classObj.id}`} passHref>
          <Button variant="primary" className="m-2">
            VIEW
          </Button>
        </Link>
        <Link href={`/class/edit/${classObj.id}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisClass} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

ClassCard.propTypes = {
  classObj: PropTypes.shape({
    class_name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ClassCard;
