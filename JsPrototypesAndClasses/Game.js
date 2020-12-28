let counter = 0;

class Character {
    static get counter() {return counter};
    
    increment() {
        counter++;
    }

    constructor() {
        if(this.constructor === Character) {
            throw new Error('Character can not be instantiated!');
        }
        this.x = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
        this.y = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
        this.increment();
    }

    showPosition() {
        console.log('[' + this.x + ', ' + this.y + ']');
    }

    setPosition(x, y) {
        if(x < 0 || x > 10 || y < 0 || y > 10) {
            throw new Error('Choose valid position!');
        }
        this.x = x;
        this.y = y;
    }
}

class PlayerCharacter extends Character {}
class NonPlayerCharacter extends Character {}


var playerCh = new PlayerCharacter();
var playerCh2 = new PlayerCharacter();

//playerCh.setPosition(1,61); //error
playerCh.showPosition();
playerCh.setPosition(2,7);
playerCh.showPosition(); //[2,7]
console.log(counter);