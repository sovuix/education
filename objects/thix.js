// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     console.log(this.name ); // приведёт к ошибке
//   }

// };


// let admin = user;
// user = null; // перезапишем переменную для наглядности, теперь она не хранит ссылку на объект.


// admin.sayHi(); // TypeError: Cannot read property 'name' of null


////////////////////////////////////////////
// function sayHi() {
//   console.log(this.name);
// }

// const user = {
//   name: 'Alex',
//   surname: 'Bolduin'
// }


// user.f = sayHi;

// console.log(user);
// user.f()

////////////////////

const calculator = {
  sum(){
    return this.a + this.b
  },

  read(){
    this.a = +prompt('a?'),
    this.b = +prompt('b?')
  }
}


calculator.read();
alert(calculator.sum());