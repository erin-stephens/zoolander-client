import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

const getAssignments = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/assignments.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteAssignment = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/assignments/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getSingleAssignment = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/assignments/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createAssignment = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/assignments.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateAssignment = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/assignments/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getAssignmentsByTeacher = (teacherId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/assignments.json?orderBy="teacherId"&equalTo="${teacherId}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getAssignments,
  deleteAssignment,
  getSingleAssignment,
  createAssignment,
  updateAssignment,
  getAssignmentsByTeacher,
};
