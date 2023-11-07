let score = "33";

let num = "33abc";

let valueInNumber = Number(num);
console.log(valueInNumber); //NaN

//"33" => 33
//"33abc" => NaN
//true => 1, false => 0

let isLoggedIn = "";

let BooleanConvt = Boolean(isLoggedIn);
console.log(BooleanConvt);

//1 => true
//"" => false
//"abc" => true

let someNumber = 65;

let StringConvt = String(someNumber);
console.log(typeof StringConvt);
