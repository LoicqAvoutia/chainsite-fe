import { NavLink } from 'react-router'
import './card.css'

export const Card = props =>{
    console.log('creazione card')
    return(
        <>
            <div className="card" key={props.prod.id}>
                <img src={`http://localhost:3000/${props.prod.img}`} alt={props.prod.nome} />
                <h4>{props.prod.nome}</h4>
                <NavLink to={`prodotti/${props.prod.id}`} >scopri</NavLink>
            </div>
        </>
    )
}