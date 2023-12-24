let a =10
const b =20
var c =30
// {} is scope and outside is global scope. .. do not use var 

/** netsed scope */
function one(){
    const username = 'piyush'

    function two(){
        const website = 'google'
        console.log(username)
    }
    //console.log(website)
    two()
}
one()