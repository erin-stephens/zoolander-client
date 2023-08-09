import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleClassroom, getClassesStudents } from '../../utils/data/classroomData';
import StudentClassCard from '../../components/cards/StudentClassCard';

export default function ViewClass() {
  const [classDetails, setClassDetails] = useState([]);
  const [studentClasses, setStudentClasses] = useState([]);
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleClassroom(id).then(setClassDetails);
  }, [id]);

  const getStudentsByClass = async () => {
    const students = await getClassesStudents(id);
    setStudentClasses(students);
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
        {studentClasses.map((studentClass) => (
          <section
            key={`studentClass--${studentClass.id}`}
            className="studentClasses"
          >
            <StudentClassCard studentClassObj={studentClass} onUpdate={getStudentsByClass} />
          </section>
        ))}
      </div>
    </>
  );
}
