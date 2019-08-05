import React from 'react';

//código para la manera imperative o pasando refs al DOM
/* class Container extends React.Component {
    render(){
        return (
            <div style={{backgroundColor: this.props.color}}>Texto</div>
        )
    }
} */

class Container extends React.Component {
    render(){
        return (
            <div>Texto</div>
        )
    }
}

/* const Container = props => {
    return (
        <div ref={props.containerRef}>Texto</div>
    )
} */

export default Container