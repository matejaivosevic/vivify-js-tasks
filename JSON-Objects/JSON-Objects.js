
let person = {
    firstName: 'Mateja',
    lastName: 'Ivosevic',
    age: 23
};

let jsonPerson = '{"firstName" : "Mateja", "lastName": "Ivosevic", "age" : 23}';

let convertedToObj = JSON.parse(jsonPerson);
let convertedToJson = JSON.stringify(person);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const jsonArray = '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]';

const convertedArray = JSON.parse(jsonArray);

convertedArray.forEach(num => console.log(num));