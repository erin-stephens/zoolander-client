/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleClassroom, getClassesStudents, getAssignmentsByClassId } from '../../utils/data/classroomData';
import StudentClassCard from '../../components/cards/StudentClassCard';
import AssignmentCard from '../../components/cards/AssignmentCard';

export default function ViewClass() {
  const [classDetails, setClassDetails] = useState([]);
  const [studentClasses, setStudentClasses] = useState([]);
  const [classAssignments, setClassAssignments] = useState([]);
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

  const getAssignmentsByClass = async () => {
    const assignments = await getAssignmentsByClassId(id);
    setClassAssignments(assignments);
    console.warn(assignments);
  };

  useEffect(() => {
    getStudentsByClass();
    getAssignmentsByClass();
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
      </div>
      <h3 style={{
        backgroundColor: 'darkGreen',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '5px',
        marginTop: '10px',
      }}
      >
        Students
      </h3>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{
          flex: 1, marginRight: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
        }}
        >
          {studentClasses.map((studentClass) => (
            <section key={`studentClass--${studentClass.id}`} className="studentClasses">
              <StudentClassCard studentClassObj={studentClass} onUpdate={getStudentsByClass} />
            </section>
          ))}
        </div>
      </div>
      <h3 style={{
        backgroundColor: 'darkGreen',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '5px',
        marginTop: '10px',
      }}
      >
        Assignments
      </h3>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Assignments */}
        <div style={{
          flex: 1, marginRight: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
        }}
        >
          {classAssignments.map((classAssignment) => (
            <section key={`classAssignment--${classAssignment.id}`} className="classAssignments">
              <AssignmentCard assignmentObj={classAssignment} onUpdate={getAssignmentsByClass} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
