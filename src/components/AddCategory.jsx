import { useState } from "react";
export const AddCategory=({onNewCategory})=>{
    const [nombre, setNombre] = useState('');

    const onInputChange=({target})=>{
        setNombre(target.value)
    }
    
    const onSubmit=(event)=>{        
        event.preventDefault();
        if(nombre.trim().length<=1) return;
        onNewCategory(nombre.trim());
        //setCategories(categories=>[nombre,...categories]);
        setNombre('');
    }

    return(
        <>
        <form onSubmit={onSubmit}>
            <input type="text"
                    placeholder="Buscar gifs"
                    value={nombre}
                    onChange={onInputChange}
            ></input>
        </form>
         
        </>
    );
}