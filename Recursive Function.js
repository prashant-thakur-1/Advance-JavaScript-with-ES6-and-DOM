let sum = function add(num){
    if(num == 0) return 0;
    return num + add(num - 1);
}
let num = 5;
// This will not change the inner function of sum variable to null as the add are locals in the scope only
add = null;
console.log(sum(num));
console.log(add);