import React from 'react';
import AnotherButton from './AnotherButton'

class SpecialButton extends React.Component {
    constructor(props){
        super(props);
        this.element = document.createElement('div');
    }

    render(){
        return (
        <AnotherButton></AnotherButton>
        )
    }
    
}

export default SpecialButton 