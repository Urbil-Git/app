import React from 'react';
import './App.css';
import Container from './Container'
import AnotherButton from './AnotherButton';

//change child container color in declarative way

class App extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
      dark: true,
    }
  }

handleClick = () => {
  this.setState(prevState => ({
    dark: !prevState.dark
  }));
}
  render(){
    let col = 'white'
    if (this.state.dark){
      col = 'red'
    }
    return (
      <div>
          <Container color={col}/>
          <AnotherButton onClick={this.handleClick}/>
      </div>
    )
  }
  
}

export default App;
