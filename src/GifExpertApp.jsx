import { useState,useEffect } from "react";
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp=()=>{
    const [categories,setCategories] = useState(['BlackPink','Gato']);
    
    const onAddCategory=(newCategory)=>{
        if(categories.includes(newCategory)) return;
        setCategories([
            newCategory,
            ...categories        
        ]);
    }


    return(
        <>
            {/* TITULO */}
            <h1>GifExpertApp</h1>

            {/* INPUTS */}
            <AddCategory 
                //setCategories={setCategories}

                /* La propiedad onNewCategory te devuelve un valor y ese valor se lo mandamos 
                a la funcion donde la ocupemos */
                onNewCategory={onAddCategory}
            />

            {/* LISTADO DE GIF */}
           
               {categories.map((categoria)=>
                        <GifGrid 
                            key={categoria} 
                            category={categoria}
                        />
                
               )
               }
        </>
    )
}