let a=0;
let arr=[3,8,1,4,5,9,2];
for(let i=0;i<arr.length;i++){
    if(arr[i]>a){
        a=arr[i];
    }
}
console.log(`The largest number in the array is: ${a}`);

ans=arr.reduce((max,curr)=>{
    if(curr>max){
        return curr;
    }
    else{
        return max;
    }
},0)
console.log(`The largest number in the array is: ${ans}`);