const numbers = [45 , 67 , 85];

const num1 = numbers[0];
const num2 = numbers[1];
const num3 = numbers[2];

// console.log(num1, num2, num3);

const [num11 , num22 , num33] = [45 , 67 , 85];

// console.log(num11 , num22 , num33);

const [x , y , z] = numbers;

// console.log('x , y, z' , x , y , z);

function numbersOfArr(num1, num2) {
    const totalNumber = [num1, num2];
    return totalNumber;
}

const [first, second] = numbersOfArr(96, 65);

// console.log(first, second);


const students = {
    name : 'SIFAT ULLAH SHOYON',
    age: 23,
    project: ['next js core concepts 1' , 'teach heim' , 'bistro boss']
};

const [firstProject, secondProject] = students.project;

console.log(firstProject, secondProject);


// Object Destructuring oh same