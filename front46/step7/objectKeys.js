// import { keys } from 'lodash';
import getFileData from './getFileData.js';

const file = './file3.json';

const myObj = getFileData(file);

function getKeys(object) {
  const result = [];

  function iter(object) {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        result.push(key);
      }
      if (typeof object[key] === 'object') {
        iter(object[key]);
      }
    }
  }
  iter(object);
  return result;
}

export default getKeys;
