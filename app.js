"use strict";
let age;
let namep;
let toggle;
let empty;
let notInitialize;
let callback;
age = 50;
namep = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => {
  return 100 + a;
};
let anything;
anything = -20;
anything = "Text";
anything = {};
let some;
some = "Text";
let str;
if (typeof some === "string") {
  str = some;
}
let person;
person = ["Max", 21];
// func
var Load;
(function (Load) {
  Load[(Load["LOADING"] = 0)] = "LOADING";
  Load[(Load["READY"] = 1)] = "READY";
})(Load || (Load = {}));
const page = {
  state: Load.LOADING,
};
if (page.state === Load.LOADING) {
  console.log("Сторінка завантажується");
}
if (page.state === Load.READY) {
  console.log("Сторінка завантажена");
}
//
let state;
let literal;
function showMessage(message) {
  console.log(message);
}
function calc(num1, num2) {
  return num1 + num2;
}
function customError() {
  throw new Error("Error");
}
const page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};
const page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

const app = { name, password };
