export const getGif= async(category)=>{

    const url=`http://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=pbVSppZy7ITGJ1zu3k0Y62deBZ9V9Gt3`;
    const res= await fetch(url);
    const { data } = await res.json();

    const gifs= data.map(img =>{

        return{
            id: img.id,
            title:img.title,
            images:img.images.downsized.url
        }
    })

    //console.log(gifs);

    return gifs;
    //gifImageState(gifs);

}