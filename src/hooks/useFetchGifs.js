import { useState, useEffect } from "react";
import  {getGifs} from "../helpers/getGifs.js"

export const useFetchGifs=(category)=>{
    const [imagenes, setImagenes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImagenes= async()=>{
        const newImages=await getGifs(category)
        setImagenes(newImages);
        setIsLoading(false);
    }


   /* UseEffect sirve para "disparar efectos" secundarios */

    useEffect(() => {
        getImagenes();
    }, [ ]);

    return{
        imagenes,
        isLoading
    }
}