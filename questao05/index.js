function invertString(string) {
    let invertString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        invertString += string[i];
    }
    return invertString;
}

const minhaString = 'Mirellinha';
const stringInvertida = invertString(minhaString);
console.log(stringInvertida);

//ahnilleriM