const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(word) {return cats.push(word)}
function destructivelyPrependCat(word) {return cats.unshift(word)}
function destructivelyRemoveLastCat(word) {return cats.pop(word)}
function destructivelyRemoveFirstCat(word) {return cats.shift(word)}
function appendCat(word) {return [...cats, word]}
function prependCat(word) {return [word, ...cats]}
function removeLastCat(word) {return cats.slice(0,cats.length-1)}
function removeFirstCat(word) {return cats.slice(1)}