// function pow(x,n) {
//   let result = 1;
//
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
//
// console.log(pow(2, 4))

// function iter(x,n) {
//   if (n === 1) {
//     return x;
//   }
//
//   return x * iter(x, n - 1);
// }
//
// console.log(iter(2, 4))

// import {result} from "lodash";

let students = {
  js: [{
    name: 'John',
    progress: 100,
  },{
    name: 'Ivan',
    progress: 60,
  }],

  html: {
    basic: [{
      name: 'Peter',
      progress: 20,
    }, {
      name: 'Anna',
      progress: 30,
    }],

    pro: [{
      name: 'Sam',
      progress: 10,
    }]
  }
};

const iter = (obj) => {
  const objectVal = Object.values(obj);
  const result = [];
  for (let value of objectVal) {
    if (typeof objectVal[value] !== 'object') {
      value.map((val) => {result.push(val.progress)});
    } else {
      iter(value);
    }
  }
  return result;
}

console.log(iter(students));

