import _ from 'lodash';

const  user = {
  name: 'dsds',
  age: 23,
}

let user2 = Object.assign({},user);
user2.name = 'Pole'
console.log(user2);
console.log(user);



const user3 = _.cloneDeep(user);

user3.isMarries = true;
console.log(user3);
console.log(user);



const sometest = {
  name: 'Slava',
  music: {
    genre: 'rock'
  }
}

// const sometest2 = Object.assign({}, sometest);
const sometest2 = _.cloneDeep(sometest);


console.log(sometest);
console.log(sometest2);

sometest.music.genre = 'folk';

console.log(sometest);
console.log(sometest2);

