//let us see different methods of assining event listeners

//method 1
// let paras=document.querySelectorAll('p');
// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     para.addEventListener('click',function(){
//         alert('you clicked on: '+(i+1));
//     })
// }


//method 2 more simple and efficient
// let paras=document.querySelectorAll('p');
// function alertpara(event){
//   alert('you clicked on: '+event.target.textContent);
//  }
// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     para.addEventListener('click',alertpara);
// }

//method 3 using event delegation
let jon=document.getElementById('jon');
document.addEventListener('click',alertpara);
function alertpara(event){
  alert('you clicked on: '+event.target.textContent);
 }