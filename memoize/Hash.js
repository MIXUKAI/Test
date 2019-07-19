const isUndefined = val => typeof val === 'undefined'
const nativeCreate = Object.create

const createObject = () => {
  return Object.create ? Object.create(null) : {};
};
class Hash {
  constructor(entries) {
    this.create();
    
    Array.isArray(entries) &&
      entries.forEach(entry => {
        this.set(entry[0], entry[1]);
      });
  }

  create() {
    this.clear();
  }

  clear() {
    this.data = createObject();
  }

  delete(key) {
    return this.has(key) && delete this.__data__[key];
  }

  get(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }

  has(key) {
    return nativeCreate
      ? this.data[key] !== undefined
      : hasOwnProperty.call(this.data, key);
  }

  set(key, value) {
    this.data[key] = nativeCreate && isUndefined(value) ? void 0 : value;
    return this;
  }
}
