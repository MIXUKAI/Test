const isUndefined = val => typeof val === "undefined";

const isSymbol = val = typeof val === 'symbol';

const findIndex = (func, array) => {
  if (Array.prototype.findIndex) {
    return array.findIndex(func);
  }
  let index = array.length - 1;
  while (index >= 0) {
    if (func(array[index], index, array)) {
      return index;
    }
    index--;
  }
  return index;
};

function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = {
  isUndefined,
  isSymbol,
  findIndex,
  isKeyable,
};
