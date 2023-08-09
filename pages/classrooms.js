import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import ClassCard from '../components/cards/ClassCard';
import { getClassrooms } from '../utils/data/classroomData';

export default function Classes() {
  const [classrooms, setClassroom] = useState([]);

  const getAllTheClasses = () => {
    getClassrooms().then(setClassroom);
  };

  useEffect(() => {
    getAllTheClasses();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/classroom/new" passHref>
        <Button>Add A Class</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {classrooms.map((classroom) => (
          <ClassCard key={classroom.id} classObj={classroom} onUpdate={getAllTheClasses} />
        ))}
      </div>
    </div>
  );
}
