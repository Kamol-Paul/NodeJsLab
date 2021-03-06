const express = require('express');
const http = require('http');
const morgan = require('morgan');
const mongoose = require('mongoose');

const dishRouter = require('./routes/dishRouter'); 
const ladderRouter = require('./routes/ladderRouter'); 
const promoRouter = require('./routes/promoRouter.js');
const leaderRouter = require('./routes/leaderRouter.js');

const hostname = 'localhost';
const port = 3000;
const url = "mongodb://localhost:27017/assignment";

const connect = mongoose.connect(url);
connect.then(
  (db) => { 
  console.log("database connected");
},
  (err) => { 
    console.log(err);
  });

const app = express();
app.use('/dishes', dishRouter);
app.use('/ladder', ladderRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public/'));
app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');
 
});
 
const server = http.createServer(app);
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
