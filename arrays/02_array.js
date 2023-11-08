const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const real_depth = [1, 2, 3, [4, 5], 6, 7, [8, [9, 10]]];
// console.log(real_depth.flat(Infinity));

console.log(Array.isArray("Suhani"));
console.log(Array.from("Suhani")); //coverts anything into an array

console.log(Array.from({ name: "hitesh" })); //interesting

let s1 = 10;
let s2 = 20;
let s3 = 30;

console.log(Array.of(s1, s2, s3));
