export enum CloneType {
  Object = "Object",
  Array = "Array",
  Date = "Date",
  RegExp = "RegExp",
  Function = "Function",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  Undefined = "Undefined",
  Null = "Null",
  Symbol = "Symbol",
  Set = "Set",
  Map = "Map",
}

export type _CloneType = keyof typeof CloneType;

/**
 * 检测数据类型
 * @param type cloneType
 * @param obj 检测的数据源
 * @returns Boolean
 */
function isType<T>(type: _CloneType, obj: T) {
  return Object.prototype.toString.call(obj) === `[object ${type}]`;
}

function cloneDeep<T>(obj: T, cache = new WeakMap()): T {
  // 如果不是对象或者是null，直接返回
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }

  // 如果已经缓存过，直接返回缓存的值
  if (cache.has(obj)) {
    return cache.get(obj);
  }

  // 初始化返回结果
  let result: T, param!: T;
  // 如果是日期对象，直接返回一个新的日期对象
  if (isType(CloneType.Date, obj) || isType(CloneType.RegExp, obj)) {
    param = obj;
  }

  result = new (obj as any).constructor(param);
  // 如果是数组或对象，需要遍历
  if (isType(CloneType.Array, obj) || isType(CloneType.Object, obj)) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = cloneDeep(obj[key], cache);
      }
    }
  }

  // 如果是Set
  if (isType(CloneType.Set, obj)) {
    for (let value of obj as unknown as Set<T>) {
      (result as Set<T>).add(cloneDeep(value, cache));
    }
  }

  // 如果是Map
  if (isType(CloneType.Map, obj)) {
    for (let [key, value] of obj as unknown as Map<T, T>) {
      (result as Map<T, T>).set(cloneDeep(key, cache), cloneDeep(value, cache));
    }
  }
  // 缓存值
  cache.set(obj, result);
  return result;
}

const obj1 = { a: 1, b: 2, c: { d: 3, e: 4 }, f: 5, g: { h: 6 } };

console.log(obj1.toString());
// const obj2 = cloneDeep(obj1);

// console.log(obj1.c === obj2.c);

// const data = [
//   {
//     id: 1,
//     name: "item1",
//     children: [
//       {
//         id: 2,
//         name: "item2",
//         children: [
//           {
//             id: 3,
//             name: "item3",
//           },
//           {
//             id: 4,
//             name: "item4",
//           },
//         ],
//       },
//       {
//         id: 5,
//         name: "item5",
//       },
//     ],
//   },
//   {
//     id: 6,
//     name: "item6",
//   },
// ];

// const set = new Set(data);

// console.log(set === cloneDeep(set));
// const rltData = cloneDeep(data);
// console.log(rltData[0]);

// const reg = new RegExp("abc", "g");

// console.log(reg === cloneDeep(reg));
