import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import getUserData from '../../utils/data/userData';
import { createAssignment, updateAssignment } from '../../utils/data/assignmentData';

const initialState = {
  title: '',
  image_url: '',
  content: '',
};

function AssignmentForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    getUserData().then();

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
      updateAssignment(formInput).then(() => router.push(`/assignment/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput };
      createAssignment(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateAssignment(patchPayload).then(() => {
          router.push('/assignments');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Assignment</h2>

      <FloatingLabel controlId="floatingInput1" label="Assignment Title" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter an Assignment"
          name="title"
          value={formInput.title}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Assignment Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image_url"
          value={formInput.image_url}
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
          value={formInput.content}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Assignment</Button>
    </Form>
  );
}

AssignmentForm.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    image_url: PropTypes.string,
    content: PropTypes.string,
    firebaseKey: PropTypes.string,
    teacherId: PropTypes.string,
  }),
};

AssignmentForm.defaultProps = {
  obj: initialState,
};

export default AssignmentForm;
