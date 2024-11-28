const newServer = require("http");
const date = require("./module1");


const server = newServer.createServer((req,res) =>{
    res.writeHead(200,{'content-type' : 'text/html'});
    res.write(req.url);
    res.write("Creating new server"+ "\n");
    res.write("today is: " + date.dateTime());
    res.end();
});
server.listen(3001);
