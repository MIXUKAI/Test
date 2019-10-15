const { uniqBy } = require("lodash");

const dataItem1 = {
  id: 5,
  area: "native",
  real_score: 10,
  target_id: "1",
  target_type: "OrderGame",
  kind: "produce"
};

const dataItem2 = {
  id: 5,
  area: "native",
  real_score: 10,
  target_id: "12",
  target_type: "OrderGame",
  kind: "produce"
};

const dataItem3 = {
  id: 5,
  area: "native",
  real_score: 10,
  target_id: "13",
  target_type: "OrderGame",
  kind: "produce"
};

var source = [dataItem1, dataItem2, dataItem3];

const data = [];
for (let i = 0; i < 10; i++) {
  data.push(source[i % source.length]);
}

// console.log(data);

console.log(uniqBy(data, "target_id"));
