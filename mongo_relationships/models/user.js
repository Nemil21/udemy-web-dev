const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');
    console.log("Mongo Connection Open!!")
}

const userScehma = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: { _id: false },
            street: String,
            city: String,
            state: String,
            country: String

        }
    ]
})


const User = mongoose.model('User', userScehma);

const makeUser = async() =>{
    const u = new User({
        first: "Nemil",
        last: "Shah"
    }) 
    u.addresses.push({
        street: "23 Sesame St",
        city: "New York",
        state: "NY",
        country: "USA",
        
    }) 
    const res = await u.save()
    console.log(res)
}
makeUser();

const addAddress = async(id) =>{
    const user  = await User.findById(id)
    user.addresses.push(
        {
            street: "99 3rd St",
            city: "New York",
            state: "NY",
            country: "USA"
        }
    )
    const res = await user.save()
    console.log(res)
}
addAddress('661cbd0d85e64c8cd66d6d5f')