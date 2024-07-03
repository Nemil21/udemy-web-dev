const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
    console.log("Connection Open!!")
}

const personSchema = new mongoose.Schema({
    first:String,
    Last:String
})

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.Last}`;
})

const Person = mongoose.model('Person', personSchema);   