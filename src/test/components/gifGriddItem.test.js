import { shallow } from "enzyme"
import { GifGriddItem } from "../../components/gifGriddItem"

describe('Pruebas componente <gifGriddItem />', ()=>{

    const title="martin";
    const images="http://holajulio.com";
    
    const wrapper= shallow(<GifGriddItem title={title} images={images} />)

    test('Debe de mostrar el componente nuevamente ', () => {

        expect(wrapper).toMatchSnapshot()
        
    });
    test('Debe de tener un parrafo con el title', () => {

       const p= wrapper.find('p');
        expect(p.text().trim()).toBe(title);
        
    });
    test('debe tener la imagen igual al url y alt de los props', () => {

        const img= wrapper.find('img');

        //console.log(img.prop('src'));

        expect(img.prop('src')).toBe(images);
        expect(img.prop('alt')).toBe(title);
        
    });
    test('debe de tener animate__bounce', () => {

        const div=wrapper.find('div');

        //console.log()

        const className=div.prop('className');

        expect(className.includes('animate__bounce')).toBe(true);


        
    });
    
    
    
    
})