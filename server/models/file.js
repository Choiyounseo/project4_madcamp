import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Files = new Schema ({
    filename: String,
    mimetype: String,
    size: { type: Date, default: Date.now },
    btoafile: String,
    username: String,
    roomnumber: Number
});

export default mongoose.model('file', Files);
