/* eslint-disable implicit-arrow-linebreak */
import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

// CREATE CLASS
const createClass = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/classes.json`, {
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
// GET CLASSES
const getClasses = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/classes.json`, {
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
const getSingleClass = (firebaseKey) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/classes/${firebaseKey}.json`, {
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
const deleteSingleClass = (firebaseKey) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/classes/${firebaseKey}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// UPDATE CLASS
const updateClass = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/classes/${payload.firebaseKey}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(resolve)
      .catch(reject);
  });

// eslint-disable-next-line object-curly-newline
export { createClass, getSingleClass, deleteSingleClass, updateClass, getClasses };
