
``` javascript
f1() {
  return fetch(url)
    .then(data => data)
    .catch(error => error) 
    // .catch(error => Promise.reject(error))
}

f2() {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(resolve)
      .catch(reject)
  }).catch(error => error)
}

f1()
f2()
```
1. return error或者return resolve(error) error也会被处理近then函数或者try{}中
2. return reject(error) 会被错误捕捉, 被之后调用的catch()或者catch{}捕获