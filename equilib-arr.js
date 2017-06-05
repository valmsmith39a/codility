// Equilibrium Element

function equilibElement(A) {
  let equiIndex = 0;

  let sumArr = A.reduce(function(accum, current) {
    return accum + current;
  });
  if (sumArr === 0) {
    return 0;
  }

  for (let i = 1; i < A.length - 1; i++) {
    let arrBeg;
    let arrEnd;
    let sumBeg;
    let sumEnd;

    arrBeg = A.slice(0, i);
    sumBeg = arrBeg.reduce(function(accum, current) {
      return accum + current;
    });
    arrEnd = A.slice(i+1);
    sumEnd = arrEnd.reduce(function(accum, current) {
      return accum + current;
    });
    if (sumBeg === sumEnd) {
      return i;
    }
  }
  return "no equilibrium";
}

const arr = [-1, 3, -4, 5, 1, -6, 2, 1];
const arr2 = [1, 2, 3, 3, 2, 1];
const arr3 = [1, 2, 3, 2, 1];

console.log("Equilibrium index is: ", equilibElement(arr2));
