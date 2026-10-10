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

export const Cardprod = props =>{
    console.log(props.prod.nome);
    return(
        <>
        <div className="cardprod">
            <img src={`http://localhost:3000/${props.prod.img}`} alt={props.prod.nome} />
            <div className="detail-container">
                <h4>{props.prod.nome}</h4>
                <h4>prezzo:</h4> <p>{props.prod.prezzo}</p>
                <h4>spessore:</h4><p>{props.prod.spessore}</p>
                <h4>carati:</h4><p>{props.prod.carati}</p>
                <NavLink to={`prodotti/${props.prod.id}`} >scopri</NavLink>
            </div>
        </div>
        </>
    )
}