function  functionName (argument) {
    return 'I am a function'
}
console.log(functionName());
function addTwonumbers(a,b) {
   return sum=a+b
    
}
console.log(addTwonumbers(2,3));
// Arrow function   
const addTwonumbers2 = (a,b) => {
    return sum=a+b
}  
console.log(addTwonumbers2(2,3));
const addTwonumbers3 = (a,b) => sum=a+b
console.log(addTwonumbers3(2,3));
const addTwonumbers4 = (a,b) => a+b
console.log(addTwonumbers4(2,3));
const addTwonumbers5 = (a,b) => {
    console.log('Hello');
    return a+b
}
console.log(addTwonumbers5(2,3));
// function getWeatherCondition() {
//     weather=prompt('Enter weather condition').toUpperCase()
//     result=''
//     switch (weather) {
//         case 'SUNNY':
//             result='It is just shiny day go out and have fun'
//             break;
//         case 'RAINY':
//             result='Take your Umbrella'
//             break;
//         case 'WINDY':
//             result='It is very Windy, take care of yourself you taken'
//             break;
//         case 'SNOWY':
//             result='It is full of snow'
//             break;
//         default:
//             result='Not a valid weather type'
//             break;
//     }
 
//     return result
// }
// console.log(getWeatherCondition());
function generateEvenNums() {
    const evenNums=[]
    for (let i = 0; i < 100; i++) {
        if (i%2==0) {
            evenNums.push(i)
        }
        
    }
    return evenNums
}
console.log(generateEvenNums());
/* function calculateWeight(mass,gravity=9.81) {
    return mass*gravity
}
console.log(calculateWeight(75)); */
const calculateWeight2 = (mass,gravity=9.81) => {
    W=mass*gravity
    return W.toFixed(2) + ' N'
}
console.log(calculateWeight2(75));
console.log(calculateWeight2(75,1.62));
const calculateAreaOfCircle = (r) => {
    return (Math.PI*r**2).toFixed(2) + ' m2'
}
console.log(calculateAreaOfCircle(10));