let element=document.querySelector('#tt');
let newElement=document.createElement('span');
// newElement.textContent="Hello World";


// this add new element at end
//element.appendChild(newElement);
//element.removeChild(newElement);


//using adjacent element methods
element.insertAdjacentElement('afterend',newElement);
// element.insertAdjacentElement('beforeend',newElement);
// element.insertAdjacentElement('afterbegin',newElement);
// element.insertAdjacentElement('afterbegin',newElement);


//to remove child element
let parent=document.querySelector('#tt');
let child=document.querySelector('#child');
parent.removeChild(child);