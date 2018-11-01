/*const http = require ('http');
const fs = require('fs'); 

//404 response
function send404response(response)
{
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Error 404: Page not found');
    response.end();
}

//handle user request
function onRequest(request, response) 
{
    if (request.method == 'GET'&& request.url == '/' )
    {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./server.html').pipe(response);
    }
    else
    {
        send404response(response);
    }

}

/*
function onRequest(request, response) 
{
    console.log('user made a request' + request.url);
     response.writeHead(200, {'Content-Type': 'text/plain'});
     response.write('Here is some data');
     response.end();
}
*/


http.createServer(onRequest).listen(5500);
console.log('Server is now running... ');

/*module.exports = {

}
var url = 'http://mylogger.io/log';

function log (message)
{
    console.log(message);
}

module.exports.Funcctionlog = log;


var movies = require('./movies');
movies.favMovie = 'THE SKY';
console.log('Ahmed Fav movies is: ' + movies.favMovie);

console.log(__dirname);
console.log(__filename);
*/

