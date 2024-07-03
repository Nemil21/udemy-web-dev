const mongoose = require('mongoose');
const Product = require('./models/product');

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
    console.log("Mongo Connection Open!!")
}

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save()
//     .then((m) => {
//         console.log(m)
//     })
//     .catch((err) => { console.log(err) })

const seedProducts = [
    {
        name: 'Fairy Eggplant', 
        price:1.00,
        category:'vegetable' 
    }, 
    {
        name: 'Organic Goddess Melon', 
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic mini seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate whole milk',
        price: 2.69,
        category: 'dairy'
    }
]

Product.insertMany(seedProducts)
.then(res => console.log(res))
.catch(err => console.log(err))