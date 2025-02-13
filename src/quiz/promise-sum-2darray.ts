async function sumRow(arr: number[][], row: number): Promise<number> {
  console.log("new Promise being made...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (arr.length === 0) {
        reject("Cannot sum an empty array.");
      } else if (row < 0 || row >= arr.length) {
        reject("Invalid row index.");
      }
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        console.log(`Adding ${arr[row][i]} to sum`);
        sum += arr[row][i];
      }
      resolve(sum);
    }, 0);
  });
}

/* FIRST TO DO CODE:
var rowSumsPromises: Promise<number>[] = [];

for (let row = 0; row < array2D_1.length; row++) {
  rowSumsPromises.push(sumRow(array2D_1, row));
}

Promise.all(rowSumsPromises)
  .then((rowSums) => {
    console.log("Computing sum of all rows ... ");
    let sum = rowSums.reduce((a: number, b: number) => a + b, 0);
    console.log(`Sum = ${sum}`);
  })
  .catch((err) => {
    console.log("err = " + err);
  });*/

async function sumAllRows(arr: number[][]): Promise<number> {
  console.log("Beginning the summation of all rows...");
  try {
    var rowSumsPromises: Promise<number>[] = [];

    for (let row = 0; row < arr.length; row++) {
      rowSumsPromises.push(sumRow(arr, row));
    }

    // AWAIT --> The call will wait until the promise is resolved and returns
    // expected value. Errors due to the function call can be handled using
    // good old try catch
    const res: number[] = await Promise.all(rowSumsPromises);
    let sum = res.reduce((a: number, b: number) => a + b, 0);
    return sum; // equivalent to resolve(sum);
  } catch (err) {
    throw new Error(`Failed to sum rows: ${err}`);
  }
}

const array2D_1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/*
'await' expressions are only allowed at the top level of a file when that file 
is a module, but this file has no imports or exports. Consider adding an empty 
'export {}' to make this file a module.

aka... await can't be placed outside of an async function.
*/
sumAllRows(array2D_1)
  .then((sumOfRows) => console.log("The sum of all rows is " + sumOfRows))
  .catch((err) => console.log(err));

sumAllRows([])
  .then((sumOfRows) => console.log("The sum of all rows is " + sumOfRows))
  .catch((err) => console.log(err));
