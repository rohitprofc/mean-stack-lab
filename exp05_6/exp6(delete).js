//Experiment 6 (delete.js)
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/college');

const sch = new mongoose.Schema(
    { roll: Number, name: String }
);
const mdl = mongoose.model('students', sch);

mdl.deleteOne({ roll: 5420 })
    .then(documents => {
        console.log('Remaining documents:', documents);
    })
    .catch(err => {
        console.error('Error deleting document:', err.message);
    });