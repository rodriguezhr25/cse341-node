const fs = require('fs');
const usersArray = ["Hector"];
const requesteHandler = (req, res) => {
    const url = req.url;
    const method = req.method; 
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Username</title></head>');
        res.write('<body><form action="/create-user" method="POST"><label>Username</label><input type= "text" name="username"><button type = "submit" >Save</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users List</title></head>');
        res.write('<body>');
        res.write('<ul>');

          // Loop through users using for...of loop to display the list
        for (const user of usersArray) {
            res.write(`<li>${user}</li>`);
        }
 
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];     
        req.on('data', chunk =>{
            body.push(chunk);
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); 
            const newUser =  parsedBody.split('=')[1]; 
            usersArray.push(newUser);
            console.log(newUser); //username = user-input
        });
        res.statusCode = 302;
        res.setHeader('Location' , '/');
        return res.end();
    }
   


}

 module.exports = {
     handler: requesteHandler, 
 };

