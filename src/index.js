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

app.get('/login',(req,resp)=>{
    resp.render('login')
})

app.get('/signup',(req,resp)=>{
    resp.render('signup')
})

app.get('*',(req,res)=>{
    res.send(`
    <h1>Invalid page </h1>
<a target="_blank" href="/login">login page</a>;
    `);
})
app.post("/signup",async (req,resp)=>{
    const data ={
        name:req.body.name,
        email:req.body.email,
        contact:req.body.contact,
        date:req.body.date,
        password:req.body.psw,
        
    }

    await collection.insertMany([data]);

    resp.render('home');

})

app.post("/login",async (req,resp)=>{


    try{
        const check = await collection.findOne({email:req.body.email});

        if(check.password===req.body.password){
            resp.render('home');
        }
        else{
            resp.send('wrong password');
        }
    }

    catch{
        resp.send('wrong details');
    }
})


app.listen(5000,()=>{
    console.log('port connected')
});