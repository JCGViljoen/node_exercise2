const users = require('./person')
console.log(users.Person);

const http = require('http')
const port = ++process.env.Port || 3000

http.createServer((req,res)=>{
    res.end()
}).listen(port, (users,Person) =>{
    console.log(`Server is runnig on port ${port}`);
})