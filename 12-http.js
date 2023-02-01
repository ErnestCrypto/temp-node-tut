// BUILT IN MODULE HTTP 
const http = require('http');

// create a server
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welocme to our home page');
    }
   else if (req.url === '/about'){
    res.end('Here is sour short history');

   }
   else{
 res.end(`
   <h1>Ooops</h1>
   <p> We can seem to find the page you are looking for </p>
   <a href = "/">back home</a>
   `);
   }

  
   


});

// listen on port 5000
server.listen(5000);
console.log('Listen on port 5000...');



















