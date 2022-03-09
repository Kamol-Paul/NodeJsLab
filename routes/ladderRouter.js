const express = require('express');
const bodyParser = require('body-parser');
let file = require('./ladder.json');

ladderRouter = express.Router();

ladderRouter.use(bodyParser.json());
ladderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.send(file);
    // console.log(Array.isArray(file));
    // res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    let ax = req.body;
    file.push(ax);
    res.send(req.body);
    
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    file = [];    
    res.end('Deleting all dishes');
});
ladderRouter.route('/:id').delete((req,res) => { 
    let id = req.params.id;
    let find = file.find(elem => elem.id === id);
    // console.log("we are in get method\n");
    // console.log(find);
    if (find === undefined)
    {
        find = `id: ${id} not found`;
    }
    else
    { 
        file = file.filter(elem => elem.id !== id);
    }
    res.send(find);

}).get((req, res) => { 
    let id = req.params.id;
    let find = file.find(elem => elem.id === id);
    // console.log("we are in get method\n");
    // console.log(find);
    if (find === undefined)
    { 
        find = `id: ${id} not found`;
    }
    res.send(find);
})
 
module.exports = ladderRouter;
