import React from 'react';
import './App.css';
import Container from './Container'
import AnotherButton from './AnotherButton';

class App extends React.Component  {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
          <Container>
          </Container>
          <br></br>
          <AnotherButton>
          </AnotherButton>
      </div>
    )
  }
  
}

export default App;
