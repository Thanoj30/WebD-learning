try{
    console.log("this is try block");
    console.log(a);
}
catch(err){
    console.log("error is:", err);
    console.log("this is catch block");
}
throw new Error("this is created error");