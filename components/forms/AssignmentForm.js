import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import getUserData from '../../utils/data/userData';
import { createAssignment, updateAssignment } from '../../utils/data/assignmentData';
import getClassrooms from '../../utils/data/classroomData';

const initialState = {
  title: '',
  imageUrl: '',
  content: '',
  teacherId: 0,
  classId: 0,
};

function AssignmentForm({ obj }) {
  const [currentAssignment, setCurrentAssignment] = useState(initialState);
  const [teachers, setTeachers] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getUserData().then(setTeachers);
    getClassrooms().then(setClassrooms);
    if (obj.id) {
      setCurrentAssignment({
        id: obj.id,
        title: obj.title,
        content: obj.content,
        teacherId: obj.teacherId?.id,
        classId: obj.classId?.id,
      });
    }
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentAssignment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      const assignmentUpdate = {
        id: obj.id,
        title: currentAssignment.title,
        content: currentAssignment.content,
        teacherId: currentAssignment.teacherId,
        classId: currentAssignment.classId,
      };
      updateAssignment(assignmentUpdate).then(() => router.push('/assignments'));
    } else {
      const assignment = {
        id: obj.id,
        title: currentAssignment.title,
        content: currentAssignment.content,
        teacherId: currentAssignment.teacherId,
        classId: currentAssignment.classId,
      };
      createAssignment(assignment).then(() => router.push('/assignments'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Assignment</h2>

      <FloatingLabel controlId="floatingInput1" label="Assignment Title" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter an Assignment"
          name="title"
          value={currentAssignment.title}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Assignment Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image_url"
          value={currentAssignment.image_url}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea" label="Content" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="content"
          style={{ height: '100px' }}
          name="content"
          value={currentAssignment.content}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Teacher">
        <Form.Select
          aria-label="Teacher"
          name="teacherId"
          onChange={handleChange}
          className="mb-3"
          value={currentAssignment.teacherId}
          required
        >
          <option value="">Select a Teacher</option>
          {
            teachers.map((teacher) => (
              <option
                key={teacher.id}
                value={teacher.id}
              >
                {teacher.full_name}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Classroom">
        <Form.Select
          aria-label="Classroom"
          name="classId"
          onChange={handleChange}
          className="mb-3"
          value={currentAssignment.classId}
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
      <Button type="submit">{obj.id ? 'Update' : 'Create'} Assignment</Button>
    </Form>
  );
}

AssignmentForm.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    image_url: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.string,
    teacherId: PropTypes.number,
    classId: PropTypes.number,
  }),
};

AssignmentForm.defaultProps = {
  obj: initialState,
};

export default AssignmentForm;
