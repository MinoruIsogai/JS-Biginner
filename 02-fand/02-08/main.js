//データ型
//変数に入るデータの種類のこと。
//（→Numberなどの数字、文字列、booleanとか？）
'use strict';
let myName = 'Ichiro';
let num = 123;//数値型
let dec = 123.456;//数値型。JSでは整数、小数点を区別せずに、数値型とする

console.log(myName);
console.log(num);
console.log(dec);

console.log(typeof myName);
console.log(typeof num);
console.log(typeof dec);

myName = 456;//変数に、動的に方の違う値を代入できる
console.log(myName);
console.log(typeof myName);

// 動的型付け言語
// 静的型付け言語 Javaなど
