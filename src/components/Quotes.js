import React, {useState, useEffect}  from "react";
import Twitter from '../twitter.svg'

const Quotes = () => {

     const [quote, setQuote] = useState("");
     const [author, setAuthor] = useState("");

     useEffect(() => {
          getQuote()
     }, []);

     const getQuote = () => {
          let url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
          fetch(url)
          .then(response => response.json())
          .then(result => {
          let allQuotes = result.quotes;
          let random = Math.floor(Math.random() * allQuotes.length)
          let randomQuote = allQuotes[random];
          setQuote(randomQuote.quote);
          setAuthor(randomQuote.author);
          })};
          const handleClick = () => {
               getQuote();
               
          }
     return (
          <div id = "quote-box"> 
          <div id = "text">
          <p>{quote}
          </p>
          </div>
          <div id = "author"><p>
               {author}
          </p></div>
          <div id = "buttons"> 
          <a href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`} id = "tweet-quote" target="_blank">
          <span><img src = {Twitter} alt = ""></img></span>
          </a>
          <button onClick = {handleClick} id = "new-quote">New Quote</button>
          </div>
          </div>
          
          
     )
}

export default Quotes;