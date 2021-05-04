import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme"
import AddCategory from "../../components/addCategory"

describe('Pruebas componente <AddCategory /> ', ()=>{


   
    const setCategories=jest.fn();

    let wrapper= shallow(<AddCategory setCategories={setCategories} />)

    beforeEach(()=>{

        jest.clearAllMocks();

        wrapper=shallow(<AddCategory setCategories={setCategories} />)
    })

    test('debe mostrarse correctamente', () => {

        

        expect(wrapper).toMatchSnapshot();
        
    });


    test('Debe de cambiar la caja de texto', () => {

        const input= wrapper.find('input');

        const value="Hola mundo";

        input.simulate('change', {target: {value}});

        expect(wrapper.find('p').text().trim()).toBe(value)



        
    });

    test('NO debe postear informacion con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} })

        //no llame la funcion

        expect(setCategories).not.toHaveBeenCalled();


        
    });

    test('debe llamar el setCategoria y limpiar la caja de texto', () => {

        
       
        

        const value="Hola mundo";

        //1.input el inputChange
        wrapper.find('input').simulate('change',{target:{value}});

         //2.simular el submit
         wrapper.find('form').simulate('submit', { preventDefault(){} });

         //3.setCategories se debe de haber llamado
         expect(setCategories).toHaveBeenCalled();
         //otra forma de llamar toBeCalledTimes() indica cuantas veces debes llamar a la funcion en este caso 1 vez

         expect(setCategories).toBeCalledTimes(1);

         //tambien de forma de funcion

         expect(setCategories).toBeCalledWith(expect.any(Function));

         
        //4.el valor del input debe estar ''

       expect(wrapper.find('input').prop('value')).toBe(value);


         


        
    })
    
    
    
    

});