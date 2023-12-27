const nums=[1,2,3,4,5,6,7,8,9,10];
const newNums=[];
for(let i=0; i<nums.length; i++){
    
        newNums.push(nums[i]**2);
    }
console.log(newNums);
const newNums2=nums.map(function(item, index) {
    return item**2;     
});
console.log(newNums2);
const newNums3=nums.map(item => item**2);
console.log(newNums3);
const evenNums=nums.filter(function(item, index) {
    return item%2===0;
});
console.log(evenNums);
const evenNums2=nums.filter(item => item%2===0);
console.log(evenNums2);
const sum1=nums.reduce(function(acc, cur) {
    return acc+cur;
},0);
console.log(sum1);
const sum2=nums.reduce((acc, cur) => acc+cur);
console.log(sum2);
let three=nums.find(function(item) {
    return item===3;
});
console.log(three);
let three2=nums.find(item => item===4);
console.log(three2);
let inndexOfThree=nums.findIndex(function(item) {
    return item===3;
});
console.log(inndexOfThree);
let inndexOfThree2=nums.findIndex(item => item===3);
console.log(inndexOfThree2);
let allEven=nums.every(function(item) {
    return item%2===0;
}); 
console.log(allEven);
console.log(nums.some(function(item) {
    return item>0;
}));
console.log(nums.some(item=>item<0));   
console.log(nums.every(item=>item>0));
const now=new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());


