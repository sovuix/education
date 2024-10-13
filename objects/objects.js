// const someUsers = {
//   name: 'Igor',
//   age: 18,
// }

// // let user = new Object();
// console.log(someUsers);

// someUsers['isMarried']= true;
// console.log(someUsers);
// someUsers['likes sex'] = true;
// console.log(someUsers);

// let justTest = 'dick';

// someUsers[justTest] = 23;
// console.log(someUsers);

// let user = {
//   name: "John",
//   age: 30
// };

// // let key = prompt("Что вы хотите узнать о пользователе?", "name");

// // доступ к свойству через переменную
// // alert( user[key] ); // John (если ввели "name")

// const test = 'apple'

// let hren = {
//   [test] : 7,
// }

// console.log(hren);

// function makeUser(name, age) {
//   return {
//     name, age
//   }
// }

// const user1 = makeUser('Slava', 38);

// console.log(makeUser('slava', 38));

// if (user1.isMarried === undefined) user1.isMarried = true;

// console.log(user1);

// console.log('name' in user1);

// for (let keys in user1) {
//   console.log(keys);
// }

// let codes = {
//   "+49": "Германия",
//   "+41": "Швейцария",
//   "+44": "Великобритания",
//   // ..,
//   "+1": "США"
// };

// for (const code in codes) {
//   console.log(+code);
// }

// console.log(Math.trunc(Number("+98")));

// ------------------------- 1 --------------------

// const user = new Object();
// user['name'] = 'John';
// user['surname'] = 'Pete';
// user.name = 'Pete';
// delete user.name;

// console.log(user);

// -------------------------2-------------------

// let shedule = {};

// const isEmpty = (obj) => {
//   for (const key in obj) {
//       return false;
//     }
  
//   return true;
// }

// shedule['name'] = 'Igos';

// console.log(shedule);


//   console.log(isEmpty(shedule));

// --------------------------3--------------------

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let huilo = {};

// function sumSalary(obj) {
//   let sum = 0;
//   if (!obj) return 0;

//   for (const prop in obj) {
//     sum += obj[prop];
//   }

//   return sum;
// }

// console.log(sumSalary(huilo));

// --------------------4----------------

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let val in obj) {
    if (typeof obj[val] === 'number') {
      obj[val] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);

// multiplyNumeric(menu);

// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };




