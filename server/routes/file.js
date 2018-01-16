import express from 'express';
import Files from '../models/file';

const router = express.Router();

const multer = require('multer');

const musicupload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, 'public/music/')
    },
    filename: function (req, file, cb) {
      cb(null, req.body.file.originalname);
    }
  }),
});

const documentupload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, 'public/document/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  }),
});

const pictureupload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, 'public/picture/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  }),
});
// new Date().valueOf() + path.extname(file.originalname)
//single( {button's name -> 'music'} )
router.post('/music', musicupload.single('music'), (req, res) => {
    const filename = req.body.file.filename;
    const mimetype = req.body.file.mimetype;
    const size = req.body.file.size;
    const username = req.body.username;
    const roomnumber = req.body.roomnumber;

    Files.findOneAndUpdate(
      { "filename": filename },
      { "filename": filename, "mimetype": mimetype, "size": size, "username": username , "roomnumber": roomnumber },
      { "upsert": 1 }
      // (err) => { if (err) { console.error(err); res.json({ result: 0}); return; }}
    );
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
});

export default router;
