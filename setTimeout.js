function a(){
    var b=1;
    setTimeout(function(){
    console.log(b);
    }, 3000);
    console.log("Hello");
}
a();


 for (let index = 1; index <= 5; index++) {
     setTimeout(function(){
        console.log(index);
     },1000 * index);
    
 }

 for (var index = 1; index <= 5; index++) {
    setTimeout(function(){
       console.log(index);
    },1000 * index);
   
}
 

 function a() {
   
   for(var i=1 ; i<=5 ; i++){
      
        function wrapper(b){
            setTimeout(function(){
                console.log(b);
            } , 1000 * b);
        }
        wrapper(i);

   }
}

a()



 