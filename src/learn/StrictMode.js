

let mistypeVariable;

// Assuming no global variable mistypeVarible exists
// this line throws a ReferenceError due to the
// misspelling of "mistypeVariable" (lack of an "a")
mistypeVarible = 17;

function sum(a, a, c) {
    // syntax error

    return a + a + c; // wrong if this code ran
}

console.log(sum(7,8,9))
console.log(7+8+9)
