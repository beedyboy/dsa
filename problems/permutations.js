/**
 * Write a function that takes in an element and returna  2D
 */

const permutations = (elements) => {
    if(elements.length === 0) return [[]];

    const firstEl = elements[0];
    const rest = elements.slice(1);
 
    const permsWithoutFirst = permutations(rest);
    console.log({permsWithoutFirst});
    const allPermutations = [];
    permsWithoutFirst.forEach(perm => {
        console.log("XXXXXXXXXXXXXXXX")
        console.log({perm})
        for (let i = 0; i <= perm.length; i++) {
            const permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)];
            console.log('====================')
           console.log({permWithFirst})
            allPermutations.push(permWithFirst);
        }
    })
    return allPermutations;
}

console.log(permutations(['a', 'b', 'c']));