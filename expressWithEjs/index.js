const express= require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'))

app.get('/cats', (req,res) => {
    const cats =[ 'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston']
    res.render ('cats', {allCats : cats})
})

app.get('/', (req,res) =>{
    res.render('home.ejs')
})

app.get('/r/:subreddit', (req,res)=>{
    const {subreddit} = req.params
    res.render('subreddit.ejs', {subreddit : subreddit})
})
app.get('/rand', (req,res) =>{
    const num = Math.floor(Math.random()*10)+1
    res.render('random.ejs', { rand : num })
    // num can directly be passed in /rand.ejs as ran by { rand : num}
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})