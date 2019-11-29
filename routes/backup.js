const express = require('express');
const router = express.Router();
const spawn = require('child_process').spawn;
const compressing = require('compressing');
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');

const FileInfo = require('../models/file-info');

router.get('/', (req,res)=>{
    var messages=[];
    
    fs.stat('dump.tar', (err, stats)=>{
        if(err){
            messages.push(err);
            res.render('backup/index', {messages:messages});
            return;
        }

        const filesize = stats.size / 1000000.0;
        const fileInfo = new FileInfo('dump.tar',filesize.toFixed(2), stats.mtime);

        res.render('backup/index', {messages:messages, fileInfo:fileInfo});
    });

    

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
                fs.copyFileSync('dump.tar','./public/uploads/dump.tar');
                const stats = fs.statSync('dump.tar');

                const filesize = stats.size / 1000000.0;
                const fileInfo = new FileInfo('dump.tar',filesize.toFixed(2), stats.mtime);

                res.render('backup/index', {messages:messages, fileInfo:fileInfo});
            })
            .catch(function(){
                console.log('compession not done');
                res.render('backup/index', {messages:messages});
            });
        }
        else {
            res.render('backup/index', {messages:messages});
        }

        
    });
});

router.get('/upload', function (req, res) {
    
    var messages = [];
    res.render('backup/upload', { messages: messages});
    

    
});

router.post('/upload', function(req,res){
    var messages = [];
    

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {

        if(files.filetoupload==null || files.filetoupload.name==''){
            messages.push('Please select a file to upload');
            res.render('backup/upload', { messages: messages, hasErrors: messages.length > 0 });
            return;
        }

        var oldpath = files.filetoupload.path;
        var newpath = path.join(__dirname, '../uploads/') + files.filetoupload.name;
        console.log('oldpath', oldpath);
        console.log('newpath', newpath);
        
        compressing.tar.uncompress(oldpath, 'dump')
        .then(function(){
            console.log('uncompression done');
            

            fs.copyFile(oldpath,newpath, (err)=>{
                if(err){
                    messages.push(err.message);
                    res.render('backup/index', {messages:messages});
                    return;
                }

                const stats = fs.statSync(newpath);

                const filesize = stats.size / 1000000.0;
                const fileInfo = new FileInfo(files.filetoupload.name,filesize.toFixed(2), stats.mtime);
    
                //START mongodb restore
                const args = [];
                const mongorestore = spawn('mongorestore', args);
            
                mongorestore.stdout.on('data', function (data) {
                    console.log('stdout: ' + data);
                });
                mongorestore.stderr.on('data', function (data) {
                    console.log('stderr: ' + data);
                });
                mongorestore.on('exit', function (code) {
                    console.log('mongorestore exited with code ' + code);
            
                    if(code!=0){
                        messages.push('Restore failed');
                    }
            
                    res.render('backup/index', {messages:messages, fileInfo:fileInfo});
                    
                });
                //END mongodb restore

                

            });

            
        })
        .catch(function(){
            console.log('uncompession not done');
            res.render('backup/index', {messages:messages});
        });


        



    });


  
});

module.exports=router;