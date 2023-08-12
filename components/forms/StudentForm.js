import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { createStudent, updateStudent } from '../../utils/data/studentData';

const initialState = {
  student_full_name: '',
  image_url: '',
};

function StudentForm({ obj }) {
  const [currentStudent, setCurrentStudent] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    if (obj.id) {
      setCurrentStudent({
        id: obj.id,
        studentFullName: obj.student_full_name,
        imageUrl: obj.image_url,
        age: obj.age,
      });
    }
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
    <div className="mt-5">
      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingInput1" label="&nbsp;&nbsp;&nbsp;Student Name" className="mb-0">
          <Form.Control
            type="text"
            placeholder="Enter Student Full Name"
            name="studentFullName"
            value={currentStudent.studentFullName}
            onChange={handleChange}
            required
            className="custom-input"
            style={{ color: 'white', paddingLeft: '30px' }}
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput2" label="&nbsp;&nbsp;&nbsp;Student Age" className="mb-0">
          <Form.Control
            type="number"
            step="1"
            className="custom-textarea-2"
            placeholder="Enter Student Age"
            name="age"
            value={currentStudent.age}
            onChange={handleChange}
            required
            style={{ color: 'white', paddingLeft: '30px' }}
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput3" label="&nbsp;&nbsp;&nbsp;Student Image" className="mb-0">
          <Form.Control
            type="url"
            placeholder="Add Student image URL"
            name="imageUrl"
            value={currentStudent.imageUrl}
            onChange={handleChange}
            required
            className="custom-textarea"
            style={{ color: 'white', paddingLeft: '30px' }}
          />
        </FloatingLabel>

        <Button type="submit">{obj.id ? 'Update' : 'Create'} Student</Button>
      </Form>
    </div>
  );
}

StudentForm.propTypes = {
  obj: PropTypes.shape({
    student_full_name: PropTypes.string,
    age: PropTypes.number,
    image_url: PropTypes.string,
    id: PropTypes.number,
  }),
};

StudentForm.defaultProps = {
  obj: initialState,
};

export default StudentForm;
