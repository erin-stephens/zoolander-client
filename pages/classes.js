import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import ClassCard from '../components/cards/ClassCard';
import { getClasses } from '../utils/data/classData';

export default function Classes() {
  const [classrooms, setClassroom] = useState([]);

  const getAllTheClasses = () => {
    getClasses().then(setClassroom);
  };

  useEffect(() => {
    getAllTheClasses();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/class/new" passHref>
        <Button>Add A Class</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {classrooms.map((classroom) => (
          <ClassCard key={classroom.firebaseKey} classObj={classroom} onUpdate={getAllTheClasses} />
        ))}
      </div>
    </div>
  );
}
