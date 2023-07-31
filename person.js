function Person (firstName, lastName, email){
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email
}

const person1 = new Person('Jason', 'Viljoen', 'jcgviljoen51@gmail.com')
console.log(person1);
module.export = Person; 