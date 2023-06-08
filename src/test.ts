import { omit, pick, pickBy } from "lodash";
// import { getJSDataType } from "moyan-utils";

// const obj = { a: 1, b: { c: 2 }, d: 4 };
// console.log(getJSDataType(obj));
var object = { a: 1, b: "2", c: 3 };
// console.log(omit(object, ["a", "c"]));
// console.log({ object });

pickBy(object, (value) => {
  console.log({ value });
  return value;
});
