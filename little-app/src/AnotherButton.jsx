import React from 'react';

class AnotherButton extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <button onClick= {this.props.onClick}>clica para cambiar el color</button>
        )
    }
    
}

export default AnotherButton