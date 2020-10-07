const ganesharr = [1,2,3,4,5,6,7];
const newGaneshArr = ganesharr
                 .filter(a => a % 2 ===0)
                 .map(a => a * a)
                 .reduce((a,b) => a+b);
console.log(newGaneshArr); 