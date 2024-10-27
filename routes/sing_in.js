const express = require('express');
const router = express.Router();
const dbUsers = require('../users/users.json');
const keySecret = process.env.APIKEY;
const jwt = require('jsonwebtoken');

const historyToken = []

router.get('/',(req,res)=>{
    console.log("funciono")
    const token = req.headers['authorization'];

    if(!token){
        return res.status(403).json({message:"se requiere un token para ingresar "});
    }
    
    jwt.verify(token,keySecret,(err,decoded)=>{
        if(err){
            return res.status(403).json({message:"token invalido"});
        }
        res.json({message:"Acceso correcto",userId : decoded.id})
    })
    
});

router.post('/',(req,res)=>{

    const {name,password} = req.body;

    if(name == dbUsers.users[0].name && password == dbUsers.users[0].password){
        const token = jwt.sign({id:dbUsers.users[0].id},keySecret,{expiresIn:'1h'});
        //opcional y solo de prueba
        historyToken.push(token)

        return res.json({token});
    }

    return res.status(401).json({message:'Credenciales invalidas'});

})

router.get('/history',(req,res)=>{
    if(!historyToken[0]){
        res.json({info:"no existen datos todavia en history"});
    }
    res.status(200).json({history:historyToken});
})
let compartamos = 4956
module.exports = router;