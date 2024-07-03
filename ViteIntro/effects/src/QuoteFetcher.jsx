import { useEffect, useState } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"

export default function QuoteFetcher(){
    const [quote, setQuote] = useState({text: "", author:""})
    
    //useEffect does not allow asynchronus callback functions hence we have to workaround by passing a function calls the async function
    useEffect(()=>{ 
        fetchRandomQuote()
    }, [])
    async function fetchRandomQuote() {
        
          const response = await fetch(RANDOM_QUOTE_URL);
          const jsonResponse = await response.json();
          const randomQuote = jsonResponse.quote
          setQuote(randomQuote)
      }
    return(
        <div>

           <button onClick={fetchRandomQuote}>Get Quote using handler</button>
           <h1>{quote.text}</h1>
           <h3>    {quote.author}</h3>
        </div>
    )
}
