/*function sumRow(arr: number[]): Promise<number> {
  return new Promise((resolve, reject) => {
    console.log("Sum called ... ");
    if (arr.length === 0) {
      reject("Cannot sum an empty array");
    }
    /** schedule the execution of the function to the next event loop cycle.
     * This is done using setTimeout() to simulate an asynchronous operations.
     *
     * Replace the logic in the setTimeout() with the actual logic to sum the numbers
     * to understand the difference in execution with and without setTimeout()
     **

    setTimeout(() => {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        console.log(`Adding ${arr[i]} to sum`);
        sum += arr[i];
      }
      resolve(sum);
    }, 0);
    console.log("returning from sum");
  });
}

// Example usage:
const array2D_1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

async function sumRows(arr: number[][]) {
  console.log("Beginning the summation of all rows...");
  if (arr.length === 0) {
    throw "Cannot sum an empty array";
  }
  try {
    const row1Sum: Promise<number> = sumRow(arr[0]);
    const row2Sum: Promise<number> = sumRow(arr[1]);
    const row3Sum: Promise<number> = sumRow(arr[2]);

    const sum: { rowSum: int }[] = await Promise.all([
      row1Sum,
      row2Sum,
      row3Sum,
    ]);

    console.log("sum = " + res.reduce((a: number, b: number) => a + b, 0));
    return "done";
  } catch (err) {
    throw `Failed to sum rows: ${err}`;
  }
}

sumRows(array2D_1).then((status) => console.log(status));
sumRows([]).catch((err) => console.log(err));*/

function sumRow(arr: number[][], row: number): Promise<number> {
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

// Example usage:
const array2D_1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

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
  });

console.log("End of main program.");
