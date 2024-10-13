const person1 = {
  name: 'obj2',
  height: 175,
  child: {
    height: 70,
  }
};

const person2 = {
  age: 35,
  child: {
    age: 1,
  }
};

const person3 = {
  eye: 'blue',
  child: {
    hair: 'red'
  },
};

const person4 = {
  hair: 'brown',
  child: {
    name: 'Варя'
  }
};

const person5 = {
  skin: 'white',
  child: {
    name: 'new'
  }
};

const mergedPerson = (...persons) => {
  // const result = Object.assign({
  //   child: Object.assign({}, ...persons.map(p => p.child)),
  // }, ...persons);
  // const result = {}
  // for (const p of persons) {
  //   const { child } = p; 
  //   console.log(child)
  // }

  let result = {}
  for (const p of persons) {
    result = {
      ...result, ...p,
      child: { ...result.child, ...p.child },
      bankAccounts: {
        ...result.bankAccounts, ...p.bankAccounts
      }
    }
    // const {name, eye, ...params} = p;

    // const res2 = Object.assign({}, result, p);
    // Object.assign(res2.child, result.child, p.child);
    // Object.assign(res2.child, result.bankAccounts, p.bankAccounts);

    // for (const [key, value] of Object.entries(p)) {
    //   res[key] = value;
    //   if (key === 'child') {
    //       continue;
    //   }
    //   break;
    // }
  }

  // const result = {
  //   ...person1,
  //   ...person2,
  //   ...person3,
  //   ...person4,
  //   ...person5,
  //   child: {
  //     ...person1.child,
  //     ...person2.child,
  //     ...person3.child,
  //     ...person4.child,
  //     ...person5.child,
  //   }
  // };

  
  return result;
};

console.log(mergedPerson(person1, person2, person3, person4, person5));
