import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/small/commercial/0.jpg';

function Gallery () {
    const currentCategory = {
        name: "commerical",
        description: "photos of grocery stores, food trucks, and other commerical projects"
    };
    return(
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div>
                <img src={photo} 
                alt='Commerical exmaple'
                className='img-thumbnail mx-1' />
            </div>
        </section>
    );
}

export default Gallery;