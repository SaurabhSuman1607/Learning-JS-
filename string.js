var st="hello pepcoders";
console.log(st);
console.log(st[3]);

console.log(st.length)

//string in js is immutable

// slice method
var sle=st.slice(3,7);
console.log(sle);
console.log(st);

console.log(st.slice(2,4));

//substring

var sle=st.substring(2,4);
console.log(sle);

//toupper/lower case

var up="HELLO";
console.log(up.toLowerCase());
var down="mayank";
console.log(down.toUpperCase());

//split 

var res="Hello there is saurab";
console.log(res.split(" "));

console.log(res.split("th"));

//concatination

let firs="HELLo12 this is ";
let sec="Saurabh"

console.log(firs+sec);

let concatination1=firs.concat(sec, " U only love once");
console.log(concatination1);

//trim

var be="     This is saurabh   ";
console.log(be.trim());
console.log(be.trim().length);

//const

const re="mayank";
console.log(res);