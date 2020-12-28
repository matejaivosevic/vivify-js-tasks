var globalScopeVariable = 1;

function scopeTesting() {
    var localScopeVariable = 2;
    for(var i = 0; i < 10; i++) {
        var m;
        let n;
    }
    console.log(m); //undefined - var m se vidi van petlje jer je njen scope cela funkcija, undefined jer je m samo deklarisana ali ne i inicijalozovana
    console.log(globalScopeVariable); //uspesno pristupanje varijabli
    //console.log(n); //ReferenceError - let ima scope unutar bloka u kom je definisana tako da se ne moze videti van for petlje
}
//console.log(localScopeVariable); //ReferenceError: var se ne moze videti izvan svog scope-a odnosno izvan funkcije u kojoj je definisana

scopeTesting();