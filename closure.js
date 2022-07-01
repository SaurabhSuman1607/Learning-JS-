  function outer(){
    var a=7;
     function inner() {
        console.log(a);
     }
     inner()
  }
 
 outer();
 
 var a=7;
 //IN js We can also return a fuction like given below
 function outer(){

    return function(){
        console.log(a);
    }
 }

 var x=outer();
 console.log(x);
 console.log(x());


 //function return along with its lexicographical cope and 

 
