//1

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.map((n, i) => {
    array[i] = n * n;
});

console.log(array);

//2

(() => {
    let sum = 2 + 3;
    console.log(sum);
})();

//3

/*
function timesTwo(number) {
  return number * 2
}
*/

const timesTwo = number => number * 2;

console.log(timesTwo(6));