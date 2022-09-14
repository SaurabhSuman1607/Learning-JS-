
// So basically  using this ... it will spread it into the other array or object
// this is called as spread operator
let nums=[12,23,34,45,56];

 let nu=[...nums , 23 ,34 ,45];

 console.log(nu);
 console.log(nums);

 const user= {
    name: "saurbah",
    age : "22" , 
     residence: {
     state: "delhi",
     capital : "new Delhi"
     }
     
 }

 const newUser={...user , age:24 , hobbies: "cricket"};
 console.log(newUser);
 user.residence.state="UP";
  console.log(user);

 
 //rest operator
//it is used to merge all of the function arguments into an array 
function foo(...args) {
    console.log(args);
    args.forEach(arg=>console.log(arg))
    
}
foo("hello", "how", "are", 1, 2, 3, 4); 