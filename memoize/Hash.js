const { isUndefined } = require("../utils");

class Hash {
  constructor(entries) {
    this.data = Object.create(null);

    Array.isArray(entries) &&
      entries.forEach(entry => {
        this.set(entry[0], entry[1]);
      });
  }

  clear() {
    this.data = Object.create(null);
  }

  delete(key) {
    return this.has(key) && delete this.data[key];
  }

  get(key) {
    var result = this.data[key];
    return isUndefined(result) ? undefined : result;
  }

  has(key) {
    return !isUndefined(this.dara[key]);
  }

  set(key, value) {
    this.data[key] = isUndefined(value) ? void 0 : value;
    return this;
  }
}

module.exports = Hash;
