/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
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
      <div
        className="mt-5 d-flex flex-wrap"
        style={{
          backgroundImage: 'url(https://img.freepik.com/free-photo/empty-blackboard_53876-16241.jpg)',
          backgroundSize: '100% 100%', // Stretch both horizontally and vertically
          backgroundPosition: 'center bottom', // Show the bottom edge
          padding: '30px', // Add padding for better spacing
        }}
      >
        <div style={{ color: 'white', fontSize: '24px', marginBottom: '20px' }}>
          <h5>{classDetails.class_name}</h5>
          Description: {classDetails.description}
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
      </div>
      <div style={{
        marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <img
          src="https://images.prismic.io/prodigy-website/8f7bda1b-dbe9-4f13-b94f-cad24806715a_support-class-teacher.jpeg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C818%2C5760%2C1920&w=1920&h=640"
          alt="kids learning"
          style={{
            width: '65%',
            height: 'auto',
            borderRadius: '10px', // Round the border
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow
          }}
        />
      </div>
    </>
  );
}
