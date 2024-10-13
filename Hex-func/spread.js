const numbers = [1, 22, 32, 92];

const sum = (...numbers) => {
  let result = 0;
  for(const num of numbers ){
    result += num;
    
  }
  
  return result;
}

console.log(sum(...numbers));
