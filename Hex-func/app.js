const createPrint = () => {
  const name = 'KIng';
  return () => {
    console.log(name);
  }
}

const test = createPrint();
test()

function printCount(){
  let count = 0;
  
  function addCount (){
    count ++;
    return count;
  }
  return addCount;

}

const addCount = printCount();
console.log(addCount());
console.log(addCount());
console.log(addCount());
console.log(addCount());
console.log(addCount());
console.log(addCount());
console.log(addCount());
console.log(addCount());

