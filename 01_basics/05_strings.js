const name = 'piyush'
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const myname = new String('Piyush');
console.log(myname[0]);

console.log(myname.__proto__);

console.log(myname.length);
console.log(myname.toUpperCase());

console.log(myname.charAt(4));
console.log(myname.indexOf('y'));

const newstr = myname.substring(1,3)
console.log(newstr);

const newstrn = myname.slice(-3,3)
console.log(newstrn);

console.log(newstr.trim());

let url = 'http://www.yahoo.com/piyush%20prajapati'
url.replace('%20','-')
console.log(url)

console.log(url.includes('wwwww'))

console.log(url.split('/'))