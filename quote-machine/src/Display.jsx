import React from "react"
import Quote from "./Quote";
import Author from "./Author";

let fetchedQuotes = [];


const fetchQuotes = async () => {
  try {
    const res = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
    const data = await res.json();
    fetchedQuotes =  data.quotes;
  } catch (err) {
    console.log(err);
  }
};

fetchQuotes();

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    let rand = Math.floor(Math.random() * fetchedQuotes.length);
    this.setState({
      quote: fetchedQuotes[rand].quote,
      author: fetchedQuotes[rand].author
    });
  }
  render () {
    setTimeout(() => {
      if (this.state.author === "" && fetchedQuotes.length > 0) {
        this.getQuote()
      }
    }, 250)
    return (
      <div id="quote-box">
        <div id="quote">
          <Quote quote={this.state.quote}/>
          <Author author={this.state.author} />
        </div>
        <div>
          <button id="new-quote" onClick={this.getQuote}>New quote</button>
          <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank"><img id="x-logo" src="https://loodibee.com/wp-content/uploads/Twitter-X-Logo.png"/></a>
        </div>
       </div>
    );
  }
}

export default Display