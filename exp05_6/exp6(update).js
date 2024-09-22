//Experiment 6 (update.js)
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/college');

const sch = new mongoose.Schema(
    { roll: Number, name: String }
);
const mdl = mongoose.model('students', sch);

mdl.updateMany({ roll: 5420 }, { $set: { name: "Meghana Naidu" } })
    .then(documents => {
        console.log('Updated documents:', documents);
    })
    .catch(err => {
        console.error('Error updating documents:', err.message);
    });