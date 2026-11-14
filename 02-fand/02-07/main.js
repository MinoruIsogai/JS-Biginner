'use strict';
let color = 'Red'; 
// 変数colorに文字列リテラル'Red'を代入する
// 変数に予約語を入れることはできない。予約語はMDNを参照
console.log(color); // 変数colorの中身をコンソールに出力する

color = 'Green'; // 変数colorの中身を文字列リテラル'Green'に変更する
console.log(color); // 変数colorの中身をコンソールに出力する

//let color = 'Blue'; // 変数colorを*再宣言*することはできない

let myColor = 'Blue'; // 変数myColorを宣言し、文字列リテラル'Blue'を代入する
console.log(myColor); // 変数myColorの中身をコンソールに出力する

var myName = 'Taro'; // 変数myNameを宣言し、文字列リテラル'Taro'を代入する
console.log(myName); // 変数myNameの中身をコンソールに出力する

//定数
const PI = 3.14; // 定数PIを宣言し、数値リテラル3.14を代入する
console.log(PI); // 定数PIの中身をコンソールに出力する
// 定数はあとから書き換えができない
// PI = 3.14159; // エラー: Assignment to constant variable.

//変数はキャメルケースで単語をつなぐのに対して、定数はアンダースコアで単語をつなぐのが一般的
const TAX_RATE = 10; // 定数TAX_RATEを宣言し、数値リテラル10を代入する
console.log(TAX_RATE);