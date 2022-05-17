import React from 'react'
import { Icon } from 'semantic-ui-react';

function Arrow(props) {
    const { direction } = props;
    return (
        // Disable icon if out of range depending on which one
        <Icon
            data-testid='arrow-icon'
            onClick={(e) => props.handleClick(direction)}
            name={`arrow alternate circle ${direction}`} 
            size='big'
            style={{'color': props.disabled ? 'grey' : 'black'}}
            >
        </Icon>
    )
}

export default Arrow;