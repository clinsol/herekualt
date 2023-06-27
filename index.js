// const c={
//     average:(a,b)=>{
//         console.log((a+b)/2);
//     },

//     percentage:(a,b)=>{
//         console.log((a/b)*100);
//     },
// };

// module.exports=c;

//Build IN

// const fs=require('fs');

// console.log(fs);

//This is an async method
// fs.readFile("./sample.txt","utf-8",(err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

//For an sync method
// const c=readFileSync("sample.txt","utf-8");
// console.log(c);

// const a="I wananaa sort things out";
// fs.writeFile("./New1.txt", a, (err) => {
//     if (err) throw err;  
//     console.log("File written");
// });

// fs.writeFileSync("./New1.txt",a);


// console.log("I am first");


// const path = require("path");

// const a=path.extname("index.js");

// console.log(a);


// const os=require("os");

// const a=os.totalmem();

// console.log(a);


// const pokemon=require("pokemon");

// console.log(pokemon.random());

const http = require("http");
const fs=require("fs");



const PORT=2000;
const hostname="localhost";
const home=fs.readFileSync("./index.html", "utf8");

const server=http.createServer((request, response, next) => {
    if(request.url==="/"){
       return response.end(home);
    }
    if(request.url==="/about"){
        return response.end("<h1>ABOUT</h1>");
    }
    if(request.url==="/contact"){
        return response.end("<h1>CONTACT US</h1>");
    }
    if(request.url==="/service"){
        return response.end("<h1>SERVICE</h1>");
    }
    else{
        return response.end("<h1>404 ERROR</h1>");
    }
    
});

 server.listen(PORT, '0.0.0.0',hostname,err => {
    if (err) throw err;
    console.log(`Listening on port ${PORT}`)
  });

