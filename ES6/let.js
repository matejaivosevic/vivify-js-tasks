
let n = 3;
//let n = 5; -> error, let ne moze biti redeklarisana

function letTesting() {
    let n = 4;
    console.log(n); //4 - ako je naziv iste varijable deklarisan u razlicitom scope-u, nece doci do error-a

    if(true) {
        let blockScopedLet = 10;
        let n = 5;
        console.log(n); //5 - nece doci do error-a, let je block scoped
    }
    //console.log(blockScopedLet); -> ReferenceError: not defined
}

console.log(hoistingLet); //ReferenceError -> za razliku od var koji vi u ovom slucaju bio inicijalizovan kao undefined, let nece biti inicijalizovan
let hoistingLet;

letTesting();