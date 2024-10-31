const file1 = {
  common: {
    setting1: 'Value 1',
    setting2: 200,
    setting3: true,
    setting6: {
      key: 'value',
      doge: {
        wow: '',
      },
    },
  },
  group1: {
    baz: 'bas',
    foo: 'bar',
    nest: {
      key: 'value',
    },
  },
  group2: {
    abc: 12345,
    deep: {
      id: 45,
    },
  },
};

const file2 = {
  common: {
    follow: false,
    setting1: 'Value 1',
    setting3: null,
    setting4: 'blah blah',
    setting5: {
      key5: 'value5',
    },
    setting6: {
      key: 'value',
      ops: 'vops',
      doge: {
        wow: 'so much',
      },
    },
  },
  group1: {
    foo: 'bar',
    baz: 'bars',
    nest: 'str',
  },
  group3: {
    deep: {
      id: {
        number: 45,
      },
    },
    fee: 100500,
  },
};

function printDirectoryStructure(data) {
  function iter(data, level) {
    let result = [];
    const indent = ' '.repeat(level * 2);
    for (const key in data) {
      // result.push(`${indent}${key}`)
      if (typeof data[key] === 'object') {
        result.push(iter(data[key], level + 1));
      } else {
        result.push(`${indent}${key}:${data[key]}`);
      }
    }
    return result.join('\n');
  }
  return iter(data, 0);
}

function trees(obj) {
  const result = [];
  function iter(obj, level) {
    const indent = ' '.repeat(level * 2);

    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        const value =
          typeof obj[prop] === 'object' && obj[prop] !== null
            ? JSON.stringify(obj[prop], null, 2)
            : obj[prop];
        result.push(`${indent}${prop}: ${value}`);
      }
      if (typeof obj[prop] === 'object') {
        iter(obj[prop], level + 1);
      }
    }
  }
  iter(obj, 0);
  return result.join('\n');
}

console.log(trees(file1));
// console.log(printDirectoryStructure(file1));
