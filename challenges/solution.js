const genDiff1 =
{
  one: 'eon',
  two: 'two',
  four: true
};

const gendiff2 =
{
  two: 'own',
  zero: 4,
  four: true,
}

function solution(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  const result = {};

  for (const key of obj1Keys) {
    if (!(key in obj2)) {
      result[key] = 'deleted'
    }
    else if (obj1[key] !== obj2[key]) {
      result[key] = 'changed'
    }
    else if (obj1[key] === obj2[key]) {
      result[key] = 'unchanged'
    }

  }
  for (const key of obj2Keys) {
    if (!(key in obj1)) {
      result[key] = 'added';
    }
  }

  return result
}

console.log(solution(genDiff1, gendiff2));
;

