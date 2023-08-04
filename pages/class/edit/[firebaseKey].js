import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ClassForm from '../../../components/forms/ClassForm';
import { getSingleClass } from '../../../utils/data/classData';

export default function EditClass() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleClass(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to form
  return <ClassForm obj={editItem} />;
}
