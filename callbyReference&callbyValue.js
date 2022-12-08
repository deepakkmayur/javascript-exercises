//both call by value and pass by value are same

//call by value (pass by value ) 


let a=10

function display(a){
   a++
  console.log(a);
}


display(a)

console.log(a); //here even tough a value is increasing inside the functon but its not changing the value of a outside



//call by reference  for non-primitive data types
let obj={a:10}

function display(obj){
   obj.a++
  console.log(obj);
}


display(obj)

console.log(obj); //here both inside and outside value is changing because reference is passing ie, the value is changing for the same address