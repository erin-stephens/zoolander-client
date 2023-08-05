import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

const getAssignments = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/assignments`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const deleteAssignment = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/assignments/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve((data)))
    .catch(reject);
});

const getSingleAssignment = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/assignments/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createAssignment = (assignment) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/assignments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(assignment),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateAssignment = (assignment) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/assignments/${assignment.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(assignment),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const getAssignmentsByTeacher = (teacherId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/assignments?teacherId="${teacherId}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
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
