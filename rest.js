// const array=[1,2,3,4,5]

// const [one,two,...rest]=array


// console.log(one);
// console.log(two);
// console.log(rest);

//-----------------------------------------------------
      

const obj={a:1,b:2,c:3,d:4}
const {a,b,...rest}=obj
console.log(rest);


//-------------------------------------------------------


function sum(a,b,...x){
   console.log(a,b);
   console.log(x);
}

sum(1,2,3,4,5,6,7,8)