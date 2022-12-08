
console.log("start");


function display(cb) {
   cb("hai")
}

function cb(data) {
   console.log(data);
}

display(cb)


console.log("end");
