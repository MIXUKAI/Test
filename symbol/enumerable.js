let firstName = Symbol("first name");

let person = {
  [firstName]: "Nicholas",
  lastName: "xxx"
};

console.log(Object.getOwnPropertyDescriptor(person, firstName));

Object.keys(person).forEach((key, i) => console.log(key, i));

for (key in person) {
  console.log(key);
}

//该属性使用 getOwnPropertyDescriptor 查看时显示为可枚举（ enumerable: true ），但无 法用 for-in 循环遍历，也不会显示在 Object.keys() 的结果中。
