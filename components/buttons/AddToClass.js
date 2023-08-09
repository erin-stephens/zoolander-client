import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { addStudentToClass } from '../../utils/data/studentData';
import { getClassrooms } from '../../utils/data/classroomData';

const initialState = {
  classroom_id: 0,
};

export default function AddToClass({ id, obj }) {
  const [classrooms, setClassrooms] = useState([]);
  const [currentClass, setCurrentClass] = useState(initialState);

  useEffect(() => {
    getClassrooms().then(setClassrooms);
    console.warn(classrooms);
    if (obj.id) {
      setCurrentClass({
        id: obj.id,
        classroomId: obj.classroom_id,
        studentId: obj.student_id,
      });
    }
  }, [obj, classrooms]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentClass((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      classroomId: Number(currentClass.classroomId),
      studentId: Number(id),
    };
    addStudentToClass(id, payload);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingSelect" label="Classroom">
        <Form.Select
          aria-label="Classroom"
          name="classroomId"
          className="mb-3"
          onChange={handleChange}
          value={currentClass.classroomId}
          required
        >
          <option value="">Select a Class</option>
          {
        classrooms.map((classroom) => (
          <option
            key={classroom.id}
            value={classroom.id}
          >
            {classroom.class_name}
          </option>
        ))
      }
        </Form.Select>
      </FloatingLabel>
      <Button type="submit">Add To Class</Button>
    </Form>
  );
}

AddToClass.propTypes = {
  id: PropTypes.number.isRequired,
  obj: PropTypes.shape({
    id: PropTypes.number,
    classroom_id: PropTypes.number,
    student_id: PropTypes.number,
  }),
};

AddToClass.defaultProps = {
  obj: initialState,
};
