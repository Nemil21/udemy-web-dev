const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session')
main().catch(err => console.log(err));  
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/authDemo');
    console.log("Mongo Connection Open!!")
}

app.use(express.urlencoded({extended:true}));
app.use(session({secret: "notagoodsecret"}))
app.set('view engine', 'ejs');
app.set('views', 'views');

const requireLogin = (req,res,next)=>{
    if(!req.session.user_id){
        return res.redirect('/login')
    }
    next(); 
}

app.get('/', (req,res) =>{
    res.send('This is the home page');
})
app.get('/register', (req,res) =>{
    res.render('register')
})
app.get('/login', (req,res) =>{
    res.render('login')
})
app.post('/login', async (req,res) =>{
    const {username, password} = req.body;
    const foundUser = await User.findAndValidate(username, password)
    if(foundUser){
        req.session.user_id = foundUser._id
        res.redirect('/secret')
    }else{
        res.redirect('/login')
    }
})
app.post('/register', async(req,res) =>{
    const {password, username} = req.body;
    const user = new User({username,password})
    await user.save();
    req.session.user_id = user.id
    res.redirect('/');

})
app.post('/logout', (req,res)=>{
    req.session.user_id = null;
    res.redirect('/login')
})
app.get('/secret', (req, res)=>{
    if(!req.session.user_id){
        res.redirect('/login');
    }else{
        res.render("secret")
    }
    
})

app.get('/topsecret', requireLogin, (req,res)=>{
    res.send('Top Secret')
})

app.listen(3000, ()=>{
    console.log('App is listening on port 3000');
})