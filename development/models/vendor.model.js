const mongoose = require('mongoose')

const notice=new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, rerquired: true}
},
    {collection: 'vendor-details'}
)

const model=mongoose.model('vendor',notice)

module.exports=model