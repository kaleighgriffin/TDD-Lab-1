function translate(input) {
    // convert to lowercase
    input = input.toLowerCase();
    // init array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    // init vowel index to 0
    let vowelIndex = 0;

    if ( vowels.includes(input[0]) ) {
        // if first letter is a vowel
        return input + "way";
    } else {
        // if first letter isn't a vowel
        for (let letter of input) {
            // loop until you find first vowel index
            if ( vowels.includes(letter) ) {
                // store vowel index
                vowelIndex = input.indexOf(letter);
                break;
            }
        }
        // add string together
        return input.slice(vowelIndex) + input.slice(0, vowelIndex) + "ay";
    }
}

module.exports = translate;