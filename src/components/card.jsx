import './card.css'

export const Card = props =>{
    return(
        <>
        <div className="card" key={props.prod.id}>
            <img src={`http://localhost:3000/${props.prod.img}`} alt={props.prod.nome} />
        </div>
        </>
    )
}