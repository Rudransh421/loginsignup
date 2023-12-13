const express = require('express');
const app = express();

const path =require('path');
const hbs = require('hbs');
const collection= require('./mongodb');
const templatepath=path.join(__dirname,'../templates');

app.use(express.json());
app.set('view engine','hbs');
app.set("views",templatepath);
app.use(express.urlencoded({extended:false}));

app.get('/connect',(req,resp)=>{
    resp.render('connect')
})

app.get('/signup',(req,resp)=>{
    resp.render('signup')
})

app.get('*',(req,res)=>{
    res.send(`
    <h1>Invalid page </h1>
<a  href="/connect">connect buisness</a>
<br>
<a  href="/signup">buisness user signup</a>
    `);
})
app.post("/signup",async (req,resp)=>{
    const data ={
        name:req.body.name,
        buisness:req.body.buisness,
        email:req.body.email,
        contact:req.body.contact,
        address:req.body.address,
        buisnesstype:req.body.btype,
        password:req.body.psw,
        taxid:req.body.taxid,
        buisnessdescription:req.body.buisnessdescription,
        additionalinfo:req.body.additionalinfo,

        
    }

    await collection.insertMany([data]);

    resp.render('home');

})

app.post("/connect",async (req,resp)=>{
    const data ={
       
        buisness:req.body.buisness,
        email:req.body.email,
        contact:req.body.contact,
        address:req.body.address,
        buisnesstype:req.body.btype,
        password:req.body.psw,
        taxid:req.body.taxid,
        buisnessdescription:req.body.buisnessdescription,
        additionalinfo:req.body.additionalinfo,

        
    }

    await collection.insertMany([data]);

    resp.render('home');

})

app.listen(5000,()=>{
    console.log('port connected')
});