let promise=new Promise(function(resolve , reject){

//function is automatically executed when the promise is constructed

setTimeout(() => resolve("done"),1000);

});

console.log(promise);

  