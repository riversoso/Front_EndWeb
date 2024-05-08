// function
// 함수 선언(정의), 호출
// func(); // 함수 호출 - 함수가 실행
// func() { //함수정의 - 함수를 만든다
//     ~~~
// }
// function [함수명](입력) {~~~ };
//printHello();
function printHello() { // 함수정의를 만드는게 제일 먼저다 -> 함수호출이 이루어진다
    console.log("Hello!!");
}
printHello();  // 함수 호출: 함수 이름(입력);

function log(message) { // 함수정의
    console.log(message);
}
log();
log("hi@");
log(123);

function showError() {
    alert('에러발생, 다시 시도하세요');
}
showError();
// showError. - 지원되는 내장 함수들을 볼 수 있다 . 함수가 객체이기 때문

// 입력 파라미터를 객체로 받는 함수
function changeName(obj) {  // 함수 정의
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};  //ellie 객체 생성
console.log(ellie);
changeName(ellie);
console.log(ellie);
// default parameters(ES6)
function showMessage(message, from = 'unknown') {
    console.log('${message} by ${from}');                                                                                                                                                                                                                                                                                                                                                                                                                                                
}
showMessage("Hi");

function printAll(...args) {
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }
    for(const arg of args) {
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('dream','coding','javis','adam',1,2);

// 함수 출력
function add(num1, num2) {
    return num1 + num2;
}
const res = add(10,20);
console.log(res);

// 함수 표현식 : 이름없는 함수를 만든다(대입형 함수)
// let func = function () {}  // 함수를 변수에 할당시킨다
let showHello = function() {
    console.log('Hello');
}
showHello();
let hiHello = showHello;
hiHello();                                                                                                                                                                                                                