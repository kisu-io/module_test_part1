const fs = require("fs");

//Q37
// let i = 3;

// for (; i < 5; i++) {
//   console.log(i);
// }

//Q38
// let i = 3;

// for (; i < 5; ) {
//   console.log(i);
//   i += 1;
// }

//Q39
// let i = 3;

// for (;;) {
//   console.log(i);
//   i += 1;
// }
 
//Q40
// for (let i = 0; i <= 10; i++) {
//   let result = i*i
//   console.log(result);
// }

//Q41 Q42
const data = [
  {
    id: 1,
    name: "A",
    age: 20,
  },
  {
    id: 2,
    name: "B",
    age: 21,
  },
  {
    id: 3,
    name: "C",
    age: 22,
  },
];

function getData(){
  const result = data.filter((e)=>e.age ===21);
  console.log(result);
}
getData()

function JSONData(){
  const result = JSON.stringify(data);
  fs.writeFileSync('db.json', result)
}
JSONData()