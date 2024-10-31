let countKeysInObj = function (obj, key) {
  function iter(obj, count = 0) {
    for (const prop in obj) {
      if (prop === key) {
        count += 1;
      }
      if (typeof obj[prop] === 'object') {
        count = iter(obj[prop], count);
      }
    }
    return count;
  }

  return iter(obj);
};
console.log(countKeysInObj(obj, 'e'));
