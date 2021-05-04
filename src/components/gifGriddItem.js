import React from 'react';
import PropTypes from 'prop-types';

export function GifGriddItem({img, title, images}) {

   
    return (
        <div className="card animate__animated animate__bounce">
             <img src={images} alt={title} />

             <p className="animate__animated animate__fadeInLeft">{title}</p>
            
            
        </div>
    )
}

GifGriddItem.propTypes={

    title:PropTypes.string.isRequired,
    images:PropTypes.string.isRequired
}





