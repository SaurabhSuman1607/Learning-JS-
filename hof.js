
//  let arr=[2,5,7,12];


//  function a(){
//  for( let i=0 ; i<arr.length ; i++){
     
//      console.log(arr[i]*arr[i]); 
//      let d=2*arr[i];
//      console.log(2*d);

//  }

//  a();

//  }


 /// functional programming is happening .
 // we create a function and and we call a=other fucntions

 let arr=[2,5,7,12];
 let area= function(side){
    return side*side;
 }

 let parameter=function(side){
        return side * 4;
 }


 let diagonal=function(side){
    return Math.sqrt(2) * 4;
 }


 let calculate = function ( arr, logic) {
          let res=[];
          for(let i=0 ; i<arr.length ; i++){
            res.push(logic(arr[i]));
          }
          return res;
 }

 console.log(calculate(arr, area));
 console.log(calculate(arr, parameter));


 ///MAP

 var Areaofsquare=arr.map((num) =>{
    return num *num;
 }
 )

 console.log(Areaofsquare);


 ///lets create a polyfills.which is basically implemeting own function by creating one on any 
 //data of js

 Array.prototype.calculate= function (logic) {
     let res=[];
     for(let i=0 ; i<this.length ; i++){
        res.push(logic(this[i]))
     }
       return res;
 }

 let narr=[2,5,7,8];
 var ans=narr.calculate(area);
 console.log(ans);

 //implemeting our own push method by creating polyfills
 Array.prototype.Mypush=function(num){
    let length =this.length;
    this[length]=num;
    return this;
 }

 narr.Mypush(45);
 console.log(narr);


 // Implementing the filter 

   function greaterthan4(num){
      if(num>4) return num;
   }

   var ans1 =narr.filter(greaterthan4);
   console.log(ans1);



   //implementation of reduce 
var arr1=[10,-5,11,27,29,12,456,34,45,987,577,45];

function largestNum(acc ,curr){
 if(acc>curr) return acc;
 else return curr;
}



let ans12=arr1.reduce(largestNum);
console.log(ans1);

const worldCapitals = [
   {
     country: "India",
     capital: "Delhi",
     population: "2cr",
   },
   {
     country: "America",
     capital: "Washington DC",
     population: "6cr",
   },
   {
     country: "France",
     capital: "Paris",
     population: "2cr",
   },
 
   {
     country: "England",
     capital: "London",
     population: "4cr",
   },
   {
     country: "Germany",
     capital: "Berlin",
     population: "2cr",
   },
 ];
 
 //Ans 1.Finding the capital and country of every object in an array format

  function findcapitals(obj){
    return obj.country + "->" + obj.capital
  }


 var ans=worldCapitals.map(findcapitals);
 console.log(ans);

 //Ans 2 . Finding the the populatiob that is same and its time of occruance

    function getCountryPOpulation(acc , cur){
           if(acc[cur.population]){
            acc[cur.population]=acc[cur.population]+1;
           }
           else{
            acc[cur.population]=1;
           }
             return acc;
          }


 var res=worldCapitals.reduce(getCountryPOpulation , {});
 console.log(res);

 //Ans 3 . FINDING THE COUNTRY THAT ARE GREATER THEN 5CR
       function getpopulationless(obj){
       if(obj.population<"5cr"){
        return true;
       }
       }

       function getcountry(obj){
        return obj.country
       }


 var res=worldCapitals.filter(getpopulationless).map(getcountry);
   console.log(res);