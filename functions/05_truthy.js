//falsy values

//false, 0 , -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", 'false', " ", [], {}, function(){},

let userEmail = [];

if (userEmail.length === 0) {
  console.log("Array is empty");
}

let emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

//Nullish Coalescing Operator(??) : null undefined

let val1;
val1 = 10 ?? 15;
val1 = null ?? 15;
val1 = null ?? undefined;

console.log(val1);
