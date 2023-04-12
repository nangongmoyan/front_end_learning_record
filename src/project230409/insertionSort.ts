/**
 * 插入排序
 * @param array number[]
 * @returns number[]
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(1)
 * 稳定性 => 稳定
 */
function insertionSort(array: number[]): number[] {
  const { length } = array;
  for (let i = 1; i < length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort([5, 4, 6, 3, 2, 8]));
