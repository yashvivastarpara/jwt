const { response } = require('express');
const jwt = require('jsonwebtoken');

const auth = (req, res,next) => {
    let token = req.headers.authorization.split(' ')[1]
    if (token){
        let decode = jwt.verify(token,"nnn")
        req.data= decode.id
        next()
    }
    else{
        res.send("login first")
    }
}

module.exports= auth;
