console.log("hello");

function* generatorFunction(i)
{
    while (true)
    {
        yield i++;
    }

}

const gen = generatorFunction(1)
while (true)
{
    console.log(gen.next())
}
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
