'use strict';

module.exports=(error,req,res,next)=>{
    const errMsg=error.message ? error.message :error;
    const errorObj={
        status:500,
        message:errMsg
    }
    res.status(500).json(errorObj);
}