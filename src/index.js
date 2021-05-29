// init project
// load up the express framework and body-parser helper
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// create an instance of express to serve our end points
const app = express();

// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// var http = require("http");
// var express = require("express");
// var app = express();
// var cors = require('cors');
var path = require("path");
const srcPath = __dirname;
// var bodyParser = require("body-parser");
// // Use bodyParser to parse application/x-www-form-urlencoded form data
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
// configure our express instance with some body-parser settings


// https://medium.com/zero-equals-false/using-cors-in-express-cac7e29b005b

app.use(cors());
// or
// app.use(cors({
//   origin: 'https://csb-pzikt.netlify.app/'
// }));
// or
// var allowedOrigins = ['http://localhost:3000',
//                       'https://vwxjf.sse.codesandbox.io/',
//                       'https://csb-pzikt.netlify.app/',
//                      ];
// app.use(cors({
//   origin: function(origin, callback){
//     // allow requests with no origin 
//     // (like mobile apps or curl requests)
//     if(!origin) return callback(null, true);
//     if(allowedOrigins.indexOf(origin) === -1){
//       var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));

function saveFile(input) {
  var fs = require("fs");
  fs.writeFile("./src/test.txt", input, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("The file was saved!");
    }
  });
  return 0;
};
// saveFile("hey there!");

// Create a new entry
app.post('/new', function(request, response){
  console.log(request.body);      // your JSON
  saveFile(JSON.stringify(request.body));
  // response.send(request.body);    // echo the result back
});
// app.post("/new", urlencodedParser, function(request, response) {
//   console.log(request);
//   saveFile(JSON.stringify(request.body));
//   response.redirect("/");
// });

// Serve the root url: http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(path.join(srcPath, "", "index.html"));
});

//full path could be used as well:
// app.get("/", function(request, response) {
//   response.sendFile("/sandbox/views/index.html");
// });

// Listen on port 8080
var listener = app.listen(8080, function() {
  console.log("Listening on port " + listener.address().port);
});

// //create a server object:
// http
//   .createServer(function(req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080
