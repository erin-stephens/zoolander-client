import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { createAssignment, updateAssignment } from '../../utils/data/assignmentData';
import { getClassrooms } from '../../utils/data/classroomData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  title: '',
  content: '',
  teacherId: '',
  classId: 0,
};

function AssignmentForm({ obj }) {
  const [currentAssignment, setCurrentAssignment] = useState(initialState);
  const [classrooms, setClassrooms] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getClassrooms().then(setClassrooms);
    if (obj.id) {
      setCurrentAssignment({
        id: obj.id,
        title: obj.title,
        content: obj.content,
        teacherId: user.uid,
        classId: obj.class_id?.id,
      });
    }
  }, [obj, user]);

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
        teacherId: user.uid,
        classId: Number(currentAssignment.classId),
      };
      updateAssignment(assignmentUpdate).then(() => router.push('/assignments'));
    } else {
      const assignment = {
        id: obj.id,
        title: currentAssignment.title,
        content: currentAssignment.content,
        teacherId: user.uid,
        classId: Number(currentAssignment.classId),
      };
      createAssignment(assignment).then(() => router.push('/assignments'));
    }
  };

  return (
    <div className="mt-5">
      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingInput1" label="&nbsp;&nbsp;&nbsp;Assignment Title" className="mb-0">
          <Form.Control
            type="text"
            placeholder="Enter an Assignment"
            name="title"
            value={currentAssignment.title}
            onChange={handleChange}
            required
            className="custom-input"
            style={{ color: 'white', paddingLeft: '30px' }}
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingTextarea" label="&nbsp;&nbsp;&nbsp;Content" className="mb-0">
          <Form.Control
            as="textarea"
            className="custom-textarea-2"
            placeholder="content"
            style={{ height: '100px', color: 'white', paddingLeft: '30px' }}
            name="content"
            value={currentAssignment.content}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingSelect" label="Classroom">
          <Form.Select
            aria-label="Classroom"
            name="classId"
            onChange={handleChange}
            className="mb-0 custom-textarea"
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
    </div>
  );
}

AssignmentForm.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.number,
    teacher_id: PropTypes.shape({
      id: PropTypes.number,
    }),
    class_id: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};

AssignmentForm.defaultProps = {
  obj: initialState,
};

export default AssignmentForm;
