const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const Product = require('./models/product');

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

//New Route
app.get('/products/new', async (req, res) => {
    res.render('products/new', { categories })  
})
app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
})

//Edit Route
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories })
})

//Index Page
app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({category:category});
        res.render('products/index', { products,category })
    } else {
        const products = await Product.find({});
        res.render('products/index', { products, category:"ALL" })
    }
})

//Show Route
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product });
})

//Put route
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
})

//DELETE Route
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products')
})

app.listen(3000, () => {
    console.log("App is listening on port 3000!!")
})

