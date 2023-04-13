function flatten<T>(
array: T[],
generateValue?: (item: T) => T[] | undefined
): T[] {
return array.reduce((acc, cur) => {
// cur = Object.prototype.toString.call(cur) ==='[object Object]'? generateValue?.(cur) ?? cur

    // if (Object.prototype.toString.call(cur) === "[object Object]") {
    //   cur = generateValue?.(cur) ?? cur;
    // }
    const xxx = generateValue?.(cur);
    console.log({ xxx });
    if (Array.isArray(generateValue?.(cur) || cur)) {
      // return [];
      return [
        ...acc,
        ...flatten((generateValue?.(cur) ?? cur) as T[], generateValue),
      ];
    } else {
      return [...acc, cur];
    }
    // const value = generateValue?.(cur);
    // console.log({ value, cur });
    // return [];
    // if (Array.isArray(key ? cur?.[key] : cur)) {
    //   if (key) {
    //     const { [key]: tmp = [], ...rest } = cur;
    //   }
    //   // return [...acc, ...(generateKey?.(cur)?flatten(cur))];
    // } else {
    //   return [...acc, cur];
    // }

}, [] as T[]);

// return array.reduce((acc, cur) => {
// if (Array.isArray(cur?.[key])) {
// const { [key]: tmp = [], ...rest } = cur;
// return [...acc, rest, ...flatten(tmp, key)];
// } else {
// return [...acc, cur];
// }
// }, []);
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

// const numbers = [1, [2, 3], 4, [5, 6, [7, 8]]];

// console.log(flatten(numbers));
console.log(flatten(data, (item) => item.children));
