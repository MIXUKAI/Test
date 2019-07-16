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
        resove(data)
      })
      .catch(error => {
        // console.log(error)
        reject(error)
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
      //  resolve | return  -> try; reject -> catch
      return error
      // return Promise.reject(error);
    });
}

async function fetchSomeBody() {
  // await delay(1000);
  try {
    // const t1 = await getTodo1(1);
    const t1 = await getTodo1(2);
    console.log({ t1 });
  } catch (error) {
    console.log({ error });
  }
}

fetchSomeBody();
