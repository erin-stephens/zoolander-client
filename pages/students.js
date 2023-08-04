import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getStudents } from '../utils/data/studentData';
import StudentCard from '../components/cards/StudentCard';

function Students() {
  const [students, setStudents] = useState([]);

  const getAllTheStudents = () => {
    getStudents().then(setStudents);
  };

  useEffect(() => {
    getAllTheStudents();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/student/new" passHref>
        <Button>Add A Student</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {students.map((student) => (
          <StudentCard key={student.firebaseKey} studentObj={student} onUpdate={getAllTheStudents} />
        ))}
      </div>

    </div>
  );
}

export default Students;
