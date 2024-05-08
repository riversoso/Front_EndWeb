/* 배열 */
// 배열 생성
const arr1 = new Array();
const arr2 = [1,2,3,4,5];
console.log(arr2);

const fruits = ['🍅','🍍'];
console.log(fruits);
// for
for(let i=0;i<2;i++){
    console.log(fruits[i]);
}
// for of
for(let fruit of fruits) {
    console.log(fruit);
}
// forEach
fruits.forEach(function (fruit, index,array) { // 함수
    console.log(fruit,index,array);
});

fruits.forEach((fruit,index) => { //애로우 함수(화살표 함수)
    console.log(fruit,index);
})

fruits.forEach((fruit) => console.log(fruits))

let ary = [1,2,3,4,5];
console.log(ary.length);
ary.push(10); //   배열의 원소를 마지막에 추가한다
console.log(ary.length);
console.log(ary);
ary.unshift(0); // 배열의 첫번째 요소로 추가한다
console.log(ary.length);
console.log(ary);
ary.pop(); // 배열의 마지막 원소를 삭제한다
console.log(ary.length);
console.log(ary);
ary.shift();
console.log(ary.length);
console.log(ary);
// slice

const fruits = ['🍅','🍍'];
console.log(fruits);
fruits.push('🍈','🍋','🍇','🍒');
console.log(fruits);
fruits.splice(1,1); // (시작인덱스,삭제개수,추가개수)
console.log(fruits);
fruits.splice(3,2);
console.log(fruits);
fruits.splice(1,1,'🍑','🍏');
console.log(fruits);
// concat
const fruit2 = ['🥝','🥦'];
const newFruits = fruits.concat(fruit2);
console.log(newFruits);
//seraching
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍑')); // 인덱스 리턴
console.log(fruits.indexOf('🍋'));
