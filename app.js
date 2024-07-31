// function findLargest(a, b, c) {
//     return Math.max(a, b, c)
// }
// console.log(findLargest(2, 6, 10));
// console.log(findLargest(5, 10, 3)); // Output: 10
// console.log(findLargest(8, 2, 6)); // Output: 8


// function reverseWords(sentence){
// return sentence.split('Hello world!').reverse('world! Hello').join('world! Hello');

// }
// console.log(reverseWords("Hello world!")); // Output: "world! Hello"



// function reverseWords(sentence){
//     return sentence.split('The quick brown fox').reverse('fox brown quick The').join('fox brown quick The');
    
//     }
// console.log(reverseWords("The quick brown fox")); // Output: "fox brown quick The"


// function reverseWords(sentence){
//     return sentence.split('JavaScript is fun').reverse('fun is JavaScript').join('fun is JavaScript');
    
//     }

// console.log(reverseWords("JavaScript is fun")); // Output: "fun is JavaScript"



// function findLongestWord(words) {
//     return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
// }

// console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // Output: "banana"
// console.log(findLongestWord(["dog", "elephant", "cat"])); // Output: "elephant"
// console.log(findLongestWord(["red", "blue", "green"])); // Output: "green"




function countWords(sentence) {
    return sentence.split(' ').reduce((counts, word) => {
        counts[word] = (counts[word] || 0) + 1;
        return counts;
    }, {});
    }

console.log(countWords("hello world hello")); 
// Output: { hello: 2, world: 1 }

console.log(countWords("this is a test this is only a test")); 
// Output: { this: 2, is: 2, a: 2, test: 2, only: 1 }
