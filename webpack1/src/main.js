"use strict";
// const { subtraction, add } = require("./computed"); 
/*
    Cannot redeclare block-scoped variable 'subtraction'.
    1 const { subtraction } = require("./computed");
*/
// const computed = require("./computed");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
const vue_1 = __importDefault(require("vue"));
// 实例化Vue对象中，el和tempalte同时存在，template里的内容将替换掉dom文档中的<section id="qpp"></section> 
let vm = new vue_1.default({
    el: "#app",
    template: `
        <h2>{{ this.msg }}</h2>
    `,
    data: {
        msg: "我是Vue"
    }
});
