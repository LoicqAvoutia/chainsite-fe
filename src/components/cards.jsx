import './cards.css'
import { Card } from './card'

export const Cards = props =>{
    return(
        <>
        <div className="cards-container">
            {props.prods.map(prod=><Card key={prod.id} prod={prod}/>)}
        </div>
        </>
    )
}