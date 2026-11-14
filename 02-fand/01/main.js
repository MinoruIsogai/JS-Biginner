//演算子
//GOAL:演算子の優先順位を理解する。バグを防ぐ方法について、理解する。
'use strict';
let x = 1;
let y = 2;
let z = 3;
let ans1 = x + y * z;//答えはいくらか
console.log(ans1);//ans1 = 7

let ans2 = (x + y) * z;
console.log(ans2);

// 優先順位
// ()
// * /
// + -

//MDNの一覧表でも確認できる。