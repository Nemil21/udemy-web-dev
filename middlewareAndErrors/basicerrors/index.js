const express = require('express')
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError');

const verifyPassword = (req,res,next)=>{
  const {password} = req.query;
  if(password === 'chickennugget'){
    next();
  }
  // throw new Error('Password required!!').status = 401;
  throw new AppError('Password Required!!', 401);
  // res.send('Sorry you need a password!');
}


app.use(morgan('dev'))
app.use((req, res, next) => {
  //req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});
// app.use((req,res,next)=>{
//   const {password} = req.query;
//   if(password === 'chickennugget'){
//     next();
//   }
//   res.send("Sorry you need a password!!")
// });
app.use('/dogs', (req, res, next) => {
  console.log('I LOVE DOGS');
  next();
});


app.get('/', (req, res) => {
    res.send('Home Page!')
})
app.get('/admin', (req, res) => {
    throw new AppError("You are not an admin!!", 403);
})

app.get('/dogs',(req,res)=>{
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Woof Woof!')
})
app.get('/secret', verifyPassword, (req,res)=>{
  res.send('HI'); 
})

app.use((req,res)=>{
  res.status(404).send('NOT FOUND!!')
})
app.use((err, req, res, next) => {
  const {status = 500, message = "Something went wrong!!"} = err;
  res.status(status).send(message);
})

app.listen(3000, () => {
  console.log('Server is running on localhost:3000');
})