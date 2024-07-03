const form  = document.querySelector('form');
const list = document.querySelector('#tweetlist')
form.addEventListener('submit', function(e){
    e.preventDefault();
    const username = form.elements.username.value;
    const tweet = form.elements.tweet.value;
    const newTweet = document.createElement('li')
    const bname = document.createElement('b')
    bname.append(username);
    newTweet.append = (bname);
    newTweet.append = (': ' + tweet);
    list.append(newTweet);
});


