const http =require('http');
const fs = require('fs');
const server = http.createServer((req,res) =>{
 const url = req.url;
 if(url === '/'){
    res.write('<html>');
    res.write('<head><title>my first page</title>');
    res.write(' this is a / something massage</title></head> <body><h1>hello from my node.js server!</h1></body');
    res.write('</html>');
     return res.end();

}
if(url ==='/massage' && method ==='POST') {
fs.writeFileSync('massage-type', 'DUMMY');
res.statusCode =302
res.setHeader('location','/user')
return res.end();
}
res.setHeader('content-type', 'text/html');
res.write('<html>');
res.write('<head><title>my first page</title></head>');
res.write('<body> <form action ="/massage" method="POST"> user name<input type = "text"><button> sumbit</botton> </form></body>');
res.write('</html>');
res.end();
//req.write();

});
server.listen(3000);
