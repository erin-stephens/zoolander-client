import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { addStudentToClass } from '../../utils/data/studentData';
import { getClassrooms } from '../../utils/data/classroomData';

const initialState = {
  classroom_id: 0,
};

export default function AddToClass({ id, obj }) {
  const [classrooms, setClassrooms] = useState([]);
  const [currentClass, setCurrentClass] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    getClassrooms().then(setClassrooms);
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
    addStudentToClass(id, payload).then(() => router.push(`/classroom/${currentClass.classroomId}`));
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
          width="90%"
          style={{
            backgroundImage: 'url(https://img.freepik.com/free-photo/empty-blackboard_53876-16241.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '102.8%',
            marginLeft: '-30px',
            color: 'white',
          }}
        >
          <option value="">&nbsp;&nbsp;&nbsp;Select a Class</option>
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
      <div style={{ paddingTop: '5px', paddingBottom: '30px' }}>
        <Button type="submit">Add To Class</Button>
      </div>
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
