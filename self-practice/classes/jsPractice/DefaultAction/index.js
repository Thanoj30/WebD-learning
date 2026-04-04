let alink=document.getElementById('alink');
alink.addEventListener('click',function(event){
    event.preventDefault();
    alink.textContent="you clicked me"
});
