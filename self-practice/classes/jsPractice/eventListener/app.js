function change(){
    let p=document.getElementById('p');
    p.textContent="we are fine.What about you?";
}
let p=document.getElementById('p');
p.addEventListener('click',change);