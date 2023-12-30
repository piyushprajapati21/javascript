//for loop
const array = [1,4,6,7,9]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}

console.log('********** Tables ***********')

for(let i=1; i<=2; i++)
{
    console.log(`----- ${i} table ----`)
    for(let j=1; j<=10; j++)
    {
        console.log(`${i} * ${j} = `,i*j)
    }
}

/* design
*
**
*** */
let str = '\n\n-------------\n\n';
for(let i=1; i<=20; i++)
{
    for(let j=1; j<=i; j++)
    {
        str +='*' 
    }
    str +='\n' 
}
console.log(str)