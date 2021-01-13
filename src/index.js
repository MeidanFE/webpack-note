// class A {
//   say() {
//     console.log("myName is A");
//   }
// }

// let a = new A();
// console.log(a);

// let foo = () => {
//   let x = 1;
//   if (false) {
//     console.log("never reached");
//   }

//   let a = 3;
//   return a;
// };

// let baz = () => {
//   var x = 1;
//   console.log(x);
//   function unused() {
//     return 5;
//   }

//   return x;
//   let c = x + 3;
//   return c;
// };

// baz();

import { post } from "./utils.js";
import Menu from "./menu";

new Menu();
let baz = () => {
  post();
  var x = 1;
  console.log(x);
  function unused() {
    return 5;
  }
  return x;
};

baz();
