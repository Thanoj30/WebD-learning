//method 1

let t1=performance.now();
for(let i=0;i<100;i++){
    let para=document.createElement('p');
    para.textContent="this is para "+(i+1);
    document.body.appendChild(para);
}
let t2=performance.now();
console.log("the first code time is:"+(t2-t1));

//method 2

let t3=performance.now();
let mydiv=document.createElement('div');
for(let i=0;i<100;i++){
    let para=document.createElement('p');
    para.textContent="this is para "+(i+1);
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
let t4=performance.now();
console.log("the second code time is:"+(t4-t3));

//method 3 using document fragment

let fragment=document.createDocumentFragment();
for(let i=0;i<100;i++){
    let para=document.createElement('p');
    para.textContent="this is para "+(i+1);
    fragment.appendChild(para);
}
document.body.appendChild(fragment);
