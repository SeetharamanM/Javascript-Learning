const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    country: 'Canada',
    city: 'Montreal',
    skills: ['HTML', 'CSS', 'JS'],
    getPersonInfo: function () {
        return `${this.firstName} ${this.lastName} ${this.age} ${this.country} ${this.city} ${this.skills }`;
    }
};
console.log(person.firstName); // John
console.log(person); // Doe
person.nationality='Ethiopian'
console.log(person);
console.log(person.getPersonInfo());
const keys=Object.keys(person)
console.log(keys);
const values=Object.values(person)
console.log(values);
console.log(person.hasOwnProperty('firstName'));
if (person.hasOwnProperty('skills')) {
    person.skills.push('Python');
    };
    console.log(person.skills);
const entries=Object.entries(person)
console.log(entries);
const person2=Object.assign({},person,{firstName:'Asabeneh',lastName:'Yetayeh'})
console.log(person2);
