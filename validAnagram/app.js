var s = "anagram";
var t = "nagaram";
var validAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    return reorder(s) === reorder(t);

};

const reorder = (str) => str
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');

validAnagram(s, t);