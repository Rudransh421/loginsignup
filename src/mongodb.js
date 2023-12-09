const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/login&signuptut")
.then(() => {
    console.log('mongodb connected')
}).catch((err) => {
    console.log('mongodb not connected')
});

const loginshcema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("collection1",loginshcema);
module.exports=collection;
