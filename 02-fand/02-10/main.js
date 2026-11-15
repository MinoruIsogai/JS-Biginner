// 条件分岐
// GOAL：条件分岐を理解する。if/elseを使ったプログラムが書ける。

// 構文if
// fi (条件式) {
//     //条件式がtureの場合に実行したい処理
// }

'use strict';

let temp = 29;
if (temp > 28) {
    console.log('冷房稼働！');
}//ここセミコロンいらないんだなあ。

console.log(29 > 28);
console.log(20 > 28);

//以上
let a = 100;
if (a >= 100) {
    console.log('100以上です。');
}
//より大きい
let b = 101;
if (b > 100) {
    console.log('100より大きいです。');
}
//以下
let c = 100;
if (c <= 100) {
    console.log('100以下です。');
}
//未満
let d = 99;
if (d < 100) {
    console.log('100未満です。');
}
//等しい
let e = 100;
if (e == 100) {
    console.log('100と等しいです。');
}
//等しくない
let f = 111;
if (f != 100) {
    console.log('100と等しくないです。');
}

// 構文 if/else
// if (条件式) {
//     //条件式がtureの時に実行したい処理
// } else {
//     //条件式がfalseの時に実行したい処理
// }

// if / else
let g = 101;
if (g >= 100){
    console.log('100以上です。');
} else {
    console.log('100以上でないです。');
}





// より複雑な条件分岐を記述する
// GOAL:else ifを使って、複雑な処理を実行できるようになる。

// 構文 if /else if/ else
// if(条件式1){
//     //条件式1がtrueの場合に実行したい処理
// }.else if(条件式2){
//     //条件式2がtrueの場合に実行したい処理
// } else {
//     //全ての条件式が成り立たなかった場合に実行したい処理
// }


// 例題
// テストの点数×によって、
// 通知表の成績をコンソールに
// 出力するプログラムを書く
// 90点以上·A
// 80点以上 B
// 60点以上 C
// 60点未満 D

let score = 70;
if (score >= 90){
    console.log('A');
} else if (score >= 80){
    console.log('B');
} else if (score >= 60){
    console.log('C');
} else {
    console.log('D');
}