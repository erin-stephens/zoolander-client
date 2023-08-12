/* eslint-disable implicit-arrow-linebreak */
import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

// CREATE CLASS
const createClassroom = (classroom) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/classrooms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(classroom),
    })
      .then((data) => resolve(data))
      .catch(reject);
  });
// GET CLASSES
const getClassrooms = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/classrooms`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

// GET SINGLE CLASS
const getSingleClassroom = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/classrooms/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// DELETE SINGLE CLASS
const deleteSingleClassroom = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/classrooms/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });

// UPDATE CLASS
const updateClassroom = (classroom) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/classrooms/${classroom.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(classroom),
    })
      .then(resolve)
      .catch(reject);
  });

const getClassesStudents = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/classrooms/${id}/get_students`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getAssignmentsByClassId = (classId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/assignments?classId=${classId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// eslint-disable-next-line object-curly-newline
export { createClassroom, getSingleClassroom, deleteSingleClassroom, updateClassroom, getClassrooms, getClassesStudents, getAssignmentsByClassId };
