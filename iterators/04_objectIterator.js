//for Objects to iterator we will use (for in)loop.

const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift",
};

for (const key in myObject) {
  //   console.log(myObject[key]);
  //   console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];
for (const keys in programming) {
  console.log(programming[keys]);
}
