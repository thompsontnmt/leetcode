var reverse =  function(s) {
    let i = 0, j = s.length - 1;
    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
    console.log(s);
}
var s = ['h','e','l','l','o'];
reverse(s);