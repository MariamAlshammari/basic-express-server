'use strict';
module.exports=(req,res,next)=>{
    const nameValidator = req.query.name;
    req.validator = nameValidator;


if(nameValidator){
    next();}
    else{
        next('error in enterting a name');
    }
}