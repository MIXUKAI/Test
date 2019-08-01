const fetch = require("node-fetch");
const delay = (ms = 3000) => new Promise(resolve => setTimeout(resolve, ms));

// Version1
function getTodo1(id = 1) {
  return new Promise((resove, reject) => {
    fetch(`https://easy-mock.com/mock/5d2d37366b6f0522c753d757/api/todo/${id}`)
      .then(response => response.json())
      .then(async data => {
        console.log("delay start...");
        await delay(5000);
        console.log("delay finish...");
        resove(data);
      })
      .catch(error => {
        // console.log(error)
        reject(error);
      });
  }).catch(error => error);
}

// Version2
function getTodo2(id = 1) {
  return fetch(
    `https://easy-mock.com/mock/5d2d37366b6f0522c753d757/api/todo/${id}`
  )
    .then(response => response.json())
    .then(async data => {
      console.log("delay start...");
      await delay(5000);
      console.log("delay finish...");
      return data;
    })
    .catch(error => {
      /**
       *  直接return或者return Promise.resolve(error) 会被之后调用的函数的try或者.then捕捉到
       *  return Promise.reject(error) 才会被之后调用的函数的.catch() 和 catch(error) {} 捕捉到
       */
      return error;
      // return Promise.reject(error);
    });
}

// Version3
async function getTodo3(id = 1) {
  try {
    const data = await fetch(
      `https://easy-mock.com/mock/5d2d37366b6f0522c753d757/api/todo/${id}`
    ).then(response => response.json());

    console.log("delay start...");
    await delay(5000);
    console.log("delay finish...");
    return data;
  } catch (error) {
    /**
     *  直接return或者return Promise.resolve(error) 会被之后调用的函数的try或者.then捕捉到
     *  return Promise.reject(error) 才会被之后调用的函数的.catch() 和 catch(error) {} 捕捉到
     */
    // return error;
    return Promise.reject(error);
  }
}

async function fetchSomeBody() {
  // await delay(1000);
  try {
    // const t1 = await getTodo1(1);
    const t1 = await getTodo3(2);
    console.log({ t1 });
  } catch (error) {
    console.log({ error });
  }
}

fetchSomeBody();
