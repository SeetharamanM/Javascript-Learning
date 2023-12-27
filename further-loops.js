const Cars = ["BMW", "Volvo", "Saab", "Ford"];
Cars.push("Audi");
Cars.push("Mercedes");
Cars.push("Fiat");
Cars.push("Ferrari");
Cars.push("Lamborghini");
console.log(Cars); 
Cars.forEach((Car, index) => {
    console.log(index+1, Car.toUpperCase());
});
for(const Car of Cars){
    console.log(Car.toUpperCase);
}   
const user={
    firstName:'Asabeneh',
    lastName:'Yetayeh',
    age:250,
    skills:['HTML','CSS','JS'],
    getFullName:function(){
        return `${this.firstName} ${this.lastName}`
    }
}
for (const key in user) {
    console.log(key, user[key]);
}
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  for(const user in users){
      console.log(user, users[user])
 }
 let count=0
 for(const user in users){
     let points=users[user].points
     console.log(points);
     if (points>=50) {
         count++
     }
}
 console.log(count);
 const makeSquare=(num)=>num*num

 function cube (func, n){
        return func(n)*n
     
 }
 console.log(cube(makeSquare, 3));
 function xyz(n){
     return n*n*n
 }
 console.log(cube(xyz, 3));
 console.log(xyz(3));
 function abc(x,y){
     return {
        sum:(x,y)=>x+y,
        product:(x,y)=>x*y,
     }
 }
 console.log(abc().product(2,3));
 console.log(abc().sum(2,3));
