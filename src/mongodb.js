const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/login&signuptut")
    .then(() => {
        console.log('mongodb connected')
    }).catch((err) => {
        console.log('mongodb not connected')
    });

const loginshcema = new mongoose.Schema({
    name: {
        type: String,
        required:false
    },
    buisness: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    buisnesstype: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    taxid: {
        type: String,
        required: false
    },
    buisnessdescription: {
        type: String,
        required: true
    },
    additionalinfo: {
        type: String,
        required: false
    },


})

const collection = new mongoose.model("collection2", loginshcema);
module.exports = collection;
