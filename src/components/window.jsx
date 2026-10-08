import { NavLink } from 'react-router'
import { useState, useEffect } from 'react';
import'./window.css'

export const Window = () =>{
    const immagini = [
        "../../img-vet-1.jpg",
        "../../img-vet-2.jpg",
        "../../img-vet-3.jpg"
    ];

    const [indice, setIndice] = useState(0);

    useEffect(() => {
        const intervallo = setInterval(() => {
            setIndice((prev) => (prev + 1) % immagini.length);
            console.log('switch')
        }, 3000);

        return () => clearInterval(intervallo);
    }, []);
    return(
        <>
        <div className="display-window">
            <div className="desc">
                <h3>brand title</h3>
                <h1>Più di una catena,<br /> è il tuo stile</h1>
                <h3>Catene in argento 925 pensate per accompagnarti ogni giorno in ogni occasione</h3>
                <NavLink to='prodotti'>collezione</NavLink>
            </div>
            <img src={immagini[indice]} alt="img" />
        </div>
        </>
    )
}