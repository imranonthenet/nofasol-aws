const express = require('express');
const router = express.Router();
const spawn = require('child_process').spawn;
const compressing = require('compressing');
const fs = require('fs');


router.get('/', (req,res)=>{
    var messages=[];
    res.render('backup/index', {messages:messages});
});

router.get('/create', (req,res)=>{
    var messages=[];

    const args = [];
    const mongodump = spawn('mongodump', args);

    mongodump.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });
    mongodump.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });
    mongodump.on('exit', function (code) {
        console.log('mongodump exited with code ' + code);

        if(code==0){
            compressing.tar.compressDir('dump', 'dump.tar')
            .then(function(){
                console.log('compression done');
                fs.copyFileSync('../dump.tar','../public/uploads/dump.tar');
            })
            .catch(function(){
                console.log('compession not done');
            });
        }
        

        res.render('backup/index', {messages:messages});
    });
});

module.exports=router;