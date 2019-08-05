import React from 'react';
import './Application.css';
import Container from './Container'
import AnotherButton from './AnotherButton';

//change child container color in imperative way passing reference to a DOM element

class Application extends React.Component  {
    constructor(props){
      super(props)
      this.state = {
        dark: true,
      }
      this.divRef = React.createRef();
    }
  
  handleClick = () => {
    this.setState(prevState => ({
      dark: !prevState.dark
    }));
    if (this.state.dark){
        this.divRef.current.style.backgroundColor = 'red';
    }
    else {
        this.divRef.current.style.backgroundColor = 'white';
    }
  }
    render(){
      return (
        <div>
            <div ref={this.divRef} style={{backgroundColor: 'red'}}>t</div>
            <AnotherButton onClick={this.handleClick}/>
        </div>
      )
    }
    
  }
  
  export default Application;