
function varTesting() {
    var variable;

    if(true) {
        var functionScoped = 4;
    }
    console.log(functionScoped); //4
}

console.log(hoistingVar); //undefined - pristupili smo varijabli hoistingVar, undefined je iz razloga sto hoisting vazi za deklaraciju ali ne za inicijalizaciju
var hoistingVar = 2;

var n = 3;
var n = 5;
console.log(n); //5 - var moze biti redeklarisan

varTesting();
//console.log(variable); not defined - var ima function scope