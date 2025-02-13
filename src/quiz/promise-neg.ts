function hasNeg(arr: number[][], row: number): Promise<number> {
  console.log("new Promise being made...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (arr.length === 0) {
        reject("Cannot check an empty array");
      } else if (row < 0 || row >= arr.length) {
        reject("Invalid row number");
      }
      let hasN = false;
      for (let i = 0; i < arr[row].length; i++) {
        if (arr[row][i] < 0) {
          hasN = true;
          console.log(
            "Found a negative number in row " + row + " --> " + arr[row][i]
          );
        }
      }
      if (hasN) {
        resolve(row);
      } else {
        reject("No negative numbers in row " + row);
      }
    }, 0);
  });
}

const array2D_Neg = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, -9],
];

var rowNegsPromises: Promise<number>[] = [];

for (let row = 0; row < array2D_Neg.length; row++) {
  rowNegsPromises.push(hasNeg(array2D_Neg, row));
}

Promise.any(rowNegsPromises)
  .then((rowNegs) => {
    console.log("The following rows have negative numbers = " + rowNegs);
  })
  .catch((err) => {
    console.log("err = " + err);
  });

console.log("End of main program.");
