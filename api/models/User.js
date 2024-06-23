const { Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    todos: [{type: Types.ObjectId, ref: 'Todo'}],
    nickname: [{type: String, required: false}],
    birthday: [{type: Date, required: false}],
    FIO: [{type: String, required: false}],
    address: [{type: String, required: false}],
    city: [{type: String, required: false}],
    admin: [{type: Boolean, required: false}],
    image: [{type: String, required: false}],
    phone: [{type: String, required: false}]
    

})

module.exports = model('User', schema)