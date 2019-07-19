const { findIndex } = require("../utils");

class ListCache {
  constructor(entries) {
    this._data = [];

    Array.isArray(entries) &&
      entries.forEach(entry => {
        this.set(entry[0], entry[1]);
      });
  }

  clear() {
    this._data = [];
  }

  findIndex(key) {
    return findIndex(pair => {
      return pair[0] === key;
    }, this._data);
  }

  delete(key) {
    const index = this.findIndex(key);

    if (index < 0) {
      return false;
    }
    this._data = [
      ...this._data.slice(0, index),
      ...this._data.slice(index + 1)
    ];
    return true;
  }

  get(key) {
    const index = this.findIndex(key);
    return index < 0 ? void 0 : this._data[index][1];
  }

  has(key) {
    return this.findIndex(key) > -1;
  }

  set(key, value) {
    const index = this.findIndex(key);

    if (index < 0) {
      this._data.push([key, value]);
    } else {
      this._data[index][1] = value;
    }
    return this;
  }
}

module.exports = ListCache;
