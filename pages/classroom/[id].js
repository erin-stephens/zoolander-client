import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleClassroom } from '../../utils/data/classroomData';
import StudentClassCard from '../../components/cards/StudentClassCard';

export default function ViewClass() {
  const [classDetails, setClassDetails] = useState([]);
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleClassroom(id).then(setClassDetails);
  }, [id]);
  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="text-white ms-5 details">
          <h5>{classDetails.class_name}</h5>
          Description: {classDetails.description}
        </div>
        <StudentClassCard />
      </div>
    </>
  );
}
