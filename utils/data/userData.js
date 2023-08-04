/* eslint-disable implicit-arrow-linebreak */
import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

const getUserData = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/teachers.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

export default getUserData;
