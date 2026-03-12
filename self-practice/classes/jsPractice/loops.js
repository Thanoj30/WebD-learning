//using for loop
for(let i=1;i<=5;i++){
    console.log(i);
}

//nested for loop
for(let i=1;i<=3;i++){
    for(let j=1;j<=2;j++){
        console.log(`i=${i}, j=${j}`);
    }
}

//using while loop
let count=1;
while(count<=5){
    console.log(count);
    count++;
}

//knowing the use of continue statement in while loop
let i=1;
while(i<5){
    console.log("inside the loop");
    if(i==3){
        i++;
        continue;
    }
    else
        console.log(i);
    i++;
}

//using do while loop
let j=1;
do{
    console.log(j);
    j++;
}while(j<=5);
