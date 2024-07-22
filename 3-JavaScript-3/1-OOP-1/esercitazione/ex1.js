class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location
    };

    confronto = function (obj) {
        if (this.age > obj.age)
            return this.firstName + " è più vecchio di " + obj.firstName;
        else if (this.age < obj.age)
            return obj.firstName + " è più vecchio di " + this.firstName;
        else
            return obj.firstName + " e " + this.firstName + " hanno la stessa età";
    }
}

let user1 = new User("Mario", "Rossi", 50, "Genova");
let user2 = new User("Giulia", "Verdi", 50, "Milano");

console.log(user1.confronto(user2));

