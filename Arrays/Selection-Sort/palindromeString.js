/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    for (let word of words) {
        const reverse = reverseString(word);
        if (word === reverse) {
            console.log(word);
            break;
        }
    }
};

const reverseString = function (word) {
    let reverse = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reverse += word[i];
    }
    return reverse;
};

firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool']);
