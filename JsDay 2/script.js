//-----------------REVERSE AN ARRAY USING PUSH AND POP METHOD----------------------------------//
//Q1.reverse the array using these methods
let arr = ["banana", "apple", "mango", "grapes"];
let reversedArr = []; 
while (arr.length > 0 ){ 
let element = arr.pop(); 
reversedArr.push (element);
} 
console.log(reversedArr); 
// output: [ 'grapes', 'mango', 'apple', 'banana' ]

//Q2.remove all negative numbers from an array
let numbers = [10, -5, 3, -1, 0, -7, 8];
let positivbenum= [];
while (numbers.length > 0) {
let num = numbers.pop();
if (num >= 0) {
positivbenum.push(num);
}
console.log(positivbenum);
}
// output: [ 0, 3, 10, 8 ]

//----------------------------------PALINDROME CHECKER------------------------------------------//
//Q3.check if array is palindrome or not
function isPalindrome(){
let arr_2= [1,2,3,2,1];
let arr_3=[];
let arr_4=[...arr_2]; 
while (arr_2.length > 0) {
    let element = arr_2.pop();
    arr_3.push(element);
}
console.log(arr_3);
console.log(arr_4);

for (let i = 0; i < arr_4.length; i++) {
    if (arr_4[i] !== arr_3[i]) {
        return ("not palindrome");
    } else {
        return ("palindrome");
    } 
}
}
console.log(isPalindrome());

//-------------------------------REMOVE DUPLICATES FROM AN ARRAY----------------------------------//
//Q4.remove all duplicates element from a array
let arr_5 = [1, 2, 3, 2, 4, 1, 5, 3];
let Arr = [];
while (arr_5.length > 0) {
    let element = arr_5.pop();
    if (!Arr.includes(element)) {
        Arr.push(element);
    }
}
console.log(Arr);
// output: [ 5, 4, 2, 3, 1 ]