import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

const getStudents = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/students`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteStudent = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/students/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve((data)))
    .catch(reject);
});

const getSingleStudent = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/students/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createStudent = (student) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/students`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateStudent = (student) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/students/${student.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const addStudentToClass = (studentId, payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/students/${studentId}/addtoclass`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getStudents,
  deleteStudent,
  getSingleStudent,
  createStudent,
  updateStudent,
  addStudentToClass,
};
