const anagram = word => {
    const length = word.length;
    word.forEach(element => {
        console.log(element + anagram(word)
    });
}