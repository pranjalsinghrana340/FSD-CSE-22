const num=[1,2,4,6,8,7,9];
const even=num.filter((i)=>(i%2==0) );
console.log("num",num);
console.log("even", even);
const square=even.map( (i)=>(i*i))
console.log("square", square)
const sum = square.reduce((s,i)=>(s+i))
console.log("Sum", sum)