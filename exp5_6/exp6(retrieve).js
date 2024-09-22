//Experiment 6 (retrieve.js)
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/college');

const sch = new mongoose.Schema(({ roll: Number, name: String }));
const mdl = mongoose.model('student', sch);

mdl.find({})
    .then(documents => {
        console.log(documents);
    }).catch(err => {
        console.error('Error retrieving documents:', err.message);
    });