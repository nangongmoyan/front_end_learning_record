/**
 * 归并排序
 * @param array number[]
 * @returns number[]
 * 时间复杂度 O(n log n)
 * 空间复杂度 O(n)
 * 稳定性 => 稳定
 */
function mergeSort(array: number[]): number[] {
  const { length } = array;
  if (length <= 1) return array;
  const mid = Math.floor(length / 2);
  const leftArr = array.slice(0, mid);
  const rightArr = array.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr: number[], rightArr: number[]): number[] {
  const rlt: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;
  const { length: leftLen } = leftArr;
  const { length: rightLen } = rightArr;
  while (leftIndex < leftLen && rightIndex < rightLen) {
    const leftItem = leftArr[leftIndex];
    const rightItem = rightArr[rightIndex];
    const compare = leftItem < rightItem;
    rlt.push(compare ? leftItem : rightItem);
    compare ? leftIndex++ : rightIndex++;
  }
  return rlt.concat(leftArr.slice(leftIndex)).concat(rightArr[rightIndex]);
}

console.log(mergeSort([5, 4, 6, 3, 2, 8]));
