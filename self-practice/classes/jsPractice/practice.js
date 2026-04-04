// console.log(a);
// //console.log(b);
// //console.log(c);
// var a=2;
// let b=9;
// const c=8;
// console.log(a);
// console.log(b);
// console.log(c);

//class student{
    //using constructor
    // constructor(name, age, height, weight) {
    //     this.name = name;
    //     this.age = age;
    //     this.height = height;
    //     this.weight=weight;
    // }
    //using class fields
//     name="thanoj";
//     age=20;
//     #weight=77;
//     height="5ft 11in";
//     greet(){
//         console.log("hello everyone");
//     }
//     getWeight(){
//         return this.#weight;
//     }
// }
// // let obj=new student();
// // console.log(obj.name);
// let obj1=new student("dheeraj",19,"5ft 11in",80);
// console.log(obj1.name);
// console.log(obj1.age);
// console.log(obj1.height);
// console.log(obj1.getWeight());
// obj1.greet();
// function checking1(check1=2,check2=2){
//     console.log(check1);
//     console.log(check2);
// } 
// checking1(); 

// // function checking1(check1=2,check2=2){
// //     console.log(check1);
// //     console.log(check2);
// // } 
// // checking1(2,3);

// function checking2(check1=2,check2=check1+2){
//     console.log(check1);
//     console.log(check2);
// } 
// checking2(); 


// function checking3(check={name:"thanoj",age:20}){
//     console.log(check);
//     //console.log(check.age);
// }
// checking3();


// function checking4(value=9){
//     console.log(value);
// }
// checking4(undefined);

// function getAge(){
//     return 20;
// }

// function utility(name,age=getAge()){
//     console.log(name," ",age);
// }
// utility("thanoj",4);


//object cloning 
//method 1
let src={name:"thanoj",age:20};
let dest1={...src};
console.log(src);
console.log(dest1);

//method 2
let dest2=Object.assign({},src);
console.log(dest2);

//method 3
let dest3={};
for(let key in src){
   let newKey=key;
   let newValue=src[key];
   dest3[newKey]=newValue;
}
console.log(dest3);