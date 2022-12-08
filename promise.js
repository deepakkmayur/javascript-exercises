console.log("start");

 let promise=new Promise((resolve,reject)=>{
  resolve("hiii")
 })

 promise.then((data)=>{console.log(data);})

 
 console.log("end");