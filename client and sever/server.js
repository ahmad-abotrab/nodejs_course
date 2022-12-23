const http = require('http');
const fs = require('fs');
const lodash = require('lodash');
const server = http.createServer((request, response) => {
    const num = lodash.random(0,20);
    console.log(num);

    const great = lodash.once(()=>{
        console.log("hello");
    });
    great();
    //  test send basic text and tag html

    // response.setHeader('content-type','text/html');
    // response.write('<h1>Welcome</h1>');
    // response.write('<p>Hello ahmad</p>');
    // response.end();


    /// send full html page

    // fs.readFile('./views/index.html', (err, data) => {
    //     if (err) {
    //         response.setHeader('content-type', 'text/plain');
    //         response.write(err);
    //         response.end();
    //     } else {
    //         response.setHeader('content-type', 'text/html');
    //         response.write(data);
    //         response.end();
    //     }
    // });


    // Basic Route
    // response.setHeader('content-type', 'text/html');
    // let path = './views/';
    // switch (request.url) {
    //     case '/': {
    //         path += 'index.html';
    //         break;
    //     }
    //     case '/about': {
    //         path += 'about.html';
    //         break;
    //     }
    //     default: {
    //         path += '404.html';
    //         response.statusCode = 404;
    //         break;
    //     }
    // }
    // fs.readFile(path,(err,data)=>{
    //     if(err){
    //         console.log(err);
    //         response.end();
    //     }
    //     response.write(data);
    //     response.end();
    // });
});

server.listen((3000), 'localhost', () => {
    console.log('listen 3000');
})