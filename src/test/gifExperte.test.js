import { shallow } from "enzyme"
import GifExpertApp from "../gifExpert"

describe('pruebas en el componente <GifExpertApp />', ()=>{

    test('Debe mostrarse correctamente', () => {

        const wrapper= shallow(<GifExpertApp />)

        expect(wrapper).toMatchSnapshot();
        
    });
    test('debe mostrar una lista de categorias', () => {

        const categorias=['one puch', 'dragonball'];

        const wrapper=shallow(<GifExpertApp defaultCategories={categorias}/>)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGridd').length).toBe(categorias.length);

        
    })
    
    
});