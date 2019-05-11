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

  assignNewQuoteIndex=()=>{
    this.setState({quoteNumber:this.selectQuoteIndex()})
  }

  selectQuoteIndex=()=>{
    if (!this.state.quotes.length){
      return;
    }
    return random(0,this.state.quotes.length-1)
  }

  

  selectQuote=()=>{
    if (!this.state.quotes.length){
      return;
    }
    return this.state.quotes[this.state.quoteNumber]
    
  }

  render(){
    
    return (
    <div className="App text-center">

    {this.selectQuote() ?
      <QuoteMachine 
      quote={this.selectQuote().quote} 
      author={this.selectQuote().author}
      assignNewQuoteIndex={this.assignNewQuoteIndex}  
      />
      : ""
    }
      
      
    </div>
  );
    }

}

export default App;
