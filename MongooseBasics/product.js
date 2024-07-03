const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
    console.log("Connection Open!!")
}
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive!!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size:{
        type: String,
        enum: ['S', 'M', 'L']
    }
});

productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale;
    return this.save()
}
productSchema.methods.addCategory = function(newCat){
    this.categories.push(newCat);
    return this.save();
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async ()=>{
    const foundProduct = await Product.findOne({name: 'Bike Helmet'});
    console.log(foundProduct)
    await foundProduct.toggleOnSale(); 
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors'); 
    console.log(foundProduct)
}

findProduct();
// const bike = new Product({ name: 'Jersey', price: 25, categories: ['Cycling'], size: 'S' })
// bike.save()
//     .then(m => {
//         console.log("It worked!!!")
//         console.log(m)
//     }
//     )
//     .catch(err => {
//         console.log('OH NO ERROR!!')
//         console.log(err)
//     })


// Product.findOneAndUpdate({name: "Tyre Pump"}, {price: -29.99}, {new:true, runValidators:true})
//     .then(m => {
//         console.log("It worked!!!")
//         console.log(m)
//     }
//     )
//     .catch(err => {
//         console.log('OH NO ERROR!!')
//         console.log(err)
//     })

