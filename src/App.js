import React,{Component} from 'react';
import {random} from 'lodash'; 
import './App.css';
import QuoteMachine from './components/QuoteMachine'

class App extends Component {
  constructor (props){
    super(props)
    this.state={
      quotes:[],
      quoteNumber:null,
    }
  
  }

  componentDidMount=()=> {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(data=>data.json())
    .then(quotes=>this.setState({quotes},this.assignNewQuoteIndex))
  
  }

//  set number to quotenumber of the state
  assignNewQuoteIndex=()=>{
    this.setState({quoteNumber:this.selectQuoteIndex()})
  }
// select number randomly from 0 to quotes length
  selectQuoteIndex=()=>{
    if (!this.state.quotes.length){
      return;
    }
    return random(0,this.state.quotes.length-1)
  }

  

  // return quote object
  selectQuote=()=>{
    if (!this.state.quotes.length){
      return;
    }
    return this.state.quotes[this.state.quoteNumber]
    
  }

  render(){
    // text-center is bootstrap class
    return (
    <div className="App text-center">

    {/* we use the terinary oprator of js to append the component 
    and the props just if a quote has selected: */}

    {this.selectQuote() ?
      <QuoteMachine 
      quote={this.selectQuote().quote} 
      author={this.selectQuote().author}
      // that method goes to the button in quote machine componenet:
      assignNewQuoteIndex={this.assignNewQuoteIndex}  
      />
      : ""
    }  
    </div>
    );
  }

}

export default App;
