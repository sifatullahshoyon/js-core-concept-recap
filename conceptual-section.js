const id = "54";

const fullId = id.padStart(6 , '0');
// console.log('pad start' , fullId);

const idEnd = '111';
const fullIdEnd = idEnd.padEnd(6 , '0');
// console.log('pad end' , fullIdEnd);

// Daynamic ID Generator
const firstOrder = 1;
const firstId = firstOrder.toString().padStart(6 , '0');
console.log(firstId);

const secondOrder = Number(firstId.substring(3)) + 1;
const secondId = secondOrder.toString().padStart(6 , '0');
console.log(secondId);