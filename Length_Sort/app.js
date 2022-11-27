var text = "Length is what you want";
var reOrder = function(text) {
    const words = text.toLowerCase().split(' ').map((val, i) => {
        return {
            text: val,
            length: val.length,
            index: i
        }
    });
    console.log(words);
    words.sort((a, b) => {
        return a.length - b.length;
    });
    let i = 0;
    let result = '';
    while (i < words.length - 1) {
        result += words[i++].text + ' ';
    }
    result += words[i].text;
    console.log(result);
    return result[0].toUpperCase() + result.substring(1);
    
}
reOrder(text);