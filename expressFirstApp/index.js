const express = require("express");
const app = express()
// console.dir(app)

// app.use((req,res) =>{
//     console.log("we got a new request!!")
//     res.send('<h1>THIS IS MY WEBPAGE</h1>')
// })
// as there can only be one response to one http request and this will ans all requests
app.get('/r/:subreddit', (req,res) => {
    const { subreddit} = req.params;
    res.send(`<h1> Browsing the ${subreddit} subreddit </h1>`)
})
app.get('/r/:subreddit/:postID', (req,res) => {
    const { subreddit, postID} = req.params;
    res.send(`<h1>Viewing Post ID: ${postID} on ${subreddit} subreddit </h1>`)
})
app.get('/search', (req,res) => {
    const {q} = req.query;
    if(!q){
        res.send(`<h1>Nothing found if nothing searched</h1>`)
    }
    res.send(`<h1>Search results for ${q}</h1>`)
})
app.get('/cats', (req,res) => {
    res.send("MEOWWW!")
})

app.get('/dogs', (req,res) => {
    res.send("WOOF!")
})

app.get('/', (req,res) => {
    res.send("THIS IS THE HOME PAGE")
})
app.listen(3000, () => {
    console.log("Listening On port 3000!!")
})