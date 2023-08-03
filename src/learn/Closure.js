function outerFunction()
{
    let i=1;

    function innerFunction()
    {
        return i++;
    }

    return innerFunction
}

const test1 = outerFunction();

console.log(test1())
console.log(test1())

const test2 = outerFunction();

console.log(test2())