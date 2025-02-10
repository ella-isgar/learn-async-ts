// A callback is a function that is executed at a later time
// Callbacks can be hard to read and understand, esp. if the callbacks also call other functions

function doStep1(init: number, callback: (result: number) => void) {
  const result = init + 1;
  setTimeout(() => {
    // Execute this after 0 seconds and not immediately
    callback(result);
  }, 0);
}

function doStep2(init: number, callback: (result: number) => void) {
  const result = init + 2;
  callback(result);
}

function doStep3(init: number, callback: (result: number) => void) {
  const result = init + 3;
  callback(result);
}

// This is horrendously trash practice. Solution? The Promise API
// A promise object is an object that promises to resolve to a value at some later time.
function doOperation(init: number) {
  doStep1(init, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
  console.log("do other things ...");
}

doOperation(10);
