"use strict";
// const { subtraction, add } = require("./computed"); 
/*
    Cannot redeclare block-scoped variable 'subtraction'.
    1 const { subtraction } = require("./computed");
*/
// const computed = require("./computed");
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(computed.add(1, 2));
const computed_1 = require("./computed");
let sing = new computed_1.Music("dhsdah");
console.log(sing.mc = "萨达哈");
// 引入css模块
require("../src/css/header.css");
// 引入less模块
require("../src/css/footer.less");

// 引入vue
import Vue from "vue";

let vm = new Vue({
    el: "#app",
    data: {
        msg: "我是Vue"
    }
});
