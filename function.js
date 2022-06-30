//1. Function 
function add(num1 , num2) {
    var ans=num1+num2
    return ans;
}

let res=add(4,2);
console.log(res);

function calculator(operand , num1 , num2) {
     if(operand == "+"){
        return function add(num1 , num2){

            return num1 + num2
        }
     }

     else if(operand=="-"){
            return function sub(num1 , num2){
                    return num1-num2;
            }
     }
}

 var ree=calculator("+" , 4 , 5);
 console.log(ree);

 //2. Function expression
 
 var variable_name=function(params){

 }
 variable_name();

 var sayhel = function() {  
    console.log("Hello how are u?");
 }


 sayhel();

 //3. Arrow FUnction

 var add=(num1 , num2) => {
    return num1 +num2;
 }
 let ans = add(23 , 234);
 console.log(ans);


 var sayHi = () =>{
    console.log("Hello Everyone");
 }
 sayHi();
 
  // If there is any single line ans 
 var square =(num) => num * num ;
 
  var ans1 = square(26);
  console.log(ans1);


  var circumfernece = (radius) => {
     let res = 2 * Math.PI * radius;
      console.log(res);
  }

  circumfernece(22);
 
 