const http = require('http');
const server =  http.createServer((req , res) =>{
    if(req.url === '/')
    {
        res.end('welcome to page');
    }
    if(req.url ==='/about')
    {
        res.end('here is out shoty story');
    }
    res.end(
        `<h1>oops</h1>
        <p>sorry for inconenience<p/>
        <a href = "/"  back home </a>`
    )
});

server.listen(5000);