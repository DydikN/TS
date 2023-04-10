let age: number;
let namep: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback: (a: number) => number;

age = 50;
namep = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => {
  return 100 + a;
};

let anything: any;
anything = -20;
anything = "Text";
anything = {};

let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}

let person: [string, number];
person = ["Max", 21];

// func

enum Load {
  LOADING,
  READY,
}
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

let state: string | number;

let literal: "enable" | "disable";

function showMessage(message: string) {
  console.log(message);
}

function calc(num1: number, num2: number) {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

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
