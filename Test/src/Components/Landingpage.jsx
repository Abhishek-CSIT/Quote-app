import  { useState } from 'react'
import fetchQuote from "./Apicall"

const Landingpage = () => {
    const [quote , setQuote] = useState({});

    const showQuote = async () => {
        const quotes = await fetchQuote(); 
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; 
        setQuote(randomQuote); 
    };
  return (
    <div className='container'> 
        <div className='main'>
        <p><strong>Quote of the day :</strong>{quote.quote}</p>
        </div>
       <button className='send' onClick={showQuote}>New Quote</button>
    </div>
  )
}

export default Landingpage;