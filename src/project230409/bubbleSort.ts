/**
 * 冒泡排序
 * @param array number[]
 * @returns number[]
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(1)
 * 稳定性 => 稳定
 */
function bubbleSort(array: number[]): number[] {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

console.log(bubbleSort([5, 4, 6, 3, 2, 8]));
