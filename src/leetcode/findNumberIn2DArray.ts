// https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/

function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (matrix.length === 0) return false;
  let row = 0;
  let col = matrix.at(0).length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix.at(row).at(col) === target) {
      return true;
    }
    if (matrix.at(row).at(col) > target) {
      col--;
    } else {
      row++;
    }
  }
  return false;
}
