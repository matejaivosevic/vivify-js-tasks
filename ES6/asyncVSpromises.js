
function promiseFunc(string) { 
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(string);
      }, 2000);
    });
  }
  
  async function asyncFunc() {
    const myPromise = await slowlyResolvedPromiseFunc("Hi!");
    console.log(myPromise);
  }
  
//asyncFunc();

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const hi = async () => {
    await wait(3000);
    console.log('Hi!');
}
const testing = async () => {
    await hi();
    console.log('Hello!');
}

//testing();
//Hi!
//Hello!


function SayHello() {
    Hi()
    .then(console.log('Hello!'))
}

function Hi() {
    return new Promise((resolve, reject) => {
        resolve(console.log('Hi!'));
    });
}

SayHello();
//Hi!
//Hello!