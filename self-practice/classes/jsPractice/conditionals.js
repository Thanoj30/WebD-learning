//using if else 
let age=18;
if(age>=18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

//using if else if
let heightCm=198;
 if(heightCm>=190){
    console.log('you can be good in swimmig');
}
else if(heightCm>=180){
    console.log('you can be good in basketball');
}
else if(heightCm>=170){
    console.log('you can be good in football');
}
else{
    console.log('you can be good in cricket');
}

//using switch case
let height=198;
switch(true){
    case (height>=190):
        console.log('you can be good in swimmig');
        break;
    case (height>=180):
        console.log('you can be good in basketball');
        break;
    case (height>=170):
        console.log('you can be good in football');
        break;
    default:
        console.log('you can be good in cricket');
}

//using ternary operator
let age1=18;
let eligibility=age1>=18 ? "You are eligible to vote" : "You are not eligible to vote";
console.log(eligibility); 

