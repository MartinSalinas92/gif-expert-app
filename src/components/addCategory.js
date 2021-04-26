
import React, {useState} from 'react'
import PropTypes from 'prop-types';

 const AddCategory = ({setCategories}) => {

    const [state, setstate] = useState('');

    const cambioTexto= (e)=>{

        //console.log(e.target.value);

        setstate(e.target.value)


    }

    const pushEnter= (e)=>{

        e.preventDefault();

        if(state.length > 2){

            setCategories(cats => [state, ...cats])

        }

      

       
    }


    return (
        <form onSubmit={pushEnter}>
                <input
                type="text" 
                value={state}
                onChange={cambioTexto}
                
                
                />
            
        </form>
    )
}

AddCategory.propTypes={

    setCategories: PropTypes.func.isRequired

}
export default AddCategory


