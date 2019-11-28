const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    var messages=[];
    res.render('backup/index', {messages:messages});
});

module.exports=router;