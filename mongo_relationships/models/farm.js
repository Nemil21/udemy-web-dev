const mongoose = require('mongoose');
const {Schema} = mongoose

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');
    console.log("Mongo Connection Open!!")
}

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ["Spring", "Summer", "Fall", "Winter"]
    }
})
const Product = mongoose.model('Product', productSchema);


const makeProduct = async () => {
    const res = await Product.insertMany([
        { name: 'Goddess Melons', price: 4.99, season: 'Summer' },
        { name: 'Sugar Babies Watermelon', price: 5.99, season: 'Summer' },
        { name: 'Asparagus', price: 3.99, season: 'Spring' },
    ])
    console.log(res);
}

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product'}]
})
const Farm = mongoose.model('Farm', farmSchema);

const makefarm = async()=>{
    const farm = new Farm({name: 'Full Belly Farms', city: 'Guinda, CA'})
    const melon = await Product.findOne({name: 'Goddess Melons'})
    farm.products.push(melon)
    await farm.save()
    console.log(farm)
}

const addProduct = async()=>{
    const farm = await Farm.findOne({name: "Full Belly Farms"})
    const watermelon = await Product.findOne({name: 'Sugar Babies Watermelon'})
    farm.products.push(watermelon)
    await farm.save()
    console.log(farm)
}

Farm.findOne({name: "Full Belly Farms"}).populate('products').then(farm => console.log(farm))
