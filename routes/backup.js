const express = require('express');
const router = express.Router();
const spawn = require('child_process').spawn;
const compressing = require('compressing');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const disk = require('diskusage');
var csrf = require('csurf');

const FileInfo = require('../models/file-info');
var Event = require('../models/event');

//const mb = 1048576.0;
const mb = 1000000.0;
//const gb = 1073741824.0;
const gb = 1000000000.0;

var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/', (req,res)=>{
    const messages = req.flash('error');
    const successMessage = req.flash('success');
    const backupPath = './public/uploads/';

    fs.readdir(backupPath, (err,files)=>{
        if(err){
            return res.render('backup/index', {messages:err.message, hasErrors: true});
        }

        const filelist=[];

        for(var i=0; i<files.length; i++){
            const stats= fs.statSync(backupPath + files[i]);
            const filesize = stats.size / mb;
            const fileInfo = new FileInfo(files[i],filesize.toFixed(2), stats.mtime);
            filelist.push(fileInfo);

        }

        disk.check('/', function(err, info) {
            if (err) {
                return res.render('backup/index', {messages:err.message, hasErrors: true});
            } 

            const availableSpace = info.available / gb;
            const freeSpace = info.free / gb;
            const totalSpace = info.total / gb;


            res.render('backup/index', {
                messages:messages, hasErrors: messages.length>0,
                filelist:filelist, 
                availableSpace:availableSpace.toFixed(2), 
                totalSpace:totalSpace.toFixed(2)
            });

          });
    });

    

    

});

router.get('/create', (req,res)=>{
    const messages=[];
    res.render('backup/create', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length>0});
});

router.post('/create', (req,res)=>{
    const messages=[];
    
    var filename=req.body.filename + '.zip';
    filename = filename.replace(/[/\\?%*:|"<>]/g, '-');


    const args = [];
    const mongodump = spawn('mongodump', args);

    mongodump.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });
    mongodump.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });
    mongodump.on('exit', function (code) {
        

        if(code==0){
            compressing.zip.compressDir('dump', filename)
            .then(function(){
                console.log('compression done');
                fs.copyFileSync(filename,'./public/uploads/' + filename);

                req.flash('success', 'Backup created successfully');
                res.redirect('/backup');

            })
            .catch(function(){
                console.log('compession not done');
                req.flash('error','Error while compressing backup file');
                res.redirect('/backup');
            });
        }
        else {
            console.log('mongodump exited with code ' + code);
            req.flash('error','Error while creating backup');
            res.redirect('/backup');
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
    
                Event.db.db.command({dropDatabase:1}, function(err, result){
                    console.log("Error : "+err);
                    if (err) throw err;
                    console.log("Operation Success ? "+result);
                    
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

                

                

            });

            
        })
        .catch(function(){
            console.log('uncompession not done');
            res.render('backup/index', {messages:messages});
        });


        



    });


  
});

module.exports=router;