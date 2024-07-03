import { useEffect, useState } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"

export default function QuoteFetcherLoader(){
    const [quote, setQuote] = useState({text: "", author:""})
    const [isLoading, setIsLoading] = useState(true)
    //useEffect does not allow asynchronus callback functions hence we have to workaround by passing a function calls the async function
    useEffect(()=>{ 
        async function fetchRandomQuote() {
        
            const response = await fetch(RANDOM_QUOTE_URL);
            const jsonResponse = await response.json();
            const randomQuote = jsonResponse.quote
            setQuote(randomQuote)
            setIsLoading(false)
        }
        fetchRandomQuote()
        
    }, [])
    
    return(
        <div>
            <p className="Loader" style={{opacity: isLoading?1:0}}>Loading...</p>
           <h1>{quote.text}</h1>
           <h3>    {quote.author}</h3>
        </div>
    )
}
