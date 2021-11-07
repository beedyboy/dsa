/**
 * Given a set of n things, there are 2^n possible combinations
 */

function combinations(n) {
  if(n.length === 0) return [[]];
const firstEl =n[0];
const rest = n.slice(1);
const combsWithoutFirst = combinations(rest);
const combsWithFirst = [];
combsWithoutFirst.forEach((el) => {
const combWithFirst = [...el, ...firstEl];
combsWithFirst.push(combWithFirst);
});

return [...combsWithoutFirst, ...combsWithFirst];
} 
console.log(combinations(['a', 'b', 'c']))