
//<-------     rules   ----------->
// 1. The value of this is evaluated during a run-time
// 2. Value of this is depend upon from where this is called
// 3. this points to an object from where the function is called
// 4 . arr, obj , fn are all passed by refernce

//1. TYPE ONE QUESTIONS 
  function type1(){
    console.log(this.name);
  }

  var name="JavaScript";
  type1();
  // when the function is called globally then this is always pointing to window object

  //2.

  function type2(){
    console.log(this.lname);
  }
  var lname="Tiwari";

  var obj = {
    lname : "Singh" ,
    type2 
  }

  obj.type2()
    // Here because function is in object so in object this will be poiniting and it will check 
    // whether it is present or not it will only check in object becaus of rule 3
 //3.

 var food="Pizza";
 var obj={
    food: "Pasta" ,
    eat: function() {
        console.log("I like eating" + this.food);
    }
 }

 var foo=obj.eat;
 foo();

 //here because the function definition will be there in foo but in line 45 we have called the function 
 // which is globally called .  

 //4.
 var length=1;
  function square(){
    let cb= function() {
        console.log(this.length * this.length);
    };
    setTimeout(cb,2000);
  }

  var obj = {
      length: 3,
      square
  }

  obj.square();