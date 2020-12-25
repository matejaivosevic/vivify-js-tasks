
const n = 4;
//n = 5; -> TypeError, const se ne moze azurirati, niti redeklarisati, sto znaci da se const mora inicijalizovati u vremenu deklaracije

const obj = {
    'name' : 'Mateja',
    'age' : 22
}
obj.age = 23; //iako se const ne moze azurirati, ukoliko je const objekat, njegovi atributi se mogu menjati


function constTesting() {
    const n = 5; // -> nece baciti error jer je const block scoped, isto kao i let

    if(true) {
        const m = 1;
    }
    console.log(m); //-> ReferenceError: not defined
}

console.log(hoistingConst); //-> isto kao i let, const nece biti inicijalizovan kao undefined
const hoistingConst;

constTesting();