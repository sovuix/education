const file1 = {
  "common": {
    "setting1": "Value 1",
    "setting2": 200,
    "setting3": true,
    "setting6": {
      "key": "value",
      "doge": {
        "wow": ""
      }
    }
  },
  "group1": {
    "baz": "bas",
    "foo": "bar",
    "nest": {
      "key": "value"
    }
  },
  "group2": {
    "abc": 12345,
    "deep": {
      "id": 45
    }
  }
}

function trees(object) {
  const result = [];
  function iter(obj) {
    for (const prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        result.push(prop)
      }
      if(typeof obj[prop] === 'object'){
        iter(obj[prop]);
      }
    }
  } 
  iter(object)
  return result;
}

console.log(trees(file1));




