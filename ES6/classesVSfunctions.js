
 function hoistingDifferences() {
    var user = new User();
    function User() {}

    var group = new Group(); // can not access before initialization
    class Group {
    }
}

//hoistingDifferences(); funkcije su hoistovane, a klase nisu


//functions
function User() {
    let age = 23;

    function userAge() {
        console.log(name);
    }
}
User.prototype.hi = () => console.log('Hi!');
const user = new User();
user.hi();

//classes
class Group {
    constructor(name) {
        this.name = name;
      }

      groupName() {
        console.log(this.name + ' is a group name.');
      }
}
class FTC extends Group {
    groupName() {
        super.groupName();
    }
}