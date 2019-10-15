function ff(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(undefined);
      reject(1);
    }, 2000);
  });
}

async function a() {
  try {
    const x = await ff();
    console.log("x value is ", x);
  } catch (e) {
    console.log("error in a ", e);
    throw e
  }
}

async function b() {
  try {
    const c = await a();
    console.log("c value is ", c);
  } catch (e) {
    console.log("error in b ", e);
  }
}

b();

