
const myPromise = new Promise((resolve, reject) => {
    var n = 1;

    if(n === 1) {
        setTimeout(() => {
            resolve('Success!');
        }, 3000);
    } else {
        setTimeout(() => {
            reject('Error!');
        }, 3000);
    } 
});

myPromise
.then(val => {
    console.log(val);
})
.catch(err => {
    console.log(err);
});

//

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => {
    if(true) {
        setTimeout(() => {
            resolve('Hello!')
        }, 2000);
    }
})
const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hi!');
    }, 1200);
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});