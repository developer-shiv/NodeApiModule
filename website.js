const http = require('http');
const fs = require('fs');

const port = process.env.PORT ||3000;

const server= http.createServer((req,res)=>{
        console.log(req.url);
       
        res.setHeader('Content-Type','text/html');
        if(req.url== '/'){
            res.statusCode=200;
            res.end('<h1>This is code with shiv</h1><p> this is way to rock the world</p>');
        }
        else if(req.url== '/about'){
            res.statusCode=200;
            res.end('<h1>About code with shiv</h1><p>Hey this is way to about rock the world</p>');
        }
        else if(req.url== '/userapi'){
            res.statusCode=200;
            fs.readFile(`${__dirname}/userApi/userApi.json`,'utf-8',(err,data)=>{
                console.log(data);
                res.end(data);
            })
           
        }
        else if(req.url== '/index'){
            res.statusCode=200;
           const data=fs.readFileSync('index.html')
            res.end(data.toString());
        }
        else {
            res.statusCode=404;
            res.end('<h1>Not found this is page</h1>');
        }
});

server.listen(port,()=>{
    console.log(`Server is Listening on port ${port}`)
});