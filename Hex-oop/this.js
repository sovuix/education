const company = {
  employees : [],
}

company.addEmployee = function addEmployee(user) {
  this.employees.push(user);
};

console.log(company);

const user = {
  name: 'Ivan',
  surname: 'Pukov',
}

company.addEmployee(user);
console.log(company.employees);


// console.log(company);

const sayHi = () => 'Hi';
console.log(sayHi.call());
