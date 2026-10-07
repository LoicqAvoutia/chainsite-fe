import { NavLink } from 'react-router'
import'./window.css'

export const Window = () =>{
    return(
        <>
        <div className="display-window">
            <div className="desc">
                <h3>brand title</h3>
                <h1>Più di una catena,<br /> è il tuo stile</h1>
                <h3>Catene in argento 925 pensate per accompagnarti ogni giorno in ogni occasione</h3>
                <NavLink to='prodotti'>collezione</NavLink>
            </div>
            <img src="../../img-vet-1.jpg" alt="img" />
        </div>
        </>
    )
}