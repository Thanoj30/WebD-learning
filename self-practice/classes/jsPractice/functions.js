//function defination
function sayMyName(){
    console.log("my name is aarush");
}
//calling a function
sayMyName();

//functions with parameters
function add(a,b){
    let ans=a+b;
    console.log(ans);
    return a+b;
}
add(5,2);
add(9,0);
//giving name to a function
let power=function(x,y){
    return x**y;
}
let sol=power(2,10);
console.log(sol);
console.log(power(3,3));

//arrow function
let sub=(a,b)=>{
    return a-b;
}
console.log(sub(12,8));