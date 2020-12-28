
this.n = 23;
self = this;

function regular() {
    console.log(this.n);
}

function regularSelf() {
    console.log(self.n);
}

const arrow = () => {
    console.log(this.n);
}

regular(); //undefined
regularSelf(); //23
arrow(); //23



