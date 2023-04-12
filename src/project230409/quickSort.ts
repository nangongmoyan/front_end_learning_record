/**
 * 快速排序
 * @param array number[]
 * @returns number[]
 * 时间复杂度 O(n log n)
 * 空间复杂度 O(log n)
 * 稳定性 => 不稳定
 */
function quickSort(array: number[]): number[] {
  const { length } = array;
  if (length < 2) return array;
  const base = array[0];
  const min = array.slice(1).filter((item) => item <= base);
  const max = array.slice(1).filter((item) => item > base);
  console.log({ min, max });
  return quickSort(min).concat([base]).concat(quickSort(max));
}

console.log(quickSort([5, 4, 6, 3, 2, 8]));
