// Experiment 3

let arr = ['tom', 'jerry'] 

//indexing
console.log(arr[0]);
console.log(arr[1]);

//indexOf
console.log(arr.indexOf('tom'));
console.log(arr.indexOf('jerry'));
console.log(arr.indexOf('rohit'));

//push
console.log(arr.push('spike'));
console.log(arr);

//pop
console.log(arr.pop());
console.log(arr);

//unshift
console.log(arr.unshift('spike'));
console.log(arr);

//shift
console.log(arr.shift());
console.log(arr);

//sort
console.log(arr.sort());

//reverse
console.log(arr.reverse());

//forEach
arr.forEach(function(i){
    console.log(i);
})

//concat
let firstName = 'Rohit '
let lastName = 'Kavuluri'
let fullName = firstName.concat(lastName)
console.log(fullName);