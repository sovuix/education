import _ from 'lodash';
import getKeys from './objectKeys.js';

function compareKeys(obj1, obj2, path = '') {
  const result = [];
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  for (const key of [...new Set([...keys1, ...keys2])]) {
    // Используем Set для удаления дубликатов
    const currentPath = path ? `${path}.${key}` : key;
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (typeof val1 === 'object' && typeof val2 === 'object') {
      result.push(...compareKeys(val1, val2, currentPath)); // Рекурсивный вызов
    } else if (val1 !== val2) {
      result.push(`- ${currentPath}: ${JSON.stringify(val1)}`);
      result.push(`+ ${currentPath}: ${JSON.stringify(val2)}`);
    }
  }

  return result.length > 0 ? `{\n  ${result.join('\n  ')}\n}` : '{}'; //Возвращаем пустой объект если нет разницы.
}

export default compareKeys;
