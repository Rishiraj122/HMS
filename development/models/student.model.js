const mongoose = require('mongoose')

const notice=new mongoose.Schema({
    name: {type: String, required: true},
    roll: {type: Number, required: true},
    registration: {type: Number, required: true},
    email: {type: String, required: true},
    guardian_name: {type: String, required: true},
    phone: {type: Number, rerquired: true},
    guardian_number: {type: Number, required: true}
},
    {collection: 'student-details'}
)

const model=mongoose.model('student',notice)

module.exports=model