// const { subtraction, add } = require("./computed"); 
/*
    Cannot redeclare block-scoped variable 'subtraction'.
    1 const { subtraction } = require("./computed");
*/
// const computed = require("./computed");

// console.log(computed.add(1, 2));

import { Music } from "./computed";

let sing = new Music("dhsdah");
console.log(sing.mc = "萨达哈");

// 引入css模块
require("../src/css/header.css");

// 引入less模块
require("../src/css/footer.less");
