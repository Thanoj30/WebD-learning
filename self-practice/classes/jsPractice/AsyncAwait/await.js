
// //its an asynchronous function
// async function getData(){
//     setTimeout(function(){
//         console.log("I am inside set timeout block")
//     }, 3000);
// }
// let output=getData();
// console.log(output);

// //this is how we fetch data from api
// async function getdata(){
//     let response= await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
//     //parse json - async
//     let data=await response.json();
//     console.log(data);
// }
// getdata();

const myHeaders = new Headers();
myHeaders.append("Content-Type","application/json");

const url="https://jsonplaceholder.typicode.com/posts";

const options={
    method:"POST",
    body:JSON.stringify({ username:"thanoj reddy"}),
    headers:myHeaders,
};

// GET data
async function getData(){
    const url="https://jsonplaceholder.typicode.com/posts/101";
    const response= await fetch(url);
    const data=await response.json();
    console.log("get data response:", data);
}

// POST data
async function postData(){
    const response=await fetch(url,options);
    const data=await response.json();
    console.log("post data response:",data);
}

// Run both
async function processData(){
    await postData();
    await getData();
}

processData();  