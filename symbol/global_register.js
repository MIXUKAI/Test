const uid = Symbol.for('uid');

//Symbol.for() 方法**仅接受单个字符串类型的参数**

/**
 * 方法首先会搜索全局符号注册表，看是否存在一个键值为 "uid" 的符号值。 
 * 若是，该方法会返回这个已存在的符号值；
 * 否则，会创建一个新的符号值，并使用该键值将 其记录到全局符号注册表中，然后返回这个新的符号值。
 */

 const uid2 = Symbol.for('uid');

 console.log(uid2 === uid) //true

 console.log(Symbol.keyFor(uid2)) //uid