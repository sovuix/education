import compareKeys from './compareKeys.js';
import getFileData from './getFileData.js';

const test = {
  name: 'ALex',
  age: 17,
};

const fileJson1 = './file1.json';
const fileJson2 = './file2.json';
const fileJson3 = './file3.json';

const data1 = getFileData(fileJson1);
const data2 = getFileData(fileJson2);
const data3 = getFileData(fileJson3);

console.log(data1);

console.log(compareKeys(data1, data3));
