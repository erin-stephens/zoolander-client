import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleStudent } from '../../../utils/data/studentData';
import StudentForm from '../../../components/forms/StudentForm';

export default function EditStudent() {
  const [editStudent, setEditStudent] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleStudent(firebaseKey).then(setEditStudent);
  }, [firebaseKey]);

  return (<StudentForm obj={editStudent} />);
}
