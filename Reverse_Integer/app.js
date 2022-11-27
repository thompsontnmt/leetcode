var x = 34567;
var reverse = function (x, result = 0) {
    while (x !== 0) {
        let digit = (x % 10);
        x = Math.trunc(x / 10);
        result = (result * 10) + digit;
        console.log(result);
    }
    console.log(result);
    return result;
}