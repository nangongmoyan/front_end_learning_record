/**
 * 选择排序
 * @param array number[]
 * @returns number[]
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(1)
 * 稳定性 => 不稳定
 */
function selectionSort(array: number[]): number[] {
  const { length } = array;
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [array[minIndex], array[i]] = [array[i], array[minIndex]];
    }
  }
  return array;
}

console.log(selectionSort([5, 4, 6, 3, 2, 8]));
