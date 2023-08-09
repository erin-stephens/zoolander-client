import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { addStudentToClass } from '../../utils/data/studentData';
import { getClassrooms } from '../../utils/data/classroomData';

const initialState = {
  classId: 0,
};

export default function AddToClass({ id }) {
  const [classrooms, setClassrooms] = useState([]);
  const [getClassId, setGetClassId] = useState({});
  const [currentClass, setCurrentClass] = useState(initialState);

  useEffect(() => {
    getClassrooms().then((data) => {
      setClassrooms(data);
      setGetClassId(data.id);
      console.warn(data);
    });
  }, []);

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
      classId: Number(getClassId),
      studentId: Number(id),
    };
    addStudentToClass(id, payload);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingSelect" label="Classroom">
        <Form.Select
          aria-label="Classroom"
          name="classId"
          className="mb-3"
          onChange={handleChange}
          value={currentClass.id}
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
};
