//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {
    let wordObj = {}
    let words = phrase.toLowerCase().match(/\w+('\w+)?/g)
    words.forEach((w) => {
        wordObj.hasOwnProperty(w) ? wordObj[w]++ : wordObj[w] = 1;
    })
    return wordObj
};
