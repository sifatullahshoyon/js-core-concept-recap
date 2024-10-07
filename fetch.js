const students = {
    name : 'SIFAT ULLAH SHOYON',
    age: 23,
    project: ['next js core concepts 1' , 'teach heim' , 'bistro boss']
};

const studentsJson = JSON.stringify(students);
// console.log(studentsJson);

const studentsParse = JSON.parse(studentsJson);

// console.log(studentsParse);

// fetch

// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.error(err))

const keys = Object.keys(students);
// console.log(keys);

const values = Object.values(students);

const values2 = values[1];
const secondProject = values2[1];
console.log(values2);
console.log(secondProject);