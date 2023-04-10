var age;
var namep;
var toggle;
var empty;
var notInitialize;
var callback;
age = 50;
namep = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = function (a) {
    return 100 + a;
};
var anything;
anything = -20;
anything = "Text";
anything = {};
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
var person;
person = ["Max", 21];
// func
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
var page = {
    state: Load.LOADING,
};
if (page.state === Load.LOADING) {
    console.log("Сторінка завантажується");
}
if (page.state === Load.READY) {
    console.log("Сторінка завантажена");
}
//
var state;
var literal;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01",
    },
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
