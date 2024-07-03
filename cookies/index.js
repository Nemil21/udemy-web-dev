const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser('thisIsMySecret'));

app.get('/greet', (req,res)=>{
    const {name  = 'No-name'} = req.cookies
    res.send(`HEY THERE ${name}!`)
    console.log(req.cookies);
})

app.get('/setName', (req,res)=>{
    res.cookie('name', 'Nemil Shah')
    res.cookie('age', '18')
    res.send("OKAY SENT YOU A COOKIE!!")
})

app.get('/getSignedCookie', (req,res)=>{
    res.cookie('fruit', 'grape', {signed: true})
    res.cookie('DOB', '21/6', {signed: true})
    res.send("OKAY SIGNED YOUR COOKIE!!")
})

app.get('/verifySignedCookie', (req,res)=>{
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(req.signedCookies);
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})