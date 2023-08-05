import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { createStudent, updateStudent } from '../../utils/data/studentData';

const initialState = {
  student_full_name: '',
  image_url: '',
  age: '',
};

function StudentForm({ obj }) {
  const [currentStudent, setCurrentStudent] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    if (obj.id) setCurrentStudent(obj);
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      const studentUpdate = { ...currentStudent };
      updateStudent(studentUpdate).then(() => router.push(`/student/${obj.id}`));
    } else {
      const student = { ...currentStudent };
      createStudent(student)
        .then(() => router.push('/students/'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Student</h2>

      <FloatingLabel controlId="floatingInput1" label="Student Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Student Full Name"
          name="studentFullName"
          value={currentStudent.studentFullName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Student Age" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Student Age"
          name="age"
          value={currentStudent.age}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Student Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Add Student image URL"
          name="imageUrl"
          value={currentStudent.imageUrl}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Button type="submit">{obj.id ? 'Update' : 'Create'} Student</Button>
    </Form>
  );
}

StudentForm.propTypes = {
  obj: PropTypes.shape({
    student_full_name: PropTypes.string,
    age: PropTypes.string,
    image_url: PropTypes.string,
    id: PropTypes.number,
  }),
};

StudentForm.defaultProps = {
  obj: initialState,
};

export default StudentForm;
