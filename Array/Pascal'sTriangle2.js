var getRow = function(rowIndex) {
  let row = [1];
  for (let i = 1; i <= rowIndex; i++) {
      for (let j = i; j > 0; j--) {
          if (j === i) {
              row[j] = 1
          } else {
              row[j] = row[j - 1] + row[j]
          }
      }
  }
  return row;
};
// the best solution from other source