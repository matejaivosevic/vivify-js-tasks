let counter = 0;

var Character = function() {
    if(this.constructor === Character) {
        throw new Error('Character can not be instantiated!');
    }
    this.x = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    this.y = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
}

Character.prototype.showPosition = function() {console.log('[' + this.x + ', ' + this.y + ']');}
Character.prototype.setPosition = function(x, y) {
    if(x < 0 || x > 10 || y < 0 || y > 10) {
        throw new Error('Choose valid position!');
    }
    this.x = x;
    this.y = y;
}

var PlayerCharacter = function() {
    Character.call(this);
    counter++;
}
var  NonPlayerCharacter = function() {
    Character.call(this);
    counter++;
}

PlayerCharacter.prototype = Object.create(Character.prototype);
PlayerCharacter.prototype.constructor = PlayerCharacter;
NonPlayerCharacter.prototype = Object.create(Character.prototype);
NonPlayerCharacter.prototype.constructor = NonPlayerCharacter;

var playerCh = new PlayerCharacter();
var playerCh2 = new PlayerCharacter();

//playerCh.setPosition(1,61); //error
playerCh.showPosition();
playerCh.setPosition(2,7);
playerCh.showPosition(); //[2,7]
console.log(counter);


