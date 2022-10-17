// Given a string, S, of length N that is indexed from
// 0 to N - 1, print its even - indexed and odd - indexed characters
// as space - separated strings on a single line
// (see the Sample below for more detail).
// Note: is considered to be an even index.Example
// Input :- adbecf
// Print abc def


function processData(input) {
    //Enter your code here
    input.split("\n").reduce((target, item, index) => {
        if (index && Number.isNaN(+item)) {
            let result = item.split('').reduce((target, text, index) => {
                target[+(index % 2 !== 0)] += text;

                return target;
            }, new Array(2).fill('')).join(' ')

            console.log(result);
        }

        return target;
    }, '');
}