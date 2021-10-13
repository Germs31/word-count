//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {
    // initalizing empty obj to return answer in
    let wordObj = {}
    // making sure that pharse is lowercased and remove special characters accept valid ones. 
    let words = phrase.toLowerCase().match(/\w+('\w+)?/g)
    // loop phrase as it was made into an array
    words.forEach((w) => {
        // checks if words are a key in obj and if so add the word as a key and update amount of times it was spotted in phrase. 
        wordObj.hasOwnProperty(w) ? wordObj[w]++ : wordObj[w] = 1;
    })
    // returns obj with words as key and count as value
    return wordObj
};
