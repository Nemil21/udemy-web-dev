const mongoose = require('mongoose');
const {Schema} = mongoose

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');
    console.log("Mongo Connection Open!!")
}

const userSchema = new Schema({
    username: String,
    age: Number,
    
})
const User = mongoose.model('User', userSchema);

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: [{ type: Schema.Types.ObjectId, ref: 'User'}]
})
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweets = async()=>{
    const user = await User.findOne({username: 'Nemilshah69'})
    const tweet2 = new Tweet({text: 'Eni mane', likes: 420})
    tweet2.user.push(user)
    tweet2.save();
}
// makeTweets();
const findTweet = async()=>{
    const t = await Tweet.find({}).populate('user')
    console.log(t)
    // const user = t.map(t => t.user)
    // console.log(user)
}
findTweet();
// Tweet.find({}).populate('user').then(t => console.log(t))