const users = [
  { name: 'Igor', age: 19 },
  { name: 'Danil', age: 1 },
  { name: 'Vovan', age: 4 },
  { name: 'Matvey', age: 16 },
];

for (const {name} of users) {
  console.log(name);
}

const names = users.map((user) => user.name)
console.log(names);

/////////////

const myMap = (collection, callback) => {
  const result = [];
  for (const item of collection) {
    // Вызов переданного колбека на каждом элементе коллекции
    const newItem = callback(item);
    // Возврат из колбека добавляется в результирующий массив
    result.push(newItem);
  }

  return result;
};

const numbers = [5, 2, 3];
const newNumbers = myMap(numbers, (number) => number ** 2);
console.log(newNumbers); // => [25, 4, 9]

/////////////

const users4 = [
  {
    name: 'Tirion',
    children: [
      { name: 'Mira', birthday: '1983-03-23' },
    ],
  },
  { name: 'Bronn', children: [] },
  {
    name: 'Sam',
    children: [
      { name: 'Aria', birthday: '2012-11-03' },
      { name: 'Keit', birthday: '1933-05-14' },
    ],
  },
  {
    name: 'Rob',
    children: [
      { name: 'Tisha', birthday: '2012-11-03' },
    ],
  },
];

// function getChildren(users) {
//  const children = users.map((user) => user.children)
//  return children.flat();
// }

function getChildren(users) {
  const children = users.map(({children}) => children)
  return children.flat();
 }

console.log(getChildren(users4));


