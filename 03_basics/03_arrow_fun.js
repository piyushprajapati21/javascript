const user = {
    username : 'Piyush',
    price : 999,


    welcomemsg : function() {
        console.log(`${this.username} welcome`)
    }
}
user.welcomemsg()
user.username = 'Prajapati'
user.welcomemsg()
console.log(this)

//arrow function
const thisFun = () => {
    let username = 'piyush'
    console.log(this.username)
}
thisFun()

const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(5,10))