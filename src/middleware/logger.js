'use strict';

module.exports=(req,res,next)=>{
    console.log('Req logger:',req.method,req.path);
}