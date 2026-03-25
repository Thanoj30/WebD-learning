// Arrays in JavaScript
// Creating an array
let arr=[1,2,3,4];
console.log(arr);

//using array constructor
let arr1=new Array(5,6,7,8);
console.log(arr1);

//accessing elements in an array
console.log(arr[0]);
console.log(arr1[2]);

//we can store different types of data in an array
let arr2=[1,"hi",true,null];
console.log(arr2);

//finding the type of an array
console.log(typeof arr);
console.log(typeof arr1);
console.log(typeof arr2);

//built in methods in arrays
console.log("Examples of built in methods in arrays:");
console.log("This is to use push");
let arr3=[1,2,3,4,5];
arr3.push(6);
console.log(arr3);
console.log("This is to use pop");
arr3.pop();
console.log(arr3);
console.log("This is to use shift");
arr3.shift();
console.log(arr3);
console.log("This is to use unshift");
arr3.unshift(0);
console.log(arr3);
console.log("This is to use slice");
let sliceArr=arr3.slice(1,4);
console.log(sliceArr);
console.log("This is to use splice");
arr3.splice(1,2,10);
console.log(arr3);
console.log("This is to use map");
let mapArr=arr3.map((num)=>{
   //console.log(num*2); 
    return num*2;
})
console.log(mapArr);
console.log("This is to use filter");
let evenArr=arr3.filter((num)=>{
    console.log(num%2===0);
return num%2===0;
//  if(num%2===0)
//     return true;
})
console.log(evenArr);
console.log("This is to use reduce");
let sum=arr3.reduce((acc,curr)=>{
    return acc+curr;
},0)
console.log(`Total sum of arr3 is: ${sum}`);
// let arr4=[4,8,2,15,3];
// arr4.sort();
// console.log(arr4);
console.log("This is to use sort");
let acend=arr3.sort((a,b)=>a-b);
console.log(acend);
let decend=arr3.sort((a,b)=>b-a);
console.log(decend);
console.log("This is to use indexOf");
console.log(arr3.indexOf(10));
console.log("This is to use find");
let found=arr3.find((num)=>num%2===0);
console.log(found);