const coding = ['js','php','java','.net']

coding.forEach( (item) => {
        console.log(item)
} )

const val = coding.forEach( (item) => {
    return item
} )
console.log(val)

const shoppingCat =[
    {
        courseName : 'JAva',
        price:200
    },
    

    {
        courseName : 'php',
        price:300
    },

]
const info = shoppingCat.reduce( (accu,item) => {
    return accu + item.price
},0 )
console.log(info)