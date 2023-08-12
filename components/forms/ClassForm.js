import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createClassroom, updateClassroom } from '../../utils/data/classroomData';

const initialState = {
  description: '',
  class_name: '',
  teacher_id: '',
};

function ClassForm({ obj }) {
  const [currentClassroom, setCurrentClassroom] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.id) {
      setCurrentClassroom({
        id: obj.id,
        teacherId: user.uid,
        description: obj.description,
        className: obj.class_name,
      });
    }
  }, [obj, user]);

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
      const classroomUpdate = {
        id: currentClassroom.id,
        teacherId: user.uid,
        description: currentClassroom.description,
        className: currentClassroom.className,
      };

      updateClassroom(classroomUpdate).then(() => router.push(`/classroom/${obj.id}`));
    } else {
      const classroom = {
        id: currentClassroom.id,
        teacherId: user.uid,
        description: currentClassroom.description,
        className: currentClassroom.className,
      };
      createClassroom(classroom).then(() => router.push('/classrooms/'));
    }
  };

  return (
    <div className="mt-5">
      <Form onSubmit={handleSubmit}>

        {/* Combined CLASS NAME INPUT and DESCRIPTION TEXTAREA */}
        <div className="d-flex flex-column">
          <FloatingLabel controlId="floatingInput1" label="&nbsp;&nbsp;&nbsp;Class Name" className="mb-0">
            <Form.Control
              type="text"
              placeholder="Enter Class Name"
              name="className"
              value={currentClassroom.className}
              onChange={handleChange}
              required
              className="custom-input"
              style={{ color: 'white', paddingLeft: '30px' }}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea" label="&nbsp;&nbsp;&nbsp;Description" className="mb-3">
            <Form.Control
              as="textarea"
              className="custom-textarea"
              placeholder="Description"
              style={{ height: '100px', color: 'white', paddingLeft: '30px' }}
              name="description"
              value={currentClassroom.description}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
        </div>

        {/* SUBMIT BUTTON  */}
        <Button type="submit">{obj.id ? 'Update' : 'Create'} Class</Button>
      </Form>
    </div>
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
