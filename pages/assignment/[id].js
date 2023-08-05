import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getSingleAssignment } from '../../utils/data/assignmentData';

export default function ViewAssignment() {
  const [assignmentDetails, setAssignmentDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleAssignment(firebaseKey).then(setAssignmentDetails);
    console.warn(assignmentDetails);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseKey]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assignmentDetails.image_url} alt={assignmentDetails.title} style={{ width: '300px' }} />
        </div>
        <div className="text-white ms-5 details">
          <h3>{assignmentDetails.title}</h3>
          <p>{assignmentDetails.content}</p>
          <br />
          <Link href={`/assignment/edit/${assignmentDetails.firebaseKey}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
