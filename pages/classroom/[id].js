import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleClassroom, getClassesStudents } from '../../utils/data/classroomData';
import ClassStudentCard from '../../components/cards/ClassStudentCard';

export default function ViewClass() {
  const [classDetails, setClassDetails] = useState([]);
  const [classStudents, setClassStudents] = useState([]);
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleClassroom(id).then(setClassDetails);
  }, [id]);

  const getStudentsByClass = async () => {
    const students = await getClassesStudents(id);
    setClassStudents(students);
    console.warn(students);
  };

  useEffect(() => {
    getStudentsByClass();
  }, [id]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="text-white ms-5 details">
          <h5>{classDetails.class_name}</h5>
          Description: {classDetails.description}
        </div>
      </div>
      <div>
        {classStudents.map((classStudent) => (
          <section
            key={`classStudent--${classStudent.id}`}
            className="classStudents"
          >
            <ClassStudentCard classStudentObj={classStudent} onUpdate={getStudentsByClass} />
          </section>
        ))}
      </div>
    </>
  );
}
