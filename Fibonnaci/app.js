/**
 * fib sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34...]
 * Logic: nth fib = (n-1) + (n-2)
 *  if n = 0, return 0
 *  if n = 1, return 1
 *  solving recursively
        * use caching or memoization
        * create a memoize that stores the results so we dont have to re calculate every nth term.
 */
// O(n) time, O(n) space
var fib = function(n, memoize = {1: 0, 2: 1}) {
    if (n in memoize) {
        return memoize[n];
    }
    memoize[n] = fib(n-1) + fib(n-2);
    console.log(memoize);
    return memoize[n];
}
let n = 5;
console.log(fib(n));

/*
more efficient: store last two results in array like [0, 1]
push the newly calculated result to the array and continue interating through
the sequence
*/
// O(n) time, O(1) space
var fib = function(n, arr = [0, 1]){
    for (let i = 2; i < n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr[n];
}
