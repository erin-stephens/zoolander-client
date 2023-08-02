/* eslint-disable implicit-arrow-linebreak */
import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

const getUserData = (uid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/teachers.json?orderBy="uid"&equalTo="${uid}"`, {
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
