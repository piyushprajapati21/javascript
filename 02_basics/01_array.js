//Array

const myArray = [1,2,3,4,5,6,7];
console.table(myArray)

const newArr = myArray.join()
console.log(newArr)

//slice
const arr1 = myArray.slice(1,3)
console.log(arr1)

const arr2 = myArray.splice(1,3)
console.log(arr2)

/** Array details */

const heros = ['thor','superman','batman']
const hero2 = ['flash','spidernam','ironman']

heros.push(hero2);
console.log(heros)

const allheros = [...heros, ...hero2]
console.log(allheros)

const newArr1 = [1,2,3,[4,5,6],7,[8,9]]
console.log(newArr1.flat(Infinity))