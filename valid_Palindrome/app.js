// Leetcode 125

var s = "A man, a plan, a canal: Panama";
var isPalindrome = (s) => {
    if (s.length <= 1) return true;

    let [left, right] = [0, s.length - 1];
    let leftChar, rightChar;
    while (left < right) {
        leftChar = s[left];
        rightChar = s[right];

        if (!/[a-zA-Z0-9]/.test(leftChar)) {
            left++;
        } else if (!/[a-zA-Z0-9]/.test(rightChar)) {
            R--;
        } else {
            if (leftChar.toLowerCase() != rightChar.toLowerCase()) {
                return false;
            }
            left++;
            right--;
            console.log(s);
        }
    }
    return true;
};

isPalindrome(s);