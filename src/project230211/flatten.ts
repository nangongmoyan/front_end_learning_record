/**
 * 数组扁平化
 * @param array
 * @param generateValue
 * @returns
 */

import { flatten } from "moyan-utils";

type Flatten<T> = T extends Array<any> ? T[number] : T;
// function flatten<Flatten>(
//   array: Flatten[],
//   generateValue?: (item: Flatten) => Flatten[] | undefined
// ): Flatten[] {
//   return array.reduce((acc, cur) => {
//     let tmp: Flatten | Flatten[] = cur;
//     const propertyValue = generateValue?.(cur);
//     if (Object.prototype.toString.call(cur) === "[object Object]") {
//       propertyValue && (tmp = propertyValue);
//     }

//     if (Array.isArray(tmp)) {
//       let prev = acc;

//       if (propertyValue) {
//         let property: keyof Flatten;
//         for (let key in cur) {
//           cur[key] === propertyValue && (property = key);
//         }

//         if (property!) {
//           const { [property]: a, ...rest } = cur;
//           prev = [...acc, rest as Flatten];
//         }
//       }
//       return [...prev, ...flatten(tmp, generateValue)];
//     } else {
//       return [...acc, cur];
//     }
//   }, [] as Flatten[]);
// }

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

// console.log(flatten(numbers));
// console.log(flatten(data, (item) => item.children));
