/* 
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

EXAMPLE:
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/


console.clear();

let wordArr = [1, 2, 3, 4, 5, 6];

function smash (words) {
    let sentence = '';
    
    if (words.length === 0) {
        return '';
    }

    for (let i = 0; i < words.length - 1; i++) {
        sentence += words[i] + ' ';
    }
    sentence += words[words.length - 1];
    return sentence;
    
};


// SUPER PAPRASTAS VARIANTAS nudoti .join() masyvo items pavercia i string?

// function smash (words) {
//     return words.join(' ')
// };

// console.log(typeof smash(wordArr)); // dbr type yra string

console.log(smash(wordArr));