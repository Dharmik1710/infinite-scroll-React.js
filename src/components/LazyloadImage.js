import React from 'react'
import { Blurhash } from "react-blurhash";

export const LazyloadImage = (props) => {
    console.log(props);    
    const childElements = props.images.map((image) => {
        return (
            <Blurhash
                hash={image.blur_hash}
                width={image.width}
                height={image.height}
                resolutionX={4}
                resolutionY={4}
                punch={0}
            />
        );
    });
    return (
        <div>{childElements}</div>
    )
}
