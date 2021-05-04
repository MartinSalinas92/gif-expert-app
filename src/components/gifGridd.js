import React from 'react';
import { useFetchGifs } from '../Hooks/useFetchGIf';
import { GifGriddItem } from './gifGriddItem';
import PropTypes from 'prop-types';

export const GifGridd = ({category}) => {

    

   const {data, loading}= useFetchGifs(category);

   
  

  

  

   

    return (
        <>
            <h3>{category}</h3>



           
                
            <div className="card-grid">

                {loading && <p>loading</p>}

            {
                data.map(img=>(

                    <GifGriddItem
                      key={img.id}  

                      {...img}

                    
                    />
                    
                ))
            }
                  
            
                
                    
            </div>
                    
                
           
           
        </>
    )
}

GifGridd.propTypes={

    category:PropTypes.string.isRequired

}
