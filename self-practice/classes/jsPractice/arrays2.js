let arr=[3,5,1,7,8,4];
let length=arr.length;
for(let i=0;i<length;i++){
    console.log(arr[i]);
}
//using forEach method
arr.forEach((value,index)=>{
    console.log("Number:",value,"Index:",index);
})
//this is an object
let obj={
    name:"thanoj",
    age:20,
    weight:77,
    height:"5ft 11in",
    greet: function(){
        console.log("hello everyone");
    }
};
//using for in method
for(let key in obj){
    console.log(key," ",obj[key]);
}
//using for of method
for(let value of arr){
    console.log(value);
}
//using for of method with objects
for(let key of Object.keys(obj)){
    console.log(key," ",obj[key]);
}
//using for of method in strings
let str="hello";
for(let char of str){
    console.log(char);
}
//getting sum of an array
let getSum=(arr)=>{
    let sum=0;
    arr.forEach((num)=>{
        sum+=num;
    })
    return sum;
}
console.log(getSum(arr));


function solve(number){
    return function(number){
        return number*number;
    }
}
let ans=solve(5);
console.log(ans(5));
let finalAns=ans(10);
console.log(finalAns);

let loop=[
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a*b;
    },
    function(a,b){
        return a-b;
    }
]
//method 1
console.log(loop[0](5,10));
//method 2
let mul=loop[1];
console.log(mul(5,10));
//method 3
let sub=loop[2];
let SubAns=sub(10,5);
console.log(SubAns);