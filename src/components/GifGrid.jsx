import { useFetchGifs } from "../hooks/useFetchGifs.js";
import { GifItem } from "./GifItem.jsx";

export const GifGrid=({category})=>{
    
    const {imagenes, isLoading}=useFetchGifs(category);

    

    return(
        <>
            <h3>{category}</h3>
            {isLoading && (<h2>Cargando...</h2>)}
            <div className="card-grid">
                {
                    imagenes.map((imagen)=>(
                        <GifItem 
                        key={imagen.id} 
                        {...imagen}
                        ></GifItem>
                    
                    ))
                }
            </div>
        </>
    )
}