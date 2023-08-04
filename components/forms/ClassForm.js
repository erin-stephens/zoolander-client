import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import getUserData from '../../utils/data/userData';
import { createClass, updateClass } from '../../utils/data/classData';

const initialState = {
  description: '',
  class_name: '',
};

function ClassForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [teachers, setTeachers] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getUserData().then(setTeachers);

    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateClass(formInput).then(() => router.push(`/class/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput };
      createClass(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateClass(patchPayload).then(() => {
          router.push('/classes');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Class</h2>

      {/* CLASS NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Class Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter Class Name" name="class_name" value={formInput.title} onChange={handleChange} required />
      </FloatingLabel>

      {/* DESCRIPTION TEXTAREA  */}
      <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3">
        <Form.Control as="textarea" placeholder="Description" style={{ height: '100px' }} name="description" value={formInput.description} onChange={handleChange} required />
      </FloatingLabel>

      {/* TEACHER SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Teacher">
        <Form.Select
          aria-label="Teacher"
          name="teacherId"
          onChange={handleChange}
          className="mb-3"
          value={obj.teacherId} // FIXME: modify code to remove error
          required
        >
          <option value="">Select an Teacher</option>
          {teachers.map((teacher) => (
            <option key={teacher.firebaseKey} value={teacher.firebaseKey}>
              {teacher.full_name}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Class</Button>
    </Form>
  );
}

ClassForm.propTypes = {
  obj: PropTypes.shape({
    description: PropTypes.string,
    class_name: PropTypes.string,
    teacherId: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

ClassForm.defaultProps = {
  obj: initialState,
};

export default ClassForm;
