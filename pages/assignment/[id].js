import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getSingleAssignment } from '../../utils/data/assignmentData';

export default function ViewAssignment() {
  const [assignmentDetails, setAssignmentDetails] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleAssignment(id).then(setAssignmentDetails);
    console.warn(assignmentDetails);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <div
        className="mt-5 d-flex flex-wrap"
        style={{
          backgroundImage: 'url(https://img.freepik.com/free-photo/empty-blackboard_53876-16241.jpg)',
          backgroundSize: '100% 100%', // Stretch both horizontally and vertically
          backgroundPosition: 'center bottom', // Show the bottom edge
          padding: '30px', // Add padding for better spacing
        }}
      >
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assignmentDetails.image_url} alt={assignmentDetails.title} style={{ width: '300px' }} />
        </div>
        <div className="text-white ms-5 details">
          <h3>{assignmentDetails.title}</h3>
          <p>{assignmentDetails.content}</p>
          <br />
          <Link href={`/assignment/edit/${assignmentDetails.id}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
