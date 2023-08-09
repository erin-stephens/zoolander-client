/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import ClassCard from '../components/cards/ClassCard';
import { getClassrooms } from '../utils/data/classroomData';
import { useAuth } from '../utils/context/authContext';

export default function Classes() {
  const [classrooms, setClassroom] = useState([]);
  const { user } = useAuth();

  const getAllTheClasses = () => {
    getClassrooms(user.uid).then((data) => setClassroom(data));
  };

  useEffect(() => {
    getAllTheClasses();
  }, [user]);

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
