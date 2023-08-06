import wordBank from "./word-bank.txt";
export const boardDefault = [

["","","",""],
["","","",""],
["","","",""],
["","","",""],
["","","",""],
["","","",""],

];

export const generateWordSet = async () => {
    let wordSet;
    let todaysWord;
    await fetch(wordBank)
      .then((response) => response.text())
      .then((result) => {
        const wordArr = result.split("\n");
        console.log("Word Array:", wordArr); // Debug: Check the contents of wordArr
        todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)].toLowerCase();
        console.log("Today's Word:", todaysWord); // Debug: Check the selected todaysWord
        wordSet = new Set(wordArr.map((word) => word.toLowerCase()));
        console.log("Word Set:", wordSet); // Debug: Check the contents of the wordSet in lowercase
      });
  
    return { wordSet, todaysWord };
  };
  
  
