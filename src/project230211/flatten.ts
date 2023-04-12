/**
 * 数组扁平化
 * @param array
 * @param key
 * @returns
 */
function flatten(array: any[], key = "children"): any[] {
  return array.reduce((acc, cur) => {
    if (Array.isArray(cur?.[key])) {
      const { [key]: tmp = [], ...rest } = cur;
      return [...acc, rest, ...flatten(tmp, key)];
    } else {
      return [...acc, cur];
    }
  }, []);
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

console.log(flatten(data));
