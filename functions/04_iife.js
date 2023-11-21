// IIFE - Immediately Invoked Function Expression (GLobal scope will not pollute & immediately invoked)

(function chai() {
  console.log(`DB Connected`);
})();

((name) => {
  console.log(`DB Connected ${name}`);
})("hitesh");
