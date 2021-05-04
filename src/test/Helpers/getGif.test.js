import { getGif } from "../../Helpers/getGif"

describe('Pruebas con getGif Fetch', ()=>{

    test('Debe de traer 10 elementos', async() => {

        const Gif= await getGif('hulk');

        //console.log(Gif);

        expect(Gif.length).toBe(10);
        
    })
    

})