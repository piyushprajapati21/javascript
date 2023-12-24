function sayName() {
    console.log('hii');
}
sayName();

function addTwoNumber(num1,num2){
    //console.log( num1 + num2 );
    return num1 + num2;
}
const result = addTwoNumber(5,5);
console.log("Result :" , result)

function loggedUser(username){
    if(username!=undefined)
    {
        console.log(`${username} user just logged in..`)
    }else
    {
        console.log('User undefined .. Please enter user name');
    }
}
loggedUser('PP')

function loggedUser(username='Admin'){
    if(username!=undefined)
    {
        console.log(`${username} user just logged in..`)
    }else
    {
        console.log('User undefined .. Please enter user name');
    }
}
loggedUser('Piyush')


// cart function.  // ... spread operator
function cartPrice(...num1){
    return num1
}
console.log(cartPrice(5,11,15))

// object use in function
const userInfo = {
    name : 'Piyush Prajapati',
    price : '999.99'
}
function userObj(anyObject){
    console.log(`user name is ${anyObject.name} and course price is ${anyObject.price}`)

}
userObj(userInfo);