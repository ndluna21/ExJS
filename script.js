//bind
const person = {
    name: "Luna",
    greet: function() {
        console.log(`Hello, My name is ${this.name}`)
    }
}
const greet1 = person.greet;
greet1(); //undefined
const greet2 = person.greet.bind(person);
greet2(); //Luna

//apply
const per2 = {
    name: "Luan",
    intro: function(age, country) {
        console.log(`Name: ${this.name}, Age: ${age}, Country: ${country}`);
    }
}
const details = [23, "Bac Ninh"];
per2.intro.apply(per2, details)

//call
const per3 = {
    name: "Lunarian",
    introduce: function(age, country) {
        const func2 = function() {
            console.log(`Name: ${this.name}, Age: ${age}, Country: ${country}`);
        }
        func2.call(this)
    }
}
per3.introduce.call(per3, 23, "Bac Ninh")
