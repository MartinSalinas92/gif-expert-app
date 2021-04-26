import { useState, useEffect } from 'react';
import { getGif } from '../Helpers/getGif';


export const useFetchGifs = (category)=>{

    const [real, realCambio] = useState({

        data:[],
        loading:true
    });

      useEffect(() => {
        
        getGif(category)
            .then(img=>{
                console.log(img)

                setTimeout(() => {

                    realCambio({

                    
                        data:img,
                        loading:false
    
                    })
                    
                }, 3000);
               
            })
    }, [category])

    return real;
}