import * as React from 'react';
import Masonry from 'react-masonry-component';
import styled from 'styled-components';
import './Gallery.css';

const Img = styled.img`
    //border-radius: 10px;
    margin: .5rem;
    width: calc(100% - 1rem);
`; 

const masonryOptions = {
    transitionDuration: 5,
    colums: 4
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }
 
class Gallery extends React.Component {
    render() {
        const childElements = this.props.elements.map(function(element){
            //console.log(element.urls);
            return (
                <div className="image-element-class">
                    <Img src={element.urls.thumb} key={element.id} alt={element.name} />
                </div>
            );
        });
    
        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
        );
    }
}

export default Gallery;