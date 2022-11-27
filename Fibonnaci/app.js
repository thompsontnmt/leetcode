/**
 * fib sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34...]
 * Logic: nth fib = (n-1) + (n-2)
 *  if n = 0, return 0
 *  if n = 1, return 1
 *  solving recursively
        * use caching or memoization
        * create a memoize that stores the results so we dont have to re calculate every nth term.
 */

var fib = function(n, memoize = [0, 1, 1]) {
    if (n in memoize) {
        return memoize[n];
    }
    memoize[n] = fib(n-1) + fib(n-2);
    console.log(memoize);
    return memoize[n];
}
let n = 5;
console.log(fib(n));
exports.fib = fib;