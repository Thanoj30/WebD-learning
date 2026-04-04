
// this is a normal code which looks like the name is available 
// in the inner function but it is not available in the global scope 
// because of the closure concept in javascript.
// function outerFunction(){
//     let name="thanoj reddy";
//     function innerFunction(){
//         console.log(name);
//     }
//      innerFunction();
// }
// outerFunction();

function outerFunction(){
    let name="thanoj reddy";
    function innerFunction(){
        console.log(name);
    }
     return innerFunction;
}
let inner=outerFunction();
inner();