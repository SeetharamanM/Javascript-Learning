const makeSquare = (n) => {
    return n * n;
}
console.log(makeSquare(5));
const makeCube=(func,n)=>{
    return func(n)*n;
}
console.log(makeCube(makeSquare,5));