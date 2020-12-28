
const colors = ['Blue', 'Green', 'Purple', 'Orange', 'Yellow', 'Red', 'White', 'Black'];

for(let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

console.log('---');

colors.forEach(num => console.log(num));

const rotateRight = arr => arr.unshift(arr.pop());

rotateRight(colors);

const sumNumbers = arr => arr.reduce((a, value) => a + value, 50);

const nums = [1, 2, 3, 4, 5];

console.log(sumNumbers(nums));

const createArray = num => {
    const reverseKeys = [...Array(num).keys()].reverse();
    return [...Array(num+1).keys(), ...reverseKeys];
}

var newArray = createArray(10);

//zoo

var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
  ];

const zooIntentory = arr => {
    const newArray = [];
     arr.map((n, i) => {
        newArray[i] = `${n[0]} the ${n[1][0]} is ${n[1][1]}`
    });
    return newArray;
}

console.log(zooIntentory(myZoo));