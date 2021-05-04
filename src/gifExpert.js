import React, { Fragment, useState } from 'react'
import  AddCategory  from './components/addCategory';
import { GifGridd } from './components/gifGridd';
/* tslint:disable:no-unused-variable */











 const GifExpertApp= ({defaultCategories=[]})=>{

    const [categories, setCategories]=useState(defaultCategories);

   //const handled= ()=>{

      //para agregar una categoria con el operador express ... osea los 3 puntos

      //setCategories([...categories, 'MonsterHunter'])

     // setCategories(cats => [...cats, 'MonsterHunter'])




    //}

    return (

        <>

              

                <h2>GitExpertApp</h2>

                <AddCategory setCategories={setCategories}/>
                


                <hr />

                    <ol>
                        {
                            categories.map(category =>(

                               <GifGridd 

                               key={category}
                               
                               category={category}/>
                            ))
                        }
                    </ol>



        </>
     
    );
}


export default GifExpertApp
