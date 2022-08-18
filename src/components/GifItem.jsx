import { useState, useEffect } from "react";
export const GifItem=({url,titulo})=>{
    return(
        <>
         <div className="card">
            <img src={url} alt={titulo}/>
            <p>{titulo}</p>
         </div>
        </>
    );
}