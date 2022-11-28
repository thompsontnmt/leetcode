var string = "This Is My amazing string";

var alphaSort = function(string) {
    let result = '';
    let stringArray = string.toLowerCase().split(' ');
    let stringArrayArranged = stringArray.sort().join(' ');
    result = stringArrayArranged[0].toUpperCase() + stringArrayArranged.substring(1) + '.';
    console.log(string);
    console.log(stringArray);
    console.log(stringArrayArranged);
    console.log(result);
}

alphaSort(string);

