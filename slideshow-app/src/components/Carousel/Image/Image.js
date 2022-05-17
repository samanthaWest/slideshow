import React from 'react'
import { Image as SemanticImage } from 'semantic-ui-react';

function Image(props) {
    const { image } = props;
    return (
        <SemanticImage 
            data-testid='image' 
            src={image} 
            rounded />
        )
}

export default Image;