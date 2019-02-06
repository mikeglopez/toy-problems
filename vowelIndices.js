/*
From: CodeWars
By: willjharmer
Date: 02/05/19

We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTE: Vowels in this context refers to English Language Vowels - a e i o u y

NOTE: this is indexed from [1..n] (not zero indexed!)
*/

function vowelIndices(word){
  var vowels = /[aeiou]/gi;
  var output = [];

  for (var i = 0; i < word.length; i++) {
    if (word[i].match(vowels)) {
      output.push(i + 1);
    }
  }
  return output;
}

vowelIndices('apple'); // [1, 5]
vowelIndices('nLYqDybbNImuGpV'); // [3, 6, 10, 12]
vowelIndices('KOqSYzyFkRUVYq'); // [2, 5, 7, 11, 13]