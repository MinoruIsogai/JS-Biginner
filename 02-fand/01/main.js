//演算子
//GOAL:演算子を利用できる
// + - * / % **(べき乗)
'use strict';
let ans = 1 + 2;
console.log(ans);

let i = 20;
let j = 10;
let ans1 = i + j;
console.log(ans1);

let ans2 = i - j;
console.log(ans2);

let ans3 = i * j;
console.log(ans3);

let ans4 = i / j;
console.log(ans4);

let x = 3;
let y = 2;
let ans5 = x / y; 
console.log(ans5);

let ans6 = x % y; //余り
console.log(ans6);

let ans7 = Math.pow(x, y); //べき乗
console.log(ans7);

let ans8 = x ** y; //べき乗の演算子（バージョンによる
console.log(ans8);

// 優先順位
// ()
// * /
// + -





//文字列結合と、テンプレートリテラル
//GOAL:+を使う。テンプレートリテラルを使う。
'use strict';
let lastName = 'さとう';
let firstName = 'たろう';
let message1 = 'こんにちは ' + lastName + ' ' + firstName + ' さん';
console.log(message1);

let message2 = `こんにちは ${lastName} ${firstName} さん
JavaScriptの学習を始めましょう。`
console.log(message2);

//複合代入演算子
//GOAL:複合代入演算子とは何か理解する。複合代入演算子を使ってプログラムが書ける。
//複合代入演算子とは
// 例）
// x = x + y;
// → x += y;
let num = 20;
num = num + 10;
console.log(num);

let num1 = 20;
num1 += 10;
console.log(num1);

let num2 = 20;
num2 -= 10;
console.log(num2);

let num3 = 20;
num3 *= 10;
console.log(num3);

let num4 = 20;
num4 /= 10;
console.log(num4);






//演習問題：演算子
// Aさんは、
// ・体重が60㎏
// ・身長が1.7m
// BMIを計算して、consoleへ出力してください。

// 補足：
// BMI = 体重kg / (身長m * 身長m)

let weight = 60;
let height = 1.7;
let aBmi = weight / (height * height);
console.log(aBmi);
