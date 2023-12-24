// singleton

 const userObj = {name:'Piyush',age:18,location:'regina',email:'piyush@gmail.com'}
 console.log(userObj.name)

 const  newObj = {}
 newObj.email ='piyush@gmail.com'
 newObj.id = '123'

 console.log(newObj);

 const rUsers = {
    email : 'user1@gmail.com',
    fullname:{
        userfullname:{
            fname:'piyush',
            lname:'prajapati'
        }
    }
 }
 console.log(rUsers.fullname.userfullname.fname)

 const obj1 = {1:'a', 2:'b'}
 const obj2 = {3:'w', 4:'x'}

const obj3 = {obj1,obj2}
console.log(obj3)

const obj4 = Object.assign({},obj1,obj2)
console.log(obj4)

const obj5 = {...obj1, ...obj2} //spread
console.log(obj5);