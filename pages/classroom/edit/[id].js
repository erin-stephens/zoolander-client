import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ClassForm from '../../../components/forms/ClassForm';
import { getSingleClassroom } from '../../../utils/data/classroomData';

export default function EditClass() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleClassroom(id).then(setEditItem);
  }, [id]);

  return <ClassForm obj={editItem} />;
}
