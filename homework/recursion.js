const data = {
  name: 'folder',
  children: [
    { name: 'file1.txt' },
    { name: 'file2.txt' },
    {
      name: 'images',
      children: [
        { name: 'image.png' },
        {
          name: 'vacation',
          children: [
            { name: 'crocodile.png' },
            { name: 'penguin.png' }
          ]
        }
      ]
    },
    { name: 'shopping-list.pdf' }
  ]
}

function printDirectoryStructure(data) {
  let result = [];
  let level = 0;
  const indent = ' '.repeat(level * 2);
  for (const key in data) {
    if (typeof data[key] === 'object') {
      result.push(printDirectoryStructure(data[key]));
      level ++;
    } else {
      result.push(`${indent}${data[key]}`);
    }
}
const newRes  = result.join('\n');
return newRes;
}




// console.log(printDirectoryStructure(data));
// console.log(printDirectoryStructure(data));
const files = printDirectoryStructure(data);
console.log(files);


