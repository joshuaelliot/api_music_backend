const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    console.log("funciono")
    const sms = {
        info :"sing up funcionando"
    }
    res.send(sms);
});

router.post('/',(req,res)=>{
const body = req.body;
const ok = "se registro su solicitud exitosamente "
res.status(200).json({sms:ok});
})

module.exports = router;