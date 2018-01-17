import express from 'express';
import Files from '../models/file';

const router = express.Router();

const multer = require('multer');

var sourceFile = require('../main.js');

const musicupload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, 'public/music/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
      //console.log("called first?");

    }
  }),
});
//req.body.file

const documentupload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, 'public/document/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  }),
});

const pictureupload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, 'public/picture/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  }),
});


router.get('/get',function(req,res){
    //Info to query with: username.
    console.log("got it");
    console.log(user);
    /*This should work on the website */
    // const username = req.session.loginInfo.username;

    //const username = "younseo";
    var array;
    Files.find({"username":user},{"filename":1,"filetype":1, "leftpos":1, "toppos":1, "path":1}, (err, data) => {
      //Must deal with data here since async.
      array = data;
      console.log(array);
      res.send(array);
    });

    //Info I should send: filename, position,
});

//Post request from save button. Update all positions.
router.post('/save', function(req,res){
  var array = req.body;

  var i;
  var filename;
  for(i = 0; i < array.length; i++){
    filename = array[i].name;
    var left = array[i].left;
    var top = array[i].top;
    //console.log(filename);
    //console.log(left);
    //console.log(top);

    Files.findOneAndUpdate(
      { "filename": filename },
      { "leftpos": left,"toppos":top },
      { "upsert": 1 },function(err){
        Files.find({"filename": filename}, (err, data) => {
          //Must deal with data here since async.
          console.log(data);
        });
      }
    );
  }
});

//router.use('/music',express.static('public'));
// new Date().valueOf() + path.extname(file.originalname)
//single( {button's name -> 'music'} )
var user;
router.post('/music', musicupload.single('music'), (req, res,next) => {
    console.log(req.file);
    console.log("original file above");
    //console.log(uuidv1());
    //new fileObject = {'filename':req.file.filename, 'path':req.file.path }

    const filename = req.file.filename;
    const filetype = req.file.fieldname;
    const path = req.file.path;
    const username = req.session.loginInfo.username;
    user = username;
    const roomnumber = 0;
    const leftpos = 0;
    const toppos = 0;

    var collection = sourceFile.name;
    Files.findOneAndUpdate(
      { "filename": filename },
      { "filename": filename,"filetype":filetype, "path": path, "username": username, "roomnumber": roomnumber, "leftpos": leftpos,"toppos":toppos },
      { "upsert": 1 },
       (err) => { if (err) { console.error(err); res.json({ result: 0}); return; }}
    );

    /*
    //Everything is async is node.js including Files.find here!
    console.log("Find called");
    Files.find({"filename": filename}, (err, data) => {
      //Must deal with data here since async.
      console.log(data);
    });
    console.log("Find finished");
    */
    res.redirect('back');
});

router.post('/document', documentupload.single('document'), (req, res) => {
    const filename = req.file.filename;
    const mimetype = req.file.mimetype;
    const size = req.file.size;
    const username = req.session.loginInfo.username;
    const roomnumber = 1;

    Files.findOneAndUpdate(
      { "filename": filename },
      { "filename": filename, "mimetype": mimetype, "size": size, "username": username, "roomnumber": roomnumber },
      { "upsert": 1 },
      (err) => { if (err) { console.error(err); res.json({ result: 0}); return; }}
    );
    res.send("FINISH");
});

router.post('/picture', pictureupload.single('picture'), (req, res) => {
    const filename = req.file.filename;
    const mimetype = req.file.mimetype;
    const size = req.file.size;
    const username = req.session.loginInfo.username;
    const roomnumber = 1;

    Files.findOneAndUpdate(
      { "filename": filename },
      { "filename": filename, "mimetype": mimetype, "size": size, "username": username, "roomnumber": roomnumber },
      { "upsert": 1 },
      (err) => { if (err) { console.error(err); res.json({ result: 0}); return; }}
    );
    res.send("FINISH");
});

export default router;
