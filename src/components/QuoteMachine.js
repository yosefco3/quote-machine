import React from 'react';

const QuoteMachine =({quote,author,assignNewQuoteIndex})=>{
    
        


    return (

        <div  id="quote-box">
        <h2 id="text">{quote}</h2>
        <h3 id="author">{author}</h3>

        <button id="new-quote" 
        className="btn btn-info btn-lg"
        onClick={assignNewQuoteIndex}>Give Me New Quote!</button>

        <a id="tweet-quote" target="_blank" rel="noopener noreferrer"
        className="btn btn-lg btn-success my-2 mx-3" 
        href={`https://twitter.com/intent/tweet?text="${quote}"-${author}`}>Twit</a>
        
        </div>
    )
    
}

export default QuoteMachine
