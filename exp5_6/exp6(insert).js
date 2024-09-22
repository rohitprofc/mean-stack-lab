//Experiment 6 (insert.js)
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/college');

const sch = new mongoose.Schema({ roll: Number, name: String });
const mdl = mongoose.model('students', sch);

const studentsData = [
    { roll: 5445, name: "Sowmya" },
    { roll: 5451, name: "Rohit" },
    { roll: 5420, name: "Naidu" },
];

mdl.insertMany(studentsData)
    .then(insertResult => {
        console.log('Inserted students:', insertResult);
        return mdl.find({});
    }).catch(err => {
        console.error('Error inserting students:', err.message);
    });