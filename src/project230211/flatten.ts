/**
 *
 * @param array
 * @param generateValue
 * @returns
 */
function flatten<T>(
  array: T[],
  generateValue?: (item: T) => T[] | undefined
): T[] {
  return array.reduce((acc, cur) => {
    let tmp: T | T[] = cur;
    if (
      Object.prototype.toString.call(cur) === "[object Object]" &&
      generateValue?.(cur)
    ) {
      tmp = generateValue?.(cur)!;
    }

    if (Array.isArray(tmp)) {
      const prev = generateValue?.(cur) ? [...acc, cur] : acc;
      return [...prev, ...flatten(tmp, generateValue)];
    } else {
      return [...acc, cur];
    }
  }, [] as T[]);
}
const data = [
  {
    id: 1,
    name: "item1",
    children: [
      {
        id: 2,
        name: "item2",
        children: [
          {
            id: 3,
            name: "item3",
          },
          {
            id: 4,
            name: "item4",
          },
        ],
      },
      {
        id: 5,
        name: "item5",
      },
    ],
  },
  {
    id: 6,
    name: "item6",
  },
];

const numbers = [1, [2, 3], 4, [5, 6, [7, 8]]];

console.log(flatten(numbers));
// console.log(flatten(data, (item) => item.children));
