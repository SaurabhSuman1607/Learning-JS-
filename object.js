var obj={};
console.log(obj);

var person={
   Name : "Saurabh",
   Age : 23 ,
   phoneNo : 9868837329,
   isMale : true ,
   Height : "344cm",
   "School Name" : "DAV Public School" 

};

console.log(person);

 // dot noatation
 
 console.log(person.Age);
 console.log(person["School Name"]);

 // Square bracket notation

 console.log(person["phoneNo"]);


 //nesting  of objects

 var  CaptainAmerica = {
    firstName : "Steve" ,
    lastName : "Rogers" , 
    friends  : ["Bucky"  , "Tony"  , "Natasha"],
    age : 115 ,
   
     isAvenger : true ,
     address: {

        state : "UP",
        city : "Delhi"
     },
     sayHi : function () {
        console.log(`hello my name is ${CaptainAmerica.firstName} ${CaptainAmerica.lastName}`);
     }

 }

 console.log(CaptainAmerica.friends);
CaptainAmerica.sayHi();

//looping over objects
for(let key in CaptainAmerica){
    console.log(key);
    console.log(CaptainAmerica[key]);
}

//delete a key for an objects
delete CaptainAmerica.age ;
console.log(CaptainAmerica);

// From here let see cloning and everthing

 var obj1 ={
    name:"Saurabh" , 
    Age : 23 , 
      };

  let clone={};    

  Object.assign(clone , obj1 ,{isMale :true} , {favFood : "Pizza"});
  console.log(clone);

  obj1.name="Mayank";
  console.log(obj1);
  console.log(clone);