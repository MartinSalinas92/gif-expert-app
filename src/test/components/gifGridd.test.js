import React from 'react';
import { shallow } from "enzyme";
import { GifGridd } from "../../components/gifGridd";
import { useFetchGifs } from '../../Hooks/useFetchGIf';
jest.mock('../../Hooks/useFetchGIf');

describe('Pruebas de componentes <GifGridd />' , ()=>{

    const category="Hulk";

    test('debe mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data:[],
            loading:true


        });

        const wrapper= shallow(<GifGridd  category={category} />)

        expect(wrapper).toMatchSnapshot();
        
    });
    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs=[{
            id:'ABC',
            url:'http://localhost/cualquier/cosa.jpg',
            title:'cualquier cosa'
        }]


        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false


        });
        
        const wrapper= shallow(<GifGridd  category={category} />)

       // expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGriddItem').length).toBe(gifs.length)

        
        
    })
    
    
})