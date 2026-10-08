import './cards.css'
import { Card } from './card'

export const Cards = props =>{
    return(
        <>
        <div className="main">
            <div className="category">
                <h3>le nostre categorie</h3>
                <h1>Trova la catena giusta per te</h1>
                <div className="cards-containers">
                    {props.prods.map(prod=>prod.id <= 3 ? <Card key={prod.id} prod={prod}/> : null)}
                </div>
            </div>
            <div className="best-sellers">
                <h3>best sellers</h3>
                <h1>Le più amate</h1>
                <div className="cards-containers">
                    {props.prods.map(prod=>prod.id <= 3 ? <Card key={prod.id} prod={prod}/> : null)}
                </div>
            </div>
        </div>
        </>
    )
}