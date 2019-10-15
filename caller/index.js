function makeReloads() {
  var fns = [];
  return function() {
    fns.push(arguments.callee.caller);
    console.log(arguments.callee.caller, fns);
  };
}

class waitOut {
  static fns = [];

  static reload() {
    while (waitOut.fns.length) {
      const fn = waitOut.fns.pop();
      fn();
    }
  }

  static call(fn) {
    waitOut.fns.push(arguments.callee.caller);
    console.log(arguments.callee.caller, waitOut.fns);
  }
}

const reloads = makeReloads();

function a() {
  console.log("aaaa");
  reloads();
}

a();
