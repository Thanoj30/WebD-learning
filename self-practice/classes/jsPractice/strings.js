//string is a sequence of characters
let firstname="thanojreddy";
let lastname="reddy";

//using template literals
let name=`this
is me`;

//using string constructor
let name1=new String("its me");
console.log(firstname);
console.log(lastname);
console.log(name);
console.log(name1);

//knowing the type of string
console.log(typeof firstname);
console.log(typeof name);
console.log(typeof name1);

//string concatenation
let fullname=firstname+" "+lastname;
console.log(fullname);

//using template literals
let myname=`${firstname} ${lastname}`;
console.log(myname);

//finding the length of a string
console.log(`Length is ${firstname.length}`);

//change the case of a string
console.log(firstname.toUpperCase());
console.log(lastname.toLowerCase());

//accessing characters in a string
let str="this is me";
console.log(str[0]);
console.log(str[5]);
console.log(str.substring(1,7));
console.log(str.substring(3));

//finding the index of a character in a string
console.log(str.indexOf('i'));
console.log(str.lastIndexOf('i'));

//checking if a string includes a substring
console.log(str.includes('is'));
console.log(str.includes('me'));

//splitting a string into an array
let words=str.split(' ');
console.log(words);