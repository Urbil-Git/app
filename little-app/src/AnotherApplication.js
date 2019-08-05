import React from 'react';
import './AnotherApplication.css';
import Container from './Container'
import AnotherButton from './AnotherButton';

//change child container color in imperative way passing reference to a DOM element

class AnotherApplication extends React.Component  {
    constructor(props){
      super(props)
      this.state = {
        dark: true,
      }
      this.containerRef = React.createRef();
    }

  handleClick = () => {
    this.setState(prevState => ({
      dark: !prevState.dark
    }));
    if (this.state.dark){
        this.containerRef.current.style.backgroundColor = 'red';
    }
    else {
        this.containerRef.current.style.backgroundColor = 'white';
    }
  }

    render(){
      return (
        <div>
            <Container style={{backgroundColor: 'red'}} ref={this.containerRef}/>
            <AnotherButton onClick={this.handleClick}/>
        </div>
      )
    }
    
  }
  
  export default AnotherApplication;