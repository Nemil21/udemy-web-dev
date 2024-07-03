const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');

const Farm = require('./models/farm');
const AppError = require('./AppError');
const Product = require('./models/product');

const sessionOptions = {secret: 'thisIsNoTAGoodSecret', resave: false, saveUninitialized: false}
app.use(session(sessionOptions))
app.use(flash()); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
    console.log("Mongo Connection Open!!")
}

const categories = ['fruit', 'vegetable', 'dairy'];

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e));
    }

}

app.use((req,res,next)=>{
    res.locals.messages = req.flash('success');
    next();
})
//FARM ROUTES
//Index Route
app.get('/farms', wrapAsync(async(req,res) =>{
    const farms = await Farm.find({});
    res.render('farms/index', {farms, });
}))

//New route
app.get('/farms/new',(req,res)=>{
    res.render('farms/new');
})
app.post('/farms',async(req,res) =>{
    const farm = new Farm(req.body);
    await farm.save();
    req.flash('success', 'Successfully made a new farm!!');
    res.redirect(`/farms`);
})  

//Show route
app.get('/farms/:id', wrapAsync(async(req,res,) =>{
    const {id} = req.params;
    const farm = await Farm.findById(id).populate('products')
    res.render('farms/show', {farm});
}))

//New Product addition Route
app.get('/farms/:id/products/new', async(req,res) =>{
    const {id} = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new', {categories, farm});
})
app.post('/farms/:id/products', async(req,res)=>{
    const {id} = req.params;
    const farm = await Farm.findById(id);
    const {name,price,category} = req.body;
    const product = new Product({name,price,category});
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${id}`);
})

//Delete Route
app.delete('/farms/:id', async(req,res) =>{
    const farm = await Farm.findByIdAndDelete(req.params.id);
    res.redirect('/farms');
})


//PRODUCT ROUTES
//New Route
app.get('/products/new', (req, res) => {
    // throw new AppError('Password Required!!', 401);
    res.render('products/new', { categories })
    // throw Error('Password Required!!');
})
app.post('/products', wrapAsync(async (req, res, next) => {

    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);

})
)
//Edit Route
app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {

    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new AppError('Product not found!!', 404);
    }
    res.render('products/edit', { product, categories })
})
)

//Index Page
app.get('/products', wrapAsync(async (req, res, next) => {
    
        const { category } = req.query;
        if (category) {
            const products = await Product.find({ category: category });
            res.render('products/index', { products, category })
        } else {
            const products = await Product.find({});
            res.render('products/index', { products, category: "ALL" })
        }
    
})
)

//Show Route
app.get('/products/:id', wrapAsync(async (req, res, next) => {

    const { id } = req.params;
    const product = await Product.findById(id).populate('farm', 'name');
    if (!product) {
        throw new AppError('Product not found!!', 404);
        // idhar direct throw kr sakte hai as niche next use kiya hai catch krne ke liye
    }
    
    res.render('products/show', { product });

})
)
//Update route
app.put('/products/:id', wrapAsync(async (req, res, next) => {
    
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
        res.redirect(`/products/${product._id}`);
   
})
)

//DELETE Route
app.delete('/products/:id', wrapAsync(async (req, res, next) => {
    
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.redirect('/products')
})
)

const handleValidationError = err =>{
    console.dir(err);
    return new AppError(`Validation Failed...${err.message}`, 400);

}
app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name === 'ValidationError') err = handleValidationError(err);
    next(err);
})

app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong!!" } = err;
    res.status(status).send(message);
});

app.listen(3000, () => {
    console.log("App is listening on port 3000!!")
})

