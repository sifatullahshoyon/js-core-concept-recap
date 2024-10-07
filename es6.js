const numbers = [22, 40 , 19 , 38];
const students = {
    name : 'SIFAT ULLAH SHOYON',
    age: 23,
    project: ['next js core concepts 1' , 'teach heim' , 'bistro boss']
};

const aboutMe = `My Name is ${students.name}. I'm now ${students.age}. My Bistro Boss Project Mark ${numbers[1]}`;
// console.log(aboutMe);

// Arrow Functions:

const isEven = x => x % 2 === 0;

const sum = (num1 , num2) => {
    const result = num1 + num2;
    return result;
};

const output = sum(50 , 96);

// console.log(output);


// Spread Operator:
const newNumbers = [...numbers];
numbers.push(35100);

// create a new array from an older array & add an element

const currentNumbers = [...numbers , 54];

console.log('numbers' , numbers);
console.log('new numbers' , newNumbers);
console.log('current numbers' , currentNumbers);


