import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

const getStudents = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/students.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleStudents = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/students/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createStudent = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/students.json`, {
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

const updateStudents = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/students/${payload.firebaseKey}.json`, {
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

export {
  getStudents,
  getSingleStudents,
  createStudent,
  updateStudents,
};
