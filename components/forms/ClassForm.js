import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
// import { useAuth } from '../../utils/context/authContext';
import getUserData from '../../utils/data/userData';
import { createClassroom, updateClassroom } from '../../utils/data/classroomData';

const initialState = {
  description: '',
  class_name: '',
};

function ClassForm({ obj }) {
  const [currentClassroom, setCurrentClassroom] = useState(initialState);
  const [teachers, setTeachers] = useState([]);
  const router = useRouter();
  // const { user } = useAuth();

  useEffect(() => {
    getUserData().then(setTeachers);

    if (obj.id) {
      setCurrentClassroom({
        id: obj.id,
        teacherId: obj.teacher_id,
        description: obj.description,
        className: obj.class_name,
      });
    }
  }, [obj, teachers]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentClassroom((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      const classroomUpdate = { ...currentClassroom };
      updateClassroom(classroomUpdate).then(() => router.push(`/classroom/${obj.id}`));
    } else {
      const classroom = { ...currentClassroom };
      createClassroom(classroom)
        .then(() => router.push('/classrooms/'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Class</h2>

      {/* CLASS NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Class Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter Class Name" name="className" value={currentClassroom.className} onChange={handleChange} required />
      </FloatingLabel>

      {/* DESCRIPTION TEXTAREA  */}
      <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3">
        <Form.Control as="textarea" placeholder="Description" style={{ height: '100px' }} name="description" value={currentClassroom.description} onChange={handleChange} required />
      </FloatingLabel>

      {/* TEACHER SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Teacher">
        <Form.Select
          aria-label="Teacher"
          name="teacherId"
          onChange={handleChange}
          className="mb-3"
          value={currentClassroom.teacherId}
          required
        >
          <option value="">Select an Teacher</option>
          {teachers.map((teacher) => (
            <option key={teacher.id} value={teacher.id}>
              {teacher.id}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.id ? 'Update' : 'Create'} Class</Button>
    </Form>
  );
}

ClassForm.propTypes = {
  obj: PropTypes.shape({
    description: PropTypes.string,
    class_name: PropTypes.string,
    teacher_id: PropTypes.string,
    id: PropTypes.number,
  }),
};

ClassForm.defaultProps = {
  obj: initialState,
};

export default ClassForm;
