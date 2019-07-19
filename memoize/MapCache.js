const ListCache = require("./ListCache");
const Hash = require("./Hash");
const { isKeyable } = require("../utils");

function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == "string" ? "string" : "hash"]
    : data.map;
}

class MapCache {
  constructor(entries) {
    var index = -1;
    var length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  clear() {
    this.size = 0;
    this.__data__ = {
      hash: new Hash(),
      map: new (Map || ListCache)(),
      string: new Hash()
    };
  }

  delete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  get(key) {
    return getMapData(this, key).get(key);
  }

  has(key) {
    return getMapData(this, key).has(key);
  }

  set(key, value) {
    var data = getMapData(this, key),
      size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
}

module.exports = MapCache;
