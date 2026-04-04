
// // syncronous for promise 
// let firstPromise=new Promise((resolve,reject)=>{
//     console.log("thanoj");
// })

// //gets fulfilled when we call resolve
// let firstPromise=new Promise((resolve,reject)=>{
//     console.log("thanoj");
//     resolve(1001);
// })

// //gets rejected when we call reject
// let firstPromise=new Promise((resolve,reject)=>{
//     console.log("thanoj");
//     reject(new Error("something went wrong"));
// })

// asynchronous for promise
//this gives pending state as we have not called resolve or reject
// let FirstPromise=new Promise((resolve,reject)=>{
//     setTimeout(function sayMyName(){
//         console.log("thanoj");
//     },1500);
// });

// //this gives fulfilled state as we have called resolve
// let FirstPromise=new Promise((resolve,reject)=>{
//     setTimeout(function sayMyName(){
//         console.log("thanoj");
//     },1500);
//     resolve(1);
// });

// //using .then , .catch to handle the promise
// let promise1=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("the promise is resolved");
//     }
//     else{
//         reject(new Error("the promise is rejected"));
//     }
// });
// promise1.then((message)=>{
//     console.log("the message is "+message);
// }).catch((error)=>{
//     console.log("the error is "+error);
// })

//using multiple then
let promise1=new Promise((resolve,reject)=>{
     let success=true;
    if(success){
         resolve("the promise is resolved");
   }
     else{
        reject("the promise is rejected");
     }
 });
promise1.then((message)=>{
    console.log("first msg:"+message);
    return 20;
}).then((message)=>{
    console.log("second msg:"+message);
    return 30;
}).then((message)=>{
    console.log("third msg:"+message);
}).catch((error)=>{
    console.log("the error is "+error);
}).finally(()=>{
    console.log("this will always execute");
})

// //using multiple promises and Promise.all
// let promise1=new Promise((resolve,reject)=>{
//     setTimeout(resolve,1000,"First");
// })
// let promise2=new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,"second");
// })
// let promise3=new Promise((resolve,reject)=>{
//     setTimeout(resolve,4000,"third");
// })
// Promise.all([promise1,promise2,promise3])
// .then((values) => {
//     console.log(values);
// })
// .catch((error)=>{
//     console.log(error);
// })