import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getAssignments } from '../utils/data/assignmentData';
import AssignmentCard from '../components/cards/AssignmentCard';

export default function Assignments() {
  const [assignments, setAssignments] = useState([]);

  const getAllAssignments = () => {
    getAssignments().then(setAssignments);
  };

  useEffect(() => {
    getAllAssignments();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/assignment/new" passHref>
        <Button>Add An Assignment</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment.id} assignmentObj={assignment} onUpdate={getAllAssignments} />
        ))}
      </div>

    </div>
  );
}
