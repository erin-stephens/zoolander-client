import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { FloatingLabel } from 'react-bootstrap';
import { Button, Form } from 'bootstrap';
import { createStudent, updateStudent } from '../../utils/data/studentData';

const initialState = {
  student_full_name: '',
  image_url: '',
  age: '',
};

function StudentForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj]);

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
      updateStudent(formInput).then(() => router.push(`/student/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput };
      createStudent(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateStudent(patchPayload).then(() => {
          router.push('/students');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Student</h2>

      <FloatingLabel controlId="floatingInput1" label="Student Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Student Full Name"
          name="student_full_name"
          value={formInput.student_full_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Student Age" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Student Age"
          name="age"
          value={formInput.age}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Student Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Add Student image URL"
          name="image"
          value={formInput.image_url}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Book</Button>
    </Form>
  );
}

StudentForm.propTypes = {
  obj: PropTypes.shape({
    student_full_name: PropTypes.string,
    age: PropTypes.string,
    image_url: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

StudentForm.defaultProps = {
  obj: initialState,
};

export default StudentForm;
