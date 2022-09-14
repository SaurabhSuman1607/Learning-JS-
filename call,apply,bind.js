 let cricketer={
    name : "Kapil",
    sirname : "Dev",


 };
//  cricketer.welcome();

 let cricketer2={
    name : "Ravi",
    sirname : "shastri",

    // welcome : function(){
    //     console.log(`Welcome ${this.name} ${this.sirname}`);
    //   }
 }

 let welcome=function(email, mobilenumber){
     console.log(`welcome ${this.name} thank you for giving us the ${email} and this is my ${mobilenumber}`);
 }

//  Cricketer2.welcome();
// 
 //function borrow
 //call a method of an object , substituting another object for the current object
 
//  cricketer.welcome.call(cricketer2);


//  welcome.call(cricketer2);


///apply method-> same as call but arg in arr
 welcome.apply(cricketer2,["Saurabh@gmail.com" , "9971064028"]);
 welcome.apply(cricketer ,["Mayank@gmail.com" , "8876789767" ]);

 ///bind method-> same as call, but fn is be called explicitly

 let binded=welcome.bind(cricketer , "Saurabh@gmail.com" , "8285883956");

  binded();



  //Polyfill of bind

   let car= {
       name : "thar" ,
       brand : "Mahindra"
   }

   let description= function (date , price){
     console.log(`i have brought ${this.car} ${this.brand} on ${date} with rs ${price} `);
   }

   Function.prototype.mybind= function (...args ) {
    let fnobj=this;
    let params=args.slice(1);
     return function () {
       fnobj.apply(args[0] , params);
     }
   }

   var res=description.mybind(car , "22July","20LAkhs");
    res();