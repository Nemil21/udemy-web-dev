const button = document.querySelector('button')
const list = document.querySelector(".jokes")
const addNewJoke = async () =>{
    const jokeText = await getDadJoke();
    const newLI = document.createElement("li") 
    newLI.append(jokeText);
    list.append(newLI);
}
const getDadJoke = async () =>{
    try{
        const config = {headers:{Accept: 'application/json'}}
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    }catch(e){
        return "No Jokes Available at this moment! Sorry! :("
    }
}
// always add event listeners after defining the function
button.addEventListener("click", addNewJoke)