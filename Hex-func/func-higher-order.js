const users = [
  { name: 'Igor', age: 19 },
  { name: 'Danil', age: 1 },
  { name: 'Vovan', age: 4 },
  { name: 'Matvey', age: 16 },
];

// const compare = (a, b) => {
//   if (a.age === b.age) {
//     return 0
//   }

//   return a.age > b.age ? 1 : -1; 
// }

function compare(a, b) {
  return a.age - b.age;
}

const compare2 = (a, b) => {
  if (a === b) {
    return 0
  }

  return a > b ? 1 : -1;
}

users.sort(compare)

console.log(users);



const num = [1, 3, 4, 22, -5];
console.log(num.sort(compare2));

/////////////

const users3 = [
  { name: 'Tirion', birthday: 'Nov 19, 1988' },
  { name: 'Sam', birthday: 'Nov 22, 1999' },
  { name: 'Rob', birthday: 'Jan 11, 1975' },
  { name: 'Sansa', birthday: 'Mar 20, 2001' },
  { name: 'Tisha', birthday: 'Feb 27, 1992' },
  { name: 'Chris', birthday: 'Dec 25, 1995' },
];

function takeOldest(users, count = 1) {
  const sorted = users.sort((a, b) => Date.parse(a.birthday) - Date.parse(b.birthday))

  return sorted.slice(0, count);
}

console.log(takeOldest(users3));
