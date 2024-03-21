const mongoose = require('mongoose')

const UserDetailSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email:{
        type: String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    }
})

const UserDetail = mongoose.model('UserDetail',UserDetailSchema)

module.exports = UserDetail

