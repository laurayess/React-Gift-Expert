export const getGifs= async(category)=>{ 
    
    const url=`https://api.giphy.com/v1/gifs/search?api_key=vbjeyek6pxOgHXBBvZa2YRd7BR7ioN5F&q=${category}&limit=20&offset=0&rating=g&lang=en`;
    const resp=await fetch(url);
    const {data}=await resp.json();
    const gifs=data.map(img=>({
        id:img.id,
        titulo:img.title,
        url:img.images.downsized_medium.url,
    }));
    
    return gifs;
}