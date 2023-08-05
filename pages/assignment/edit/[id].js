import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleAssignment } from '../../../utils/data/assignmentData';
import AssignmentForm from '../../../components/forms/AssignmentForm';

export default function EditAssignment() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleAssignment(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<AssignmentForm obj={editItem} />);
}
