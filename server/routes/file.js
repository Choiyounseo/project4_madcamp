import express from 'express';
import Files from '../models/file';

const router = express.Router();

const multer = require('multer');
const musicupload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, 'music/')
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    }
  }),
});

const documentupload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, 'document/')
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    }
  }),
});

const pictureupload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, 'picture/')
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    }
  }),
});

//single( {button's name -> 'music'} )
router.post('/music', musicupload.single('music'), (req, res) => {
    const filename = req.file.filename;
    const mimetype = req.file.mimetype;
    const size = req.file.size;
    const username = req.session.loginInfo.username;

    Files.findOneAndUpdate(
      { "filename": filename },
      { "filename": filename, "mimetype": mimetype, "size": size, "username": username },
      { "upsert": 1 },
      (err) => { if (err) { console.error(err); res.json({ result: 0}); return; }}
    );
});

export default router;
