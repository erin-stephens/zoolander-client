import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleClassroom } from '../../utils/data/classroomData';

export default function ViewClass() {
  const [classDetails, setClassDetails] = useState([]);
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleClassroom(firebaseKey).then(setClassDetails);
  }, [firebaseKey]);
  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="text-white ms-5 details">
          <h5>{classDetails.class_name}</h5>
          Description: {classDetails.description}
        </div>
      </div>
    </>
  );
}
