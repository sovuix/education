// let arr = ["Ilya", "Kantor"];

// // деструктурирующее присваивание
// // записывает firstName = arr[0]
// // и surname = arr[1]
// let [firstName, surname] = arr;

// console.log(firstName); // Ilya
// console.log(surname);  // Kantor

// console.log('Привет, мэн'.split(','))
// ///

// let [firstName1, surname1] = "Ilya Kantor".split(' ');
// console.log(firstName1);
// console.log(surname1);

// ///

// // let [firstName3, surname3] = arr;
// let firstName3 = arr[0];
// let surname3 = arr[1];

// //

// // второй элемент не нужен
// let [firstName4, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// console.log( title ); // Consul

// const users = {
//   name: 'Igos',
//   age: 22,
//   hair: 'black',
//   skin: 'white',
// }

// for (const [key, value] of Object.entries(users)) {
//   console.log(`key is ${key}`);
// }

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  if(salaries.length === 0) return null;

  for(const [key, value] of Object.entries(salaries)) {
    return key;
    
  }
  return entries
}

console.log(topSalary(salaries));


