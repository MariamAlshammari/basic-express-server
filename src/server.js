'use strict';

const express=require('express');
const app=express();

const validatorMiddleware=require('./middleware/validator'); 

const loggerMiddleware=require('./middleware/logger');

const notFoundHandler=require('./error-handler/404');
const serverErrorHandler=require('./error-handler/500');

app.use(express.json());

// app.use(loggerMiddleware);


// function checkName(n) {
//     return (req, res, next) => {
//         if ( typeof n !== 'string' ) {
//             next('not name >:(');
//         } else {
//             req.checkName = n;
//             next();
//         }
//     }
// }


app.get('/', (req, res) => {
    res.status(200).send('Hello World!, all working')
});
//localhost:3006/hellomeme?name=mariam
// app.get('/hellomeme',validatorMiddleware,(req,res)=>{
//     res.send(`hello from first query, ${req.query.name}`);
// })



// app.get('/hellomeme/:name', (req, res) => {
//     //http://localhost:3006/hellomeme/mariam
//     res.send(`Hi from params, ${req.params.name}`);
// })

// app.post('/hellomeme', (req, res) => {
//     console.log('>>>>>>' + req.body.name);
//     res.send(`Hi from params, ${req.body.name} and from ${req.validator} `);
// })

// app.get('/validator',validatorMiddleware,(req,res)=>{
//     res.send(`Check validate ${req.validator}`)
// })



// app.get('/checkName', checkName('a'), (req, res) => {
//     res.send(`checkName ${req.checkName}`);
// })





// http://localhost:3006/person?name=mariam
app.get('/person', validatorMiddleware,(req, res) => {
    let output = {
        name: req.query.name}
        res.status(200).json(output);
    // res.send(`name 
    //  from validator ${req.validator}`);
})


app.get('/bad', (req, res, next) => {
    next('error from bad end point');
});


app.use('*', notFoundHandler);
app.use(serverErrorHandler);



module.exports ={
    server: app,
    start:port=>{
        app.listen(port,()=> console.log(`Server listening on ${process.env.PORT}`));
    }
}