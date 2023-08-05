import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleStudent } from '../../../utils/data/studentData';
import StudentForm from '../../../components/forms/StudentForm';

export default function EditStudent() {
  const [editStudent, setEditStudent] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleStudent(id).then(setEditStudent);
  }, [id]);

  return (<StudentForm obj={editStudent} />);
}
