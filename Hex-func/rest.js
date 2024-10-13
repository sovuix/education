// const sum = (a, b) => a + b;
// Упаковка аргументов
const func = (...params) => {
  console.log(params);
};

func(1, 43, 44);

const sum = (...numbers) => {
  let result = 0;
  for (const num of numbers) {
    result += num;
  }
  return result;
};

console.log(sum(1, 3, 55, 32));


const someObj = {
  name: 'Igos',
  age: '22',
  children :{
    son: 'Mike',
    daughter: 'Lucy'
  },
  isMarried: true,
}

const {name, age, children} = someObj;
console.log(children);
console.log(name);


