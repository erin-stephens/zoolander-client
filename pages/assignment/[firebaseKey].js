import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleAssignment } from '../../utils/data/assignmentData';

export default function ViewAssignment() {
  const [assignmentDetails, setAssignmentDetails] = useState([]);
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleAssignment(firebaseKey).then(setAssignmentDetails);
  }, [firebaseKey]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="text-white ms-5 details">
          <h5>
            {assignmentDetails.title}
          </h5>
          <p>{assignmentDetails.content}</p>
        </div>
      </div>
    </>
  );
}
