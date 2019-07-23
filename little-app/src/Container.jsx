import React from 'react';
import SpecialButton from './SpecialButton'
import AnotherButton from './AnotherButton'

class Container extends React.Component {
    render(){
        return (
            <SpecialButton>
                <AnotherButton/>
            </SpecialButton>
        )
    }
}

export default Container